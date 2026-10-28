export type BuildType = 'Solo' | 'Team';

export interface ProjectMetadata {
  build_type?: BuildType | string;
  built_under?: string;
  category?: string;
  categories?: string[];
}

/**
 * Split compound labels into distinct, reusable dimensions so a project never
 * repeats its platform in a label such as "AI-Powered Mobile App" and "Mobile App".
 * Unknown labels are retained rather than silently discarded.
 */
const CATEGORY_DIMENSIONS: Record<string, string[]> = {
  'ai-powered web app': ['AI-Powered', 'Web App'],
  'ai powered web app': ['AI-Powered', 'Web App'],
  'ai-powered mobile app': ['AI-Powered', 'Mobile App'],
  'ai powered mobile app': ['AI-Powered', 'Mobile App'],
  'machine learning tool': ['Machine Learning', 'Tool'],
};

export function getProjectCategories(project: ProjectMetadata): string[] {
  const sourceCategories = [...(project.categories ?? []), project.category ?? ''];
  const normalized: string[] = [];

  for (const category of sourceCategories) {
    const label = category.trim();
    if (!label) continue;

    const dimensions = CATEGORY_DIMENSIONS[label.toLowerCase()] ?? [label];
    for (const dimension of dimensions) {
      if (!normalized.some(existing => existing.toLowerCase() === dimension.toLowerCase())) {
        normalized.push(dimension);
      }
    }
  }

  return normalized;
}

/**
 * Present the two independent project metadata dimensions consistently:
 * how the work was built, and the context in which it was delivered.
 */
export function getBuildApproach(project: ProjectMetadata): string {
  if (project.build_type === 'Team') return 'Team build';
  if (project.build_type === 'Solo') return 'Solo build';
  return 'Build approach not specified';
}

export function getProjectContext(project: ProjectMetadata): string {
  const context = project.built_under?.trim();

  if (!context) return 'Context not specified';

  const normalized = context.toLowerCase();

  if (normalized === 'personal') return 'Personal project';
  if (normalized === 'freelancing' || normalized === 'freelance') return 'Freelance client work';
  if (normalized === 'espace' || normalized === 'nuvantica software') {
    return `Company work · ${context}`;
  }

  // Preserve unknown values rather than guessing what kind of engagement they represent.
  return context;
}
