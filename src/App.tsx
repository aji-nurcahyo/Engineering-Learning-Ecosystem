import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HubCard } from './components/HubCard';
import { HubFilter } from './components/HubFilter';
import { HubDetailModal } from './components/HubDetailModal';
import { LearningPathsSection } from './components/LearningPathsSection';
import { LocalBookmarksSection } from './components/LocalBookmarksSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { LEARNING_HUBS } from './data/learningHubs';
import { LearningHubMetadata, AcademicCluster } from './types/hub';
import { useTheme } from './hooks/useTheme';
import { useBookmarks } from './hooks/useBookmarks';
import { BookOpen, SearchX, ArrowRight, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { bookmarkedIds, toggleBookmark, clearBookmarks, isBookmarked } = useBookmarks();

  // Navigation tab state synchronized with window.location.hash
  const [currentTab, setCurrentTab] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '').trim();
    if (['home', 'hubs', 'paths', 'bookmarks', 'about'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCluster, setSelectedCluster] = useState<AcademicCluster | 'Semua Klaster'>('Semua Klaster');
  const [selectedCategory, setSelectedCategory] = useState('Semua Kategori');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'published' | 'in-development'>('all');
  const [selectedFeature, setSelectedFeature] = useState<'all' | 'slides' | 'notebooks' | 'labs' | 'research'>('all');

  // Modal inspection state
  const [inspectedHub, setInspectedHub] = useState<LearningHubMetadata | null>(null);

  // Listen for hash changes (browser back/forward button & direct URL hash)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (['home', 'hubs', 'paths', 'bookmarks', 'about'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Filtered Hubs calculation
  const filteredHubs = useMemo(() => {
    return LEARNING_HUBS.filter((hub) => {
      // Cluster match
      if (selectedCluster !== 'Semua Klaster' && hub.cluster !== selectedCluster) {
        return false;
      }

      // Category match
      if (selectedCategory !== 'Semua Kategori' && hub.category !== selectedCategory) {
        return false;
      }

      // Status match
      if (selectedStatus === 'published' && hub.status !== 'published') {
        return false;
      }
      if (selectedStatus === 'in-development' && hub.status !== 'in-development') {
        return false;
      }

      // Feature match
      if (selectedFeature === 'slides' && !hub.features.hasSlides) return false;
      if (selectedFeature === 'notebooks' && !hub.features.hasNotebooks) return false;
      if (selectedFeature === 'labs' && !hub.features.hasInteractiveLabs) return false;
      if (selectedFeature === 'research' && !hub.features.hasResearchTrack) return false;

      // Search match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = hub.title.toLowerCase().includes(query);
        const matchesDesc = hub.description.toLowerCase().includes(query);
        const matchesTagline = hub.tagline.toLowerCase().includes(query);
        const matchesCluster = hub.cluster.toLowerCase().includes(query);
        const matchesTopics = hub.topics.some((t) => t.toLowerCase().includes(query));
        const matchesSyllabus = hub.chaptersPreview?.some(
          (c) => c.title.toLowerCase().includes(query) || c.focus.toLowerCase().includes(query)
        );

        return matchesTitle || matchesDesc || matchesTagline || matchesCluster || matchesTopics || Boolean(matchesSyllabus);
      }

      return true;
    });
  }, [searchQuery, selectedCluster, selectedCategory, selectedStatus, selectedFeature]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCluster('Semua Klaster');
    setSelectedCategory('Semua Kategori');
    setSelectedStatus('all');
    setSelectedFeature('all');
  };

  const navigateToTab = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 transition-colors dark:bg-[#0b1120] dark:text-slate-200">
      
      {/* Top Navigation Bar */}
      <Header
        currentTab={currentTab}
        onSelectTab={navigateToTab}
        theme={theme}
        onThemeChange={setTheme}
        bookmarkCount={bookmarkedIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* TAB 1: HOME */}
        {currentTab === 'home' && (
          <div>
            <Hero
              onExploreHubs={() => {
                const catalogEl = document.getElementById('catalog-preview');
                if (catalogEl) {
                  catalogEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigateToTab('hubs');
                }
              }}
              onExplorePaths={() => navigateToTab('paths')}
            />

            <div id="catalog-preview" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 mb-2">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Portal Ekosistem Pendidikan</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                    Katalog Seluruh Learning Hub
                  </h2>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    7 Learning Hub terintegrasi dalam 4 klaster keilmuan rekayasa komputasi dan metodologi ilmiah.
                  </p>
                </div>

                <button
                  onClick={() => navigateToTab('hubs')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline dark:text-brand-400 self-start sm:self-auto"
                >
                  <span>Buka Tampilan Katalog Lengkap</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Filter & Search Bar */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900">
                <HubFilter
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedCluster={selectedCluster}
                  onSelectCluster={setSelectedCluster}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  selectedStatus={selectedStatus}
                  onSelectStatus={setSelectedStatus}
                  selectedFeature={selectedFeature}
                  onSelectFeature={setSelectedFeature}
                  totalFiltered={filteredHubs.length}
                  totalHubs={LEARNING_HUBS.length}
                  onResetFilters={handleResetFilters}
                />
              </div>

              {/* Hub Cards Grid */}
              {filteredHubs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredHubs.map((hub) => (
                    <HubCard
                      key={hub.id}
                      hub={hub}
                      isBookmarked={isBookmarked(hub.id)}
                      onToggleBookmark={toggleBookmark}
                      onInspectDetails={setInspectedHub}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                    <SearchX className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                    Tidak ada Learning Hub yang cocok
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Coba sesuaikan kata kunci atau ubah filter klaster dan status untuk menemukan materi yang diinginkan.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={handleResetFilters}
                      className="rounded-lg bg-brand-700 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-800 dark:bg-brand-600 dark:hover:bg-brand-500"
                    >
                      Reset Filter Pencarian
                    </button>
                  </div>
                </div>
              )}

              {/* Fast Pathway Callout Banner */}
              <div className="mt-12 rounded-xl border border-slate-200 bg-gradient-to-r from-slate-900 to-brand-950 p-6 sm:p-8 text-white shadow-md dark:border-slate-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-2 max-w-2xl">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/20 px-2.5 py-0.5 text-xs font-medium text-brand-300">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Panduan Lintas Domain</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">
                      Rencanakan Rute Belajar Anda Lintas Disiplin
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Jelajahi alur rekomendasi yang menghubungkan logika pemrograman Python, kecerdasan buatan, sistem telemetri IoT, pemrosesan sinyal fisik, penginderaan jauh satelit, hingga metodologi riset publikasi internasional.
                    </p>
                  </div>

                  <button
                    onClick={() => navigateToTab('paths')}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-slate-900 hover:bg-slate-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
                  >
                    <span>Buka Jalur Belajar</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: HUBS (CATALOG) */}
        {currentTab === 'hubs' && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Katalog Terpadu</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Katalog 7 Learning Hub ITERA
              </h1>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                Telusuri seluruh modul pembelajaran terbuka dalam 4 klaster keilmuan. Setiap hub menyediakan silabus mandiri, presentasi slide, laboratorium interaktif, dan panduan penelitian.
              </p>
            </div>

            {/* Filter Section */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900">
              <HubFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCluster={selectedCluster}
                onSelectCluster={setSelectedCluster}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedStatus={selectedStatus}
                onSelectStatus={setSelectedStatus}
                selectedFeature={selectedFeature}
                onSelectFeature={setSelectedFeature}
                totalFiltered={filteredHubs.length}
                totalHubs={LEARNING_HUBS.length}
                onResetFilters={handleResetFilters}
              />
            </div>

            {/* Grid */}
            {filteredHubs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredHubs.map((hub) => (
                  <HubCard
                    key={hub.id}
                    hub={hub}
                    isBookmarked={isBookmarked(hub.id)}
                    onToggleBookmark={toggleBookmark}
                    onInspectDetails={setInspectedHub}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-800">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                  <SearchX className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                  Tidak ada Learning Hub yang cocok
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  Silakan sesuaikan kata kunci atau bersihkan filter pencarian.
                </p>
                <div className="mt-6">
                  <button
                    onClick={handleResetFilters}
                    className="rounded-lg bg-brand-700 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-800 dark:bg-brand-600 dark:hover:bg-brand-500"
                  >
                    Reset Filter
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: LEARNING PATHS */}
        {currentTab === 'paths' && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <LearningPathsSection onInspectHub={setInspectedHub} />
          </div>
        )}

        {/* TAB 4: BOOKMARKS */}
        {currentTab === 'bookmarks' && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <LocalBookmarksSection
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={toggleBookmark}
              onClearBookmarks={clearBookmarks}
              onInspectDetails={setInspectedHub}
              onExploreCatalog={() => navigateToTab('hubs')}
            />
          </div>
        )}

        {/* TAB 5: ABOUT */}
        {currentTab === 'about' && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <AboutSection />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer onSelectTab={navigateToTab} />

      {/* Inspection Modal for Details */}
      <HubDetailModal
        hub={inspectedHub}
        onClose={() => setInspectedHub(null)}
        isBookmarked={inspectedHub ? isBookmarked(inspectedHub.id) : false}
        onToggleBookmark={toggleBookmark}
      />

    </div>
  );
};
