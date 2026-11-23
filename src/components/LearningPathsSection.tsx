import React, { useState } from 'react';
import { GitBranch, ArrowRight, BookOpen, Compass, CheckCircle2, Layers } from 'lucide-react';
import { LEARNING_PATHS } from '../data/learningPaths';
import { LEARNING_HUBS, ACADEMIC_CLUSTERS } from '../data/learningHubs';
import { LearningHubMetadata, AcademicCluster } from '../types/hub';

interface LearningPathsSectionProps {
  onInspectHub: (hub: LearningHubMetadata) => void;
}

export const LearningPathsSection: React.FC<LearningPathsSectionProps> = ({ onInspectHub }) => {
  const [selectedCluster, setSelectedCluster] = useState<AcademicCluster | 'Semua Klaster'>('Semua Klaster');
  
  const filteredPaths = LEARNING_PATHS.filter(p => {
    if (selectedCluster !== 'Semua Klaster' && p.cluster !== selectedCluster) {
      return false;
    }
    return true;
  });

  const [activePathId, setActivePathId] = useState<string>(LEARNING_PATHS[0].id);

  // If activePathId not in filteredPaths, fall back to first
  const activePath = filteredPaths.find(p => p.id === activePathId) || filteredPaths[0] || LEARNING_PATHS[0];

  const getHubById = (hubId: string) => {
    return LEARNING_HUBS.find(h => h.id === hubId);
  };

  return (
    <section className="space-y-8" aria-labelledby="paths-heading">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 mb-2">
          <GitBranch className="h-3.5 w-3.5" />
          <span>Navigasi Lintas Disiplin</span>
        </div>
        <h2 id="paths-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Rekomendasi Jalur Belajar (Cross-Hub Learning Paths)
        </h2>
        <p className="mt-2 text-sm text-slate-600 max-w-3xl leading-relaxed dark:text-slate-300">
          Jalur belajar disusun untuk memandu tahapan eksplorasi materi berdasarkan keterkaitan prasyarat konseptual antarmateri. Ini adalah panduan navigasi mandiri, bukan kurikulum kaku yang membatasi aksesibilitas bab.
        </p>
      </div>

      {/* Cluster Filter Buttons */}
      <div className="flex items-center gap-2 flex-wrap border-b border-slate-200 pb-4 dark:border-slate-800">
        <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
          <Layers className="h-3.5 w-3.5" />
          <span>Klaster:</span>
        </span>
        {ACADEMIC_CLUSTERS.map((cl) => {
          const isSelected = selectedCluster === cl;
          return (
            <button
              key={cl}
              onClick={() => {
                setSelectedCluster(cl);
                const first = LEARNING_PATHS.find(p => cl === 'Semua Klaster' || p.cluster === cl);
                if (first) setActivePathId(first.id);
              }}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                isSelected
                  ? 'bg-brand-700 text-white font-semibold dark:bg-brand-600'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800/80'
              }`}
            >
              {cl}
            </button>
          );
        })}
      </div>

      {/* Path Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredPaths.map((path) => {
          const isSelected = path.id === activePath.id;
          return (
            <button
              key={path.id}
              onClick={() => setActivePathId(path.id)}
              className={`rounded-xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                isSelected
                  ? 'border-brand-500 bg-brand-50/40 shadow-xs dark:border-brand-500 dark:bg-brand-950/40'
                  : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700'
              }`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
                <span className="truncate">{path.cluster}</span>
                {isSelected && (
                  <span className="flex h-2 w-2 rounded-full bg-brand-500 shrink-0" />
                )}
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white tracking-tight">
                {path.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-brand-700 dark:text-brand-400 line-clamp-1">
                Profil: {path.targetRole}
              </p>
              <div className="mt-3 text-[11px] text-slate-400 font-mono">
                {path.steps.length} Tahapan Belajar
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Path Visual Workflow */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-100 pb-5 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="rounded bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-950 dark:text-brand-300 mb-1 inline-block">
                {activePath.cluster}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {activePath.title}
              </h3>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                Target Profil Lulusan: {activePath.targetRole}
              </p>
            </div>
            <span className="rounded bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300 self-start">
              Prasyarat: {activePath.prerequisites}
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
            {activePath.description}
          </p>
        </div>

        {/* Steps Flow */}
        <div className="mt-8 space-y-6">
          {activePath.steps.map((step, idx) => {
            const mappedHub = getHubById(step.hubId);
            const isLast = idx === activePath.steps.length - 1;

            return (
              <div key={idx} className="relative flex flex-col md:flex-row gap-6">
                {/* Step Connector Line for desktop */}
                {!isLast && (
                  <div 
                    className="hidden md:block absolute left-5 top-12 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -z-0"
                    aria-hidden="true" 
                  />
                )}

                {/* Step Number Circle */}
                <div className="flex items-center gap-3 md:block">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white font-mono text-sm font-bold shadow-xs dark:bg-brand-600">
                    {idx + 1}
                  </div>
                  <div className="md:hidden font-bold text-sm text-slate-900 dark:text-white">
                    {step.stageName}
                  </div>
                </div>

                {/* Step Content Card */}
                <div className="flex-1 rounded-xl border border-slate-200 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-800/40">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="hidden md:block text-base font-bold text-slate-900 dark:text-white">
                        {step.stageName}
                      </h4>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        step.availabilityStatus === 'Tersedia Daring'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900'
                          : 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-900'
                      }`}>
                        {step.availabilityStatus}
                      </span>
                    </div>

                    {mappedHub && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onInspectHub(mappedHub)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline dark:text-brand-400"
                        >
                          <BookOpen className="h-3.5 w-3.5" />
                          <span>Kurikulum {mappedHub.title}</span>
                        </button>

                        {/* Direct link if available, no dead links */}
                        {step.directLink ? (
                          <a
                            href={step.directLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-xs font-medium text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300"
                          >
                            <span>Buka Situs Daring</span>
                            <ArrowRight className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="text-[11px] text-slate-400 italic">
                            (Materi Tersedia di Repositori Lokal)
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Target Chapters notation */}
                  {step.targetChapters && (
                    <div className="mt-2 text-xs font-medium text-brand-700 dark:text-brand-400">
                      Fokus Materi: {step.targetChapters}
                    </div>
                  )}

                  {/* Recommended focus items */}
                  <div className="mt-3.5 space-y-1.5 border-t border-slate-200/70 pt-3 dark:border-slate-700/60">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Rekomendasi Modul & Aktivitas:
                    </div>
                    {step.recommendedFocus.map((focus, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note / Philosophy callout */}
        <div className="mt-8 flex items-start gap-3 rounded-lg border border-slate-200 bg-amber-50/50 p-4 text-xs text-slate-600 dark:border-slate-800 dark:bg-amber-950/20 dark:text-slate-300">
          <Compass className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-semibold text-slate-900 dark:text-slate-100">Prinsip Akses Terbuka:</strong> Setiap Learning Hub dirancang independen dan modular. Mahasiswa tidak dipaksa menyelesaikan modul sebelumnya secara linier jika sudah menguasai kompetensi dasar. Anda berhak langsung mempelajari bab mana pun yang relevan dengan kebutuhan proyek atau penelitian Anda.
          </p>
        </div>
      </div>
    </section>
  );
};
