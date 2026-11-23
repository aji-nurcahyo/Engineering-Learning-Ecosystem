import React from 'react';
import { BookOpen, GitBranch, ShieldCheck, Layers, Award, CheckCircle2 } from 'lucide-react';
import { OVERVIEW_STATS } from '../data/learningHubs';

interface HeroProps {
  onExploreHubs: () => void;
  onExplorePaths: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreHubs, onExplorePaths }) => {
  return (
    <section className="relative border-b border-slate-200 bg-gradient-to-b from-white to-slate-50/60 pt-12 pb-14 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Institutional & OER context pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          <span>Institut Teknologi Sumatera (ITERA)</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-slate-700 dark:text-slate-300 font-medium">Engineering Learning Ecosystem (OER)</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Explore Your <span className="text-brand-600 dark:text-brand-400">Learning Hub</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Jelajahi materi, praktik, laboratorium komputasi, dan riset pembelajaran dalam satu portal terpadu. Akses terbuka kurikulum akademik mandiri untuk mahasiswa, peneliti, dan praktisi rekayasa teknologi.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreHubs}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              <BookOpen className="h-4 w-4" />
              <span>Jelajahi 7 Learning Hub</span>
            </button>

            <button
              onClick={onExplorePaths}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <GitBranch className="h-4 w-4 text-slate-500 dark:text-slate-400" />
              <span>Lihat Jalur Belajar Lintas Disiplin</span>
            </button>
          </div>
        </div>

        {/* Verified Facts & Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-4 dark:border-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {OVERVIEW_STATS.totalHubs} Hub
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {OVERVIEW_STATS.deployedHubsCount} Daring • {OVERVIEW_STATS.localOnlyHubsCount} Lokal
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {OVERVIEW_STATS.totalImplementedChapters} Bab
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Terimplementasi ({OVERVIEW_STATS.totalPlannedChapters} Terencana)
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <Award className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {OVERVIEW_STATS.totalOnlineAccessibleChapters} Bab Daring
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Aktif di GitHub Pages
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {OVERVIEW_STATS.totalVerifiedExamples}+ Praktik
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                CPython & {OVERVIEW_STATS.totalInteractiveLabs} Lab Interaktif
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
