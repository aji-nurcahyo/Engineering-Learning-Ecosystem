import React from 'react';
import { 
  Terminal, 
  Brain, 
  Cpu, 
  Eye, 
  Activity,
  Globe,
  FlaskConical,
  ExternalLink, 
  GitFork, 
  Bookmark, 
  ListOrdered,
  Calendar,
  CheckCircle2,
  Clock,
  Presentation,
  BookOpenCheck,
  FlaskRound,
  GraduationCap
} from 'lucide-react';
import { LearningHubMetadata } from '../types/hub';

interface HubCardProps {
  hub: LearningHubMetadata;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onInspectDetails: (hub: LearningHubMetadata) => void;
}

export const HubCard: React.FC<HubCardProps> = ({
  hub,
  isBookmarked,
  onToggleBookmark,
  onInspectDetails,
}) => {
  // Purposeful domain icon selector
  const renderIcon = () => {
    switch (hub.iconName) {
      case 'Terminal':
        return <Terminal className="h-6 w-6 text-brand-700 dark:text-brand-300" />;
      case 'Brain':
        return <Brain className="h-6 w-6 text-indigo-700 dark:text-indigo-300" />;
      case 'Cpu':
        return <Cpu className="h-6 w-6 text-amber-700 dark:text-amber-300" />;
      case 'Activity':
        return <Activity className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />;
      case 'Eye':
        return <Eye className="h-6 w-6 text-teal-700 dark:text-teal-300" />;
      case 'Globe':
        return <Globe className="h-6 w-6 text-sky-700 dark:text-sky-300" />;
      case 'FlaskConical':
        return <FlaskConical className="h-6 w-6 text-rose-700 dark:text-rose-300" />;
      default:
        return <Terminal className="h-6 w-6 text-brand-700 dark:text-brand-300" />;
    }
  };

  return (
    <article 
      className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
      aria-labelledby={`hub-title-${hub.id}`}
    >
      <div>
        {/* Top bar: Cluster, Category, Status & Bookmark */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {hub.category}
            </span>
            <span className="hidden sm:inline-block text-slate-300 dark:text-slate-700">•</span>
            <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate max-w-[180px]">
              {hub.cluster}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Publication Status Badge */}
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                hub.deploymentStatus === 'deployed'
                  ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                  : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
              }`}
            >
              {hub.deploymentStatus === 'deployed' ? (
                <CheckCircle2 className="h-3 w-3" />
              ) : (
                <Clock className="h-3 w-3" />
              )}
              <span>{hub.statusLabel}</span>
            </span>

            {/* Local Bookmark Button */}
            <button
              onClick={() => onToggleBookmark(hub.id)}
              className={`rounded-md p-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                isBookmarked
                  ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                  : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200'
              }`}
              title={isBookmarked ? 'Hapus dari daftar tersimpan lokal' : 'Simpan di browser lokal'}
              aria-label={isBookmarked ? `Hapus ${hub.title} dari bookmark` : `Simpan ${hub.title}`}
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Header: Icon, Title & Tagline */}
        <div className="mt-4 flex items-start gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 border border-slate-200/80 dark:border-slate-800 dark:bg-slate-800/80">
            {renderIcon()}
          </div>
          <div>
            <h2 
              id={`hub-title-${hub.id}`} 
              className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 transition-colors"
            >
              {hub.title}
            </h2>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 line-clamp-1">
              {hub.tagline}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className="mt-3 text-sm text-slate-600 leading-relaxed dark:text-slate-300 line-clamp-3">
          {hub.description}
        </p>

        {/* Honest Chapter & Artifact Metrics Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <ListOrdered className="h-4 w-4 text-slate-500 dark:text-slate-400 shrink-0" />
            <span>
              <strong>{hub.metrics.implementedChapters}</strong> / {hub.metrics.plannedChapters} Bab
            </span>
          </div>
          <div className="text-[11px] font-mono">
            {hub.deploymentStatus === 'deployed' ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {hub.metrics.onlineAccessibleChapters} Bab Daring
              </span>
            ) : (
              <span className="text-amber-600 dark:text-amber-400 font-medium">
                Workspace Lokal
              </span>
            )}
          </div>
        </div>

        {/* Granular Artifacts Indicators */}
        <div className="mt-2.5 flex flex-wrap gap-1.5 text-[10px]">
          {hub.metrics.verifiedExamplesCount && (
            <span className="rounded bg-slate-100 px-2 py-0.5 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {hub.metrics.verifiedExamplesCount} Contoh CPython
            </span>
          )}
          {hub.metrics.interactiveLabsCount && (
            <span className="rounded bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900">
              {hub.metrics.interactiveLabsCount} Interactive Labs
            </span>
          )}
          {hub.metrics.slideDecksCount && (
            <span className="rounded bg-blue-50 px-2 py-0.5 font-medium text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
              {hub.metrics.slideDecksCount} Slides
            </span>
          )}
          {hub.metrics.researchTemplatesCount && (
            <span className="rounded bg-amber-50 px-2 py-0.5 font-medium text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
              {hub.metrics.researchTemplatesCount} Templat Riset
            </span>
          )}
        </div>

        {/* Truly Available Feature Badges (No fake badges!) */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {hub.features.hasSlides && (
            <span className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
              <Presentation className="h-3 w-3" />
              <span>Slides Presentasi</span>
            </span>
          )}
          {hub.features.hasNotebooks && (
            <span className="inline-flex items-center gap-1 rounded bg-purple-50 px-2 py-0.5 text-[10px] font-semibold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-100 dark:border-purple-900">
              <BookOpenCheck className="h-3 w-3" />
              <span>Jupyter Notebooks</span>
            </span>
          )}
          {hub.features.hasInteractiveLabs && (
            <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900">
              <FlaskRound className="h-3 w-3" />
              <span>Interactive Labs</span>
            </span>
          )}
          {hub.features.hasResearchTrack && (
            <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900">
              <GraduationCap className="h-3 w-3" />
              <span>Research Track</span>
            </span>
          )}
        </div>

        {/* Focus Topics tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {hub.topics.slice(0, 3).map((topic, idx) => (
            <span
              key={idx}
              className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {topic}
            </span>
          ))}
          {hub.topics.length > 3 && (
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              +{hub.topics.length - 3} lainnya
            </span>
          )}
        </div>
      </div>

      {/* Footer / Actions Area */}
      <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800/80">
        <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>Pembaruan: {hub.lastUpdated}</span>
          </span>
          <span className="font-medium text-slate-600 dark:text-slate-400">
            {hub.deploymentStatus === 'deployed' 
              ? `${hub.metrics.onlineAccessibleChapters} Bab Daring` 
              : `${hub.metrics.implementedChapters} Bab Terimplementasi Lokal`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Primary Action: Open Learning Hub */}
          {hub.websiteUrl ? (
            <a
              href={hub.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold shadow-2xs transition focus-visible:outline-none focus-visible:ring-2 ${
                hub.deploymentStatus === 'deployed'
                  ? 'bg-brand-700 text-white hover:bg-brand-800 focus-visible:ring-brand-500 dark:bg-brand-600 dark:hover:bg-brand-500'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700'
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
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500"
              title="Repositori berstatus dalam pengembangan lokal, belum dipublikasikan ke hosting daring"
            >
              <span>Pengembangan Lokal</span>
            </button>
          )}

          {/* Secondary Action: Inspect Syllabus & Details */}
          <button
            onClick={() => onInspectDetails(hub)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            title="Lihat detail silabus, kompetensi, dan struktur modul"
          >
            Silabus
          </button>

          {/* GitHub Repository Link if available */}
          {hub.repositoryUrl && (
            <a
              href={hub.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              title="Buka repositori GitHub kode sumber"
              aria-label={`Buka repositori GitHub ${hub.title}`}
            >
              <GitFork className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
