import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Images,
  Minus,
  Plus,
  RotateCcw,
  X,
} from 'lucide-react';
import { getImagesForFolder } from '../utils/imageResolver';

interface ImageGalleryProps {
  images?: string[];
  imagesFolder?: string;
  projectTitle: string;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, imagesFolder, projectTitle }) => {
  const [resolvedImages, setResolvedImages] = useState<string[]>(images ?? []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const dragOrigin = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const pointerMoved = useRef(false);

  useEffect(() => {
    let active = true;

    const loadImages = async () => {
      if (images?.length) {
        if (active) setResolvedImages(images);
        return;
      }

      if (imagesFolder) {
        try {
          const folderImages = await getImagesForFolder(imagesFolder);
          if (active) setResolvedImages(folderImages);
        } catch (error) {
          console.error('Unable to load project gallery images:', error);
          if (active) setResolvedImages([]);
        }
        return;
      }

      if (active) setResolvedImages([]);
    };

    void loadImages();
    return () => { active = false; };
  }, [images, imagesFolder]);

  useEffect(() => {
    setCurrentImageIndex(0);
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  }, [resolvedImages]);

  const resetView = useCallback(() => {
    setZoom(MIN_ZOOM);
    setPan({ x: 0, y: 0 });
  }, []);

  const selectImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setImageLoaded(false);
    resetView();
  }, [resetView]);

  const stepImage = useCallback((direction: -1 | 1) => {
    if (resolvedImages.length < 2) return;
    setCurrentImageIndex(index => (index + direction + resolvedImages.length) % resolvedImages.length);
    setImageLoaded(false);
    resetView();
  }, [resolvedImages.length, resetView]);

  const closeViewer = useCallback(() => {
    setIsViewerOpen(false);
    resetView();
  }, [resetView]);

  const openViewer = useCallback(() => {
    setIsViewerOpen(true);
    resetView();
  }, [resetView]);

  const changeZoom = useCallback((amount: number) => {
    setZoom(current => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number((current + amount).toFixed(2))));
      if (next === MIN_ZOOM) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  useEffect(() => {
    if (!isViewerOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowRight') stepImage(1);
      if (event.key === 'ArrowLeft') stepImage(-1);
      if (event.key === '+' || event.key === '=') changeZoom(ZOOM_STEP);
      if (event.key === '-') changeZoom(-ZOOM_STEP);
      if (event.key === '0') resetView();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isViewerOpen, closeViewer, stepImage, changeZoom, resetView]);

  useEffect(() => {
    const activeThumb = thumbnailsRef.current?.querySelector<HTMLElement>('[aria-current="true"]');
    activeThumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }, [currentImageIndex]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (zoom <= 1) return;
    event.preventDefault();
    pointerMoved.current = false;
    dragOrigin.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragOrigin.current) return;
    const dx = event.clientX - dragOrigin.current.x;
    const dy = event.clientY - dragOrigin.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) pointerMoved.current = true;
    setPan({ x: dragOrigin.current.panX + dx, y: dragOrigin.current.panY + dy });
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    dragOrigin.current = null;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  if (resolvedImages.length === 0) {
    return (
      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
        <Images size={30} strokeWidth={1.5} />
        <p className="mt-3 text-sm font-medium">Project images coming soon</p>
      </div>
    );
  }

  const activeImage = resolvedImages[currentImageIndex];

  return (
    <>
      <section aria-label={`${projectTitle} image gallery`} className="w-full min-w-0 space-y-4">
        <div className="group relative isolate overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-[#f0f2f5] shadow-[0_24px_70px_-42px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-[#111827]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),rgba(226,232,240,0.25)_68%,rgba(203,213,225,0.15))] dark:bg-[radial-gradient(ellipse_at_center,rgba(51,65,85,0.25),rgba(15,23,42,0.05)_70%)]" />
          <button
            type="button"
            onClick={openViewer}
            className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden p-4 sm:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
            aria-label={`Open ${projectTitle} image ${currentImageIndex + 1} in image viewer`}
          >
            <img
              key={activeImage}
              src={activeImage}
              alt={`${projectTitle} preview ${currentImageIndex + 1}`}
              onLoad={() => setImageLoaded(true)}
              className={`max-h-full max-w-full select-none object-contain transition-[opacity,transform] duration-500 ease-out group-hover:scale-[1.015] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              draggable={false}
            />
            {!imageLoaded && <div className="absolute inset-0 m-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600 dark:border-slate-600 dark:border-t-blue-400" />}
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent px-4 pb-4 pt-14 sm:px-5 sm:pb-5">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">{projectTitle}</p>
              <p className="mt-0.5 text-xs text-white/70">Project gallery</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-xs font-medium tabular-nums text-white backdrop-blur-md">
                {String(currentImageIndex + 1).padStart(2, '0')} <span className="text-white/55">/ {String(resolvedImages.length).padStart(2, '0')}</span>
              </span>
              <button
                type="button"
                onClick={openViewer}
                aria-label="Open fullscreen image viewer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Expand size={16} />
              </button>
            </div>
          </div>

          {resolvedImages.length > 1 && (
            <>
              <button type="button" onClick={() => stepImage(-1)} aria-label="Previous image" className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/45 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-slate-950/70 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4">
                <ChevronLeft size={21} />
              </button>
              <button type="button" onClick={() => stepImage(1)} aria-label="Next image" className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-950/45 text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-slate-950/70 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4">
                <ChevronRight size={21} />
              </button>
            </>
          )}
        </div>

        {resolvedImages.length > 1 && (
          <div>
            <div className="mb-2.5 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Explore the gallery</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">Select an image to preview</p>
            </div>
            <div ref={thumbnailsRef} className="flex gap-2.5 overflow-x-auto pb-2 [scrollbar-color:theme(colors.slate.300)_transparent] [scrollbar-width:thin] dark:[scrollbar-color:theme(colors.slate.700)_transparent]" role="group" aria-label="Choose project image">
              {resolvedImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => selectImage(index)}
                  aria-label={`Show image ${index + 1} of ${resolvedImages.length}`}
                  aria-current={index === currentImageIndex ? 'true' : undefined}
                  className={`group/thumb relative h-[4.5rem] w-[5.5rem] shrink-0 overflow-hidden rounded-xl border-2 bg-slate-100 p-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-slate-800 dark:focus-visible:ring-offset-slate-950 sm:h-20 sm:w-24 ${index === currentImageIndex ? 'border-blue-600 shadow-[0_0_0_3px_rgba(37,99,235,0.13)] dark:border-blue-400' : 'border-transparent opacity-70 hover:border-slate-300 hover:opacity-100 dark:hover:border-slate-600'}`}
                >
                  <img src={image} alt="" loading="lazy" draggable={false} className="h-full w-full rounded-[0.55rem] object-cover transition-transform duration-300 group-hover/thumb:scale-105" />
                  {index === currentImageIndex && <span className="absolute inset-x-2 bottom-1 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {isViewerOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-[#070a11]/[0.97] text-white backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} image viewer`}
          onClick={(event) => { if (event.target === event.currentTarget) closeViewer(); }}
        >
          <header className="relative z-20 flex min-h-[4.5rem] items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-7">
            <div className="flex min-w-0 items-center gap-3">
              <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] sm:flex"><Images size={18} /></div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold sm:text-base">{projectTitle}</p>
                <p className="mt-0.5 text-xs text-white/50">Image {currentImageIndex + 1} of {resolvedImages.length} · {Math.round(zoom * 100)}%</p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <button type="button" onClick={() => changeZoom(-ZOOM_STEP)} disabled={zoom <= MIN_ZOOM} aria-label="Zoom out" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition hover:bg-white/[0.13] disabled:cursor-not-allowed disabled:opacity-30"><Minus size={17} /></button>
              <button type="button" onClick={resetView} aria-label="Reset zoom and position" className="hidden h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-3 text-xs font-medium transition hover:bg-white/[0.13] sm:inline-flex"><RotateCcw size={14} /> Reset</button>
              <button type="button" onClick={() => changeZoom(ZOOM_STEP)} disabled={zoom >= MAX_ZOOM} aria-label="Zoom in" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition hover:bg-white/[0.13] disabled:cursor-not-allowed disabled:opacity-30"><Plus size={17} /></button>
              <span className="mx-1 hidden h-6 w-px bg-white/10 sm:block" />
              <button type="button" onClick={closeViewer} aria-label="Close image viewer" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] transition hover:border-white/20 hover:bg-white/[0.15]"><X size={18} /></button>
            </div>
          </header>

          <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-3 py-4 sm:px-16 sm:py-6">
            <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.5)_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
            {resolvedImages.length > 1 && (
              <>
                <button type="button" onClick={() => stepImage(-1)} aria-label="Previous image" className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white/90 backdrop-blur-md transition hover:bg-white/[0.18] sm:left-5 sm:h-12 sm:w-12"><ChevronLeft size={24} /></button>
                <button type="button" onClick={() => stepImage(1)} aria-label="Next image" className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white/90 backdrop-blur-md transition hover:bg-white/[0.18] sm:right-5 sm:h-12 sm:w-12"><ChevronRight size={24} /></button>
              </>
            )}
            <div
              ref={stageRef}
              className={`relative z-[1] flex h-full w-full items-center justify-center overflow-hidden ${zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'}`}
              onDoubleClick={() => zoom > 1 ? resetView() : setZoom(2)}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onWheel={(event) => {
                if (event.ctrlKey || event.metaKey) {
                  event.preventDefault();
                  changeZoom(event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP);
                }
              }}
              style={{ touchAction: zoom > 1 ? 'none' : 'pan-y' }}
            >
              <img
                key={activeImage}
                src={activeImage}
                alt={`${projectTitle} full-size image ${currentImageIndex + 1}`}
                draggable={false}
                onClick={() => { if (!pointerMoved.current) changeZoom(zoom > 1 ? -zoom + 1 : 1); }}
                className="max-h-full max-w-full select-none object-contain drop-shadow-[0_20px_55px_rgba(0,0,0,0.3)]"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  transform: `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${zoom})`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 220ms cubic-bezier(0.2, 0.75, 0.25, 1)',
                  willChange: zoom > 1 ? 'transform' : 'auto',
                }}
              />
            </div>
          </div>

          <footer className="relative z-20 border-t border-white/10 bg-black/20 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:px-7 sm:pt-4">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
              <p className="hidden text-xs text-white/45 sm:block">Use ← → to navigate · + / − to zoom · 0 to reset · Esc to close</p>
              <p className="text-xs text-white/50 sm:hidden">Double-tap to zoom · Drag to explore when zoomed</p>
              {resolvedImages.length > 1 && (
                <div className="flex max-w-[70%] gap-2 overflow-x-auto py-1 sm:max-w-[60%]" aria-label="Select image in viewer">
                  {resolvedImages.map((image, index) => (
                    <button key={`${image}-viewer-${index}`} type="button" onClick={() => selectImage(index)} aria-label={`View image ${index + 1}`} aria-current={index === currentImageIndex ? 'true' : undefined} className={`h-10 w-14 shrink-0 overflow-hidden rounded-lg border transition sm:h-12 sm:w-16 ${index === currentImageIndex ? 'border-blue-400 opacity-100 ring-1 ring-blue-400/40' : 'border-white/10 opacity-45 hover:opacity-90'}`}>
                      <img src={image} alt="" loading="lazy" draggable={false} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
