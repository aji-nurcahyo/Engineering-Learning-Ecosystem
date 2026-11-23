export type AcademicCluster =
  | 'Computing & Artificial Intelligence'
  | 'Sensing, Signals & Embedded Systems'
  | 'Vision & Geospatial Intelligence'
  | 'Scientific Research & Methodology';

export type HubCategory = 
  | 'Programming'
  | 'Artificial Intelligence'
  | 'Internet of Things'
  | 'Multimedia & Computer Vision'
  | 'Signal Processing'
  | 'Remote Sensing & Geospatial'
  | 'Scientific Research & Methodology';

export type PublicationStatus = 
  | 'published'       // Terpublikasi aktif di GitHub Pages
  | 'in-development'; // Sedang dalam tahap pengembangan / repositori lokal

export type DeploymentStatus = 
  | 'deployed'        // Memiliki live site publik di GitHub Pages
  | 'local-only';     // Repositori/workspace lokal, belum di-deploy ke hosting publik

export interface ChapterOutline {
  number: string;
  title: string;
  focus: string;
  status?: 'published' | 'implemented' | 'planned';
}

export interface HubFeatures {
  hasSlides: boolean;
  hasNotebooks: boolean;
  hasInteractiveLabs: boolean;
  hasResearchTrack: boolean;
  hasAssessments: boolean;
}

export interface HubDetailedMetrics {
  plannedChapters: number;
  implementedChapters: number;
  contentPublishedChapters: number;
  onlineAccessibleChapters: number;
  
  // Specific supplementary artifacts (reported with discrete, unambiguous units)
  verifiedExamplesCount?: number;
  slideDecksCount?: number;
  interactiveLabsCount?: number;
  researchTemplatesCount?: number;
}

export interface HubProvenance {
  sourceManifest: string;
  sourceRevision?: string;
  lastSynchronizedAt: string;
  verificationNotes?: string;
}

export interface LearningHubMetadata {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  cluster: AcademicCluster;
  category: HubCategory;
  iconName: string;
  
  // Deployment & Publication Integrity
  deploymentStatus: DeploymentStatus;
  status: PublicationStatus;
  statusLabel: string;
  websiteUrl?: string;
  repositoryUrl?: string;
  
  // Distinct, Unambiguous Chapter & Artifact Metrics
  metrics: HubDetailedMetrics;
  
  // Backward compatibility fields
  plannedChaptersCount: number;
  implementedChaptersCount: number;
  publishedChaptersCount: number;
  chaptersCount?: number;
  chaptersBreakdown?: string;
  
  topics: string[];
  features: HubFeatures;
  provenance: HubProvenance;
  featured: boolean;
  lastUpdated: string;
  levelStructure?: string[];
  keyCompetencies: string[];
  prerequisites?: string[];
  chaptersPreview?: ChapterOutline[];
}

export interface LearningPathStep {
  hubId: string;
  stageName: string;
  description: string;
  targetChapters?: string;
  availabilityStatus: 'Tersedia Daring' | 'Tersedia Lokal' | 'Dalam Pengembangan';
  directLink?: string;
  recommendedFocus: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  targetRole: string;
  description: string;
  prerequisites: string;
  cluster: AcademicCluster;
  steps: LearningPathStep[];
}
