import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { getImagesForFolder } from '../utils/imageResolver';

interface ImageGalleryProps {
  images?: string[];
  imagesFolder?: string;
  projectTitle: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, imagesFolder, projectTitle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isPanning, setIsPanning] = useState(false);
  const pointerStartRef = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % resolvedImages.length);
    setZoomLevel(1);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + resolvedImages.length) % resolvedImages.length);
    setZoomLevel(1);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  useEffect(() => {
    if (zoomLevel === 1) {
      // reset pan when zoom returns to 1
      setTranslateX(0);
      setTranslateY(0);
      setIsPanning(false);
      pointerStartRef.current = null;
    }
  }, [zoomLevel]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (zoomLevel === 1) return;
    e.preventDefault();
    const el = e.currentTarget;
    try { el.setPointerCapture(e.pointerId); } catch { /* ignore pointer capture errors */ }
    setIsPanning(true);
    pointerStartRef.current = { x: e.clientX, y: e.clientY, tx: translateX, ty: translateY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPanning || !pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    setTranslateX(pointerStartRef.current.tx + dx);
    setTranslateY(pointerStartRef.current.ty + dy);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isPanning) {
      setIsPanning(false);
      try { e.currentTarget.releasePointerCapture(e.pointerId); } catch { /* ignore pointer capture release errors */ }
      pointerStartRef.current = null;
    }
  };

  const [resolvedImages, setResolvedImages] = useState<string[]>(images ?? []);

  useEffect(() => {
    let mounted = true;
    async function load() {
      if (images && images.length > 0) {
        if (mounted) setResolvedImages(images);
        return;
      }
      if (imagesFolder) {
        const imgs = await getImagesForFolder(imagesFolder);
        if (mounted) setResolvedImages(imgs);
      }
    }
    load();
    return () => { mounted = false; };
  }, [images, imagesFolder]);

  if (resolvedImages.length === 0) return null;

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <img
              src={resolvedImages[currentImageIndex]}
              alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
              className="w-full h-96 object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200"
              onClick={openModal}
            />
          
          {/* Navigation Arrows */}
          {resolvedImages.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {resolvedImages.length}
          </div>

          {/* Zoom Button */}
          <button
            onClick={openModal}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
            aria-label="Open in fullscreen"
          >
            <ZoomIn size={18} />
          </button>
        </div>

        {/* Thumbnail Strip */}
          {resolvedImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {resolvedImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'border-blue-600 dark:border-blue-400'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <img
                  src={image}
                  alt={`${projectTitle} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            {/* Modal Controls */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                onClick={zoomOut}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Zoom out"
              >
                <ZoomOut size={18} />
              </button>
              <button
                onClick={zoomIn}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Zoom in"
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={closeModal}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image (supports pointer drag when zoomed) */}
            <div
              className="overflow-auto max-h-full"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={handlePointerUp}
              style={{ touchAction: zoomLevel > 1 ? 'none' : 'auto' }}
            >
              <div>
                <img
                  src={resolvedImages[currentImageIndex]}
                  alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
                  className="max-w-none"
                  draggable={false}
                  style={{
                    transform: `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    cursor: zoomLevel > 1 ? (isPanning ? 'grabbing' : 'grab') : 'zoom-in',
                    transition: isPanning ? 'none' : 'transform 200ms ease',
                    maxHeight: zoomLevel === 1 ? '90vh' : 'none',
                    maxWidth: zoomLevel === 1 ? '90vw' : 'none'
                  }}
                />
              </div>
            </div>

            {/* Modal Navigation */}
              {resolvedImages.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Modal Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {resolvedImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;