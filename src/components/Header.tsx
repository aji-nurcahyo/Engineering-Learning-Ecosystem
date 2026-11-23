import React, { useState } from 'react';
import { 
  Compass, 
  BookOpen, 
  GitBranch, 
  Info, 
  Sun, 
  Moon, 
  Monitor, 
  Menu, 
  X,
  Bookmark
} from 'lucide-react';
import { ThemeMode } from '../hooks/useTheme';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  bookmarkCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  theme,
  onThemeChange,
  bookmarkCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Compass },
    { id: 'hubs', label: 'Katalog Hub', icon: BookOpen },
    { id: 'paths', label: 'Jalur Belajar', icon: GitBranch },
    { id: 'bookmarks', label: 'Tersimpan', icon: Bookmark, badge: bookmarkCount },
    { id: 'about', label: 'Tentang', icon: Info },
  ];

  const cycleTheme = () => {
    if (theme === 'system') onThemeChange('light');
    else if (theme === 'light') onThemeChange('dark');
    else onThemeChange('system');
  };

  const themeLabel = {
    system: 'Sistem',
    light: 'Terang',
    dark: 'Gelap',
  }[theme];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Brand / Logo */}
        <button
          onClick={() => {
            onSelectTab('home');
            window.location.hash = 'home';
          }}
          className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md p-1 -ml-1 transition-opacity"
          aria-label="Kembali ke Beranda Engineering Learning Ecosystem"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-800 text-white font-bold tracking-tight shadow-sm transition-transform group-hover:scale-105 dark:bg-brand-700">
            <span className="text-sm font-mono tracking-tighter">ELE</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900 tracking-tight dark:text-slate-100">
                Engineering Learning Ecosystem
              </span>
              <span className="hidden sm:inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">
                ITERA
              </span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium hidden sm:block">
              Portal Pembelajaran Terbuka (Learning Hub)
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navigasi Utama">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  window.location.hash = item.id;
                }}
                className={`flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  isActive
                    ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-slate-100'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
                {Boolean(item.badge && item.badge > 0) && (
                  <span className="ml-1 rounded-full bg-brand-600 px-1.5 py-0.2 text-[11px] font-semibold text-white dark:bg-brand-500">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            onClick={cycleTheme}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-colors"
            title={`Ubah tema (saat ini: ${themeLabel})`}
            aria-label={`Ubah tema tampilan. Mode saat ini: ${themeLabel}`}
          >
            {theme === 'system' && <Monitor className="h-4 w-4 text-slate-500" />}
            {theme === 'light' && <Sun className="h-4 w-4 text-amber-600" />}
            {theme === 'dark' && <Moon className="h-4 w-4 text-indigo-400" />}
            <span className="hidden sm:inline capitalize">{themeLabel}</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 dark:border-slate-800 dark:bg-slate-950 transition-all">
          <nav className="flex flex-col gap-1" aria-label="Navigasi Mobile">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    window.location.hash = item.id;
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 text-base font-medium rounded-md text-left transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                    <span>{item.label}</span>
                  </div>
                  {Boolean(item.badge && item.badge > 0) && (
                    <span className="rounded-full bg-brand-600 px-2 py-0.5 text-xs font-semibold text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

