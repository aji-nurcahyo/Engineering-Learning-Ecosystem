import React, { useEffect, useRef } from 'react';
import { 
  X, 
  ExternalLink, 
  GitFork, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Award, 
  AlertCircle,
  Bookmark,
  FileCode2,
  Presentation,
  BookOpenCheck,
  FlaskRound,
  GraduationCap
} from 'lucide-react';
import { LearningHubMetadata } from '../types/hub';

interface HubDetailModalProps {
  hub: LearningHubMetadata | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const HubDetailModal: React.FC<HubDetailModalProps> = ({
  hub,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (hub) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [hub, onClose]);

  if (!hub) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        className="relative flex flex-col w-full max-w-3xl max-h-[90vh] rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-200 p-6 dark:border-slate-800">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {hub.category}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {hub.cluster}
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  hub.deploymentStatus === 'deployed'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                }`}
              >
                {hub.deploymentStatus === 'deployed' ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                <span>{hub.statusLabel}</span>
              </span>
            </div>
            <h2 id="modal-title" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              {hub.title}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {hub.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleBookmark(hub.id)}
              className={`rounded-lg p-2 transition-colors ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                  : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200'
              }`}
              title={isBookmarked ? 'Hapus bookmark lokal' : 'Simpan bookmark lokal'}
              aria-label="Bookmark hub ini"
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              aria-label="Tutup jendela rincian"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Detailed Overview & Metrics Summary */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Gambaran Umum Kurikulum
            </h3>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {hub.description}
            </p>

            {/* Metrics cards grid */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
                <div className="text-[11px] text-slate-400">Bab Terencana</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  {hub.metrics.plannedChapters}
                </div>
              </div>

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
                <div className="text-[11px] text-slate-400">Bab Terimplementasi</div>
                <div className="text-base font-bold text-brand-700 dark:text-brand-400">
                  {hub.metrics.implementedChapters}
                </div>
              </div>

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
                <div className="text-[11px] text-slate-400">Akses Daring Aktif</div>
                <div className={`text-base font-bold ${
                  hub.metrics.onlineAccessibleChapters > 0
                    ? 'text-emerald-700 dark:text-emerald-400'
                    : 'text-slate-400 dark:text-slate-500'
                }`}>
                  {hub.metrics.onlineAccessibleChapters > 0 
                    ? `${hub.metrics.onlineAccessibleChapters} Bab`
                    : '0 (Lokal)'}
                </div>
              </div>

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-800/40">
                <div className="text-[11px] text-slate-400">Artefak Terverifikasi</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  {hub.metrics.verifiedExamplesCount 
                    ? `${hub.metrics.verifiedExamplesCount} Contoh`
                    : hub.metrics.slideDecksCount 
                    ? `${hub.metrics.slideDecksCount} Slide`
                    : hub.metrics.interactiveLabsCount 
                    ? `${hub.metrics.interactiveLabsCount} Lab`
                    : hub.metrics.researchTemplatesCount 
                    ? `${hub.metrics.researchTemplatesCount} Templat`
                    : '-'}
                </div>
              </div>
            </div>

            {/* Granular Artifacts List */}
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {hub.metrics.verifiedExamplesCount && (
                <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  <span className="font-bold">{hub.metrics.verifiedExamplesCount}</span> Contoh Kode CPython Teruji
                </span>
              )}
              {hub.metrics.slideDecksCount && (
                <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 font-medium text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  <span className="font-bold">{hub.metrics.slideDecksCount}</span> Slide Presentasi Berbasis Web
                </span>
              )}
              {hub.metrics.interactiveLabsCount && (
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <span className="font-bold">{hub.metrics.interactiveLabsCount}</span> Lab / Simulator Interaktif
                </span>
              )}
              {hub.metrics.researchTemplatesCount && (
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2.5 py-1 font-medium text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  <span className="font-bold">{hub.metrics.researchTemplatesCount}</span> Templat Riset & Publikasi Ilmiah
                </span>
              )}
            </div>

            {/* Feature Pills */}
            <div className="mt-3 flex flex-wrap gap-2">
              {hub.features.hasSlides && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                  <Presentation className="h-3.5 w-3.5" />
                  <span>Presentasi Slides Interaktif</span>
                </span>
              )}
              {hub.features.hasNotebooks && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
                  <BookOpenCheck className="h-3.5 w-3.5" />
                  <span>Jupyter Notebooks Terverifikasi</span>
                </span>
              )}
              {hub.features.hasInteractiveLabs && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <FlaskRound className="h-3.5 w-3.5" />
                  <span>Laboratorium Klien Interaktif</span>
                </span>
              )}
              {hub.features.hasResearchTrack && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                  <GraduationCap className="h-3.5 w-3.5" />
                  <span>Research Track / Jalur Riset</span>
                </span>
              )}
            </div>
          </div>

          {/* Level Hierarchy */}
          {hub.levelStructure && hub.levelStructure.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Struktur Jenjang / Pilar Akademik
                </h3>
              </div>
              <ul className="space-y-1.5 rounded-lg border border-slate-100 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
                {hub.levelStructure.map((lvl, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500" />
                    <span>{lvl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Competencies */}
          {hub.keyCompetencies && hub.keyCompetencies.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Kompetensi Inti yang Dibangun
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {hub.keyCompetencies.map((comp, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2 rounded-lg border border-slate-100 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-800/60"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                      {comp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Chapters Preview / Sampling */}
          {hub.chaptersPreview && hub.chaptersPreview.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Contoh Silabus & Modul Representatif
              </h3>
              <div className="divide-y divide-slate-100 rounded-lg border border-slate-100 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-800/50">
                {hub.chaptersPreview.map((ch, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-3 p-3">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 pt-0.5">
                        {ch.number}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                          {ch.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {ch.focus}
                        </div>
                      </div>
                    </div>
                    {ch.status && (
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        ch.status === 'published'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {ch.status === 'published' ? 'Daring' : 'Lokal'}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prerequisites */}
          {hub.prerequisites && hub.prerequisites.length > 0 && (
            <div className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-800/40 dark:text-slate-400">
              <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <strong className="font-semibold text-slate-800 dark:text-slate-200">Prasyarat Rekomendasi: </strong>
                {hub.prerequisites.join(', ')}.
              </div>
            </div>
          )}

          {/* Provenance & Manifest Transparency */}
          <div className="rounded-lg border border-slate-200/80 bg-slate-50/50 p-3.5 text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400 space-y-1">
            <div className="flex items-center justify-between font-semibold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <FileCode2 className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
                <span>Transparansi Manifest Sumber</span>
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                {hub.provenance.sourceRevision ? `Revisi: ${hub.provenance.sourceRevision}` : ''}
              </span>
            </div>
            <div>Berkas acuan: <code className="font-mono text-xs text-slate-700 dark:text-slate-300">{hub.provenance.sourceManifest}</code></div>
            <div>
              Status Deployment: <strong className="text-slate-700 dark:text-slate-300">
                {hub.deploymentStatus === 'deployed' ? 'Live Hosting Publik (GitHub Pages)' : 'Pengembangan Repositori Lokal (Kampus)'}
              </strong>
            </div>
            {hub.provenance.verificationNotes && (
              <div className="pt-0.5 text-slate-600 dark:text-slate-400 italic">
                Catatan: {hub.provenance.verificationNotes}
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-slate-50/80 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/60">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Terakhir diverifikasi: {hub.provenance.lastSynchronizedAt}
          </div>

          <div className="flex items-center gap-2">
            {hub.repositoryUrl && (
              <a
                href={hub.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                <GitFork className="h-3.5 w-3.5" />
                <span>Repositori GitHub</span>
              </a>
            )}

            {hub.websiteUrl ? (
              <a
                href={hub.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold shadow-xs transition ${
                  hub.deploymentStatus === 'deployed'
                    ? 'bg-brand-700 text-white hover:bg-brand-800 dark:bg-brand-600 dark:hover:bg-brand-500'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700'
                }`}
                title={
                  hub.deploymentStatus === 'deployed'
                    ? `Buka situs web daring ${hub.title}`
                    : `Tautan publik terdaftar (${hub.websiteUrl}) — situs web segera hadir`
                }
              >
                <span>Buka Learning Hub</span>
                {hub.deploymentStatus === 'local-only' && (
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    Segera Hadir
                  </span>
                )}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold text-slate-500 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500"
                title="Situs daring belum dipublikasikan ke GitHub Pages"
              >
                <span>Belum Dipublikasikan Daring</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
