/**
 * Phase 2 — Content Integration Readiness Specification
 * 
 * Standar format kontrak data untuk membaca metadata kurikulum secara terpadu
 * dari setiap repositori Learning Hub tanpa mengubah kode sumber asli.
 */

export interface RemoteChapterManifest {
  id: string | number;
  number: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  level: number | string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'published' | 'draft' | 'planned';
  estimatedHours?: number;
  tags?: string[];
  hasNotebook?: boolean;
  hasSlides?: boolean;
  hasAssignment?: boolean;
  routePath?: string;
}

export interface RemoteHubConfig {
  schemaVersion: '2.0';
  hubId: string;
  title: string;
  version: string;
  institution: string;
  author: string;
  category: string;
  repositoryUrl: string;
  productionBaseUrl: string;
  chaptersEndpoint?: string; // misalnya "content/catalog.json" atau "content/levels.json"
}

export interface UnifiedSearchResult {
  hubId: string;
  hubTitle: string;
  chapterNumber: string;
  chapterTitle: string;
  chapterUrl: string;
  snippet: string;
  category: string;
  matchScore?: number;
}

