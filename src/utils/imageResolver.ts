// Utility to lazily resolve image URLs from src/images/projects using Vite's import.meta.glob

const modules = import.meta.glob('../images/projects/**', { as: 'url' }) as Record<string, () => Promise<string>>;

const cache: Record<string, string[]> = {};

function normalizeKey(key: string) {
  // key example: '../images/projects/Skinraya/1.png' => 'Skinraya/1.png'
  return key.replace('../images/projects/', '');
}

export async function getImagesForFolder(folderName: string): Promise<string[]> {
  if (cache[folderName]) return cache[folderName];

  const entries: Array<{ name: string; loader: () => Promise<string> }> = [];

  for (const key in modules) {
    if (key.includes(`../images/projects/${folderName}/`)) {
      const name = normalizeKey(key);
      entries.push({ name, loader: modules[key] });
    }
  }

  // Sort by filename (numeric if possible)
  entries.sort((a, b) => {
    const aName = a.name.replace(/[^0-9]/g, '') || a.name;
    const bName = b.name.replace(/[^0-9]/g, '') || b.name;
    const aNum = parseInt(aName, 10);
    const bNum = parseInt(bName, 10);
    if (!isNaN(aNum) && !isNaN(bNum)) return aNum - bNum;
    return a.name.localeCompare(b.name);
  });

  const urls = await Promise.all(entries.map((e) => e.loader()));
  cache[folderName] = urls;
  return urls;
}

export async function getSingleImage(folderName: string, filename: string): Promise<string | null> {
  const keyToFind = `../images/projects/${folderName}/${filename}`;
  if (modules[keyToFind]) {
    return modules[keyToFind]();
  }
  return null;
}
