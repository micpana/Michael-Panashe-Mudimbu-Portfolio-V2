export type BuildType = 'Solo' | 'Team';

export interface ProjectMetadata {
  build_type?: BuildType | string;
  built_under?: string;
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
  if (normalized === 'freelancing' || normalized === 'freelance') return 'Freelance work';

  // Company names are retained verbatim; avoid implying project ownership.
  return `Company work · ${context}`;
}
