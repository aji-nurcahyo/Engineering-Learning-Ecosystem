import React from 'react';
import { Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { LEARNING_HUBS } from '../data/learningHubs';
import { HubCard } from './HubCard';
import { LearningHubMetadata } from '../types/hub';

interface LocalBookmarksSectionProps {
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onClearBookmarks: () => void;
  onInspectDetails: (hub: LearningHubMetadata) => void;
  onExploreCatalog: () => void;
}

export const LocalBookmarksSection: React.FC<LocalBookmarksSectionProps> = ({
  bookmarkedIds,
  onToggleBookmark,
  onClearBookmarks,
  onInspectDetails,
  onExploreCatalog,
}) => {
  const savedHubs = LEARNING_HUBS.filter(h => bookmarkedIds.includes(h.id));

  return (
    <section className="space-y-6" aria-labelledby="bookmarks-heading">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 mb-2">
            <Bookmark className="h-3.5 w-3.5 fill-current" />
            <span>Penyimpanan Lokal Browser</span>
          </div>
          <h2 id="bookmarks-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Learning Hub yang Anda Tandai
          </h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Daftar ini disimpan secara mandiri di penyimpanan lokal peramban Anda (localStorage). Tidak ada database eksternal atau klaim sinkronisasi akun.
          </p>
        </div>

        {savedHubs.length > 0 && (
          <button
            onClick={onClearBookmarks}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-red-600 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-red-400 transition-colors"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>Kosongkan Semua Bookmark</span>
          </button>
        )}
      </div>

      {savedHubs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {savedHubs.map(hub => (
            <HubCard
              key={hub.id}
              hub={hub}
              isBookmarked={true}
              onToggleBookmark={onToggleBookmark}
              onInspectDetails={onInspectDetails}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
            <Bookmark className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
            Belum ada Learning Hub yang ditandai
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Klik ikon bookmark pada card Learning Hub di katalog untuk menyimpannya ke daftar akses cepat lokal Anda.
          </p>
          <div className="mt-6">
            <button
              onClick={onExploreCatalog}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-brand-800 dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              <span>Buka Katalog Learning Hub</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

