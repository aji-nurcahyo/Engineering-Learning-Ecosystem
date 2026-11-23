import React from 'react';
import { Search, X, SlidersHorizontal, Layers, Sparkles } from 'lucide-react';
import { ACADEMIC_CLUSTERS, CATEGORIES } from '../data/learningHubs';
import { AcademicCluster } from '../types/hub';

interface HubFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCluster: AcademicCluster | 'Semua Klaster';
  onSelectCluster: (cluster: AcademicCluster | 'Semua Klaster') => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedStatus: 'all' | 'published' | 'in-development';
  onSelectStatus: (status: 'all' | 'published' | 'in-development') => void;
  selectedFeature: 'all' | 'slides' | 'notebooks' | 'labs' | 'research';
  onSelectFeature: (feature: 'all' | 'slides' | 'notebooks' | 'labs' | 'research') => void;
  totalFiltered: number;
  totalHubs: number;
  onResetFilters: () => void;
}

export const HubFilter: React.FC<HubFilterProps> = ({
  searchQuery,
  onSearchChange,
  selectedCluster,
  onSelectCluster,
  selectedCategory,
  onSelectCategory,
  selectedStatus,
  onSelectStatus,
  selectedFeature,
  onSelectFeature,
  totalFiltered,
  totalHubs,
  onResetFilters,
}) => {
  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedCluster !== 'Semua Klaster' || 
    selectedCategory !== 'Semua Kategori' || 
    selectedStatus !== 'all' ||
    selectedFeature !== 'all';

  return (
    <div className="space-y-4">
      {/* Search Input & Status Toggles */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Search Input Box */}
        <div className="relative flex-1 max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari Learning Hub, topik, bab, silabus..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-8 text-sm text-slate-900 placeholder-slate-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500"
            aria-label="Cari Learning Hub berdasarkan kata kunci"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Hapus kata kunci pencarian"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span className="text-xs font-medium text-slate-400 mr-1 hidden sm:inline">Status:</span>
          
          <button
            onClick={() => onSelectStatus('all')}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              selectedStatus === 'all'
                ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900 font-semibold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Semua
          </button>

          <button
            onClick={() => onSelectStatus('published')}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              selectedStatus === 'published'
                ? 'bg-emerald-700 text-white dark:bg-emerald-600 font-semibold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Tersedia Daring
          </button>

          <button
            onClick={() => onSelectStatus('in-development')}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
              selectedStatus === 'in-development'
                ? 'bg-amber-700 text-white dark:bg-amber-600 font-semibold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            Dalam Pengembangan
          </button>
        </div>
      </div>

      {/* Academic Cluster Tabs */}
      <div className="border-t border-slate-100 pt-3 dark:border-slate-800/80">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          <Layers className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" />
          <span>Klaster Keilmuan:</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {ACADEMIC_CLUSTERS.map((cl) => {
            const isSelected = selectedCluster === cl;
            return (
              <button
                key={cl}
                onClick={() => onSelectCluster(cl)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  isSelected
                    ? 'bg-brand-700 text-white font-semibold dark:bg-brand-600'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-800/80'
                }`}
                aria-pressed={isSelected}
              >
                {cl}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Pills & Feature Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-slate-100 pt-3 dark:border-slate-800/80">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 flex-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  isSelected
                    ? 'bg-brand-50 text-brand-700 font-semibold border border-brand-200 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800'
                    : 'bg-slate-50 text-slate-600 border border-slate-200/80 hover:bg-slate-100 dark:bg-slate-800/60 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800'
                }`}
                aria-pressed={isSelected}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Feature Badges Filter */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          <span className="text-xs text-slate-400 mr-1">Fitur:</span>
          <select
            value={selectedFeature}
            onChange={(e) => onSelectFeature(e.target.value as 'all' | 'slides' | 'notebooks' | 'labs' | 'research')}
            className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 focus:border-brand-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Filter berdasarkan fitur ketersediaan materi"
          >
            <option value="all">Semua Fasilitas</option>
            <option value="slides">Presentasi Slides</option>
            <option value="notebooks">Jupyter Notebooks</option>
            <option value="labs">Laboratorium Interaktif</option>
            <option value="research">Jalur Riset (Research Track)</option>
          </select>
        </div>
      </div>

      {/* Filter Summary & Reset Action */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400" />
          <span>
            Menampilkan <strong className="font-semibold text-slate-700 dark:text-slate-200">{totalFiltered}</strong> dari {totalHubs} Learning Hub
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-brand-600 hover:text-brand-700 hover:underline dark:text-brand-400 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-500 rounded"
          >
            Reset Semua Filter
          </button>
        )}
      </div>
    </div>
  );
};
