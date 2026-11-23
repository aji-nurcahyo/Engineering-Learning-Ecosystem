import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LEARNING_HUBS } from '../data/learningHubs';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-12 transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Identity & Institution */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-800 text-white font-mono text-xs font-bold dark:bg-brand-700">
                ELE
              </div>
              <span className="font-bold text-slate-900 tracking-tight dark:text-white">
                Engineering Learning Ecosystem
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Portal utama eksplorasi modul pembelajaran interaktif, presentasi berbasis web, dan kurikulum akademik mandiri Institut Teknologi Sumatera (ITERA).
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Dikembangkan oleh <strong className="font-semibold text-slate-800 dark:text-slate-200">Aji Pamungkas Tri Nurcahyo</strong>
            </div>
            <div className="text-xs text-slate-400 pt-1">
              Repositori Portal: <a href="https://github.com/aji-nurcahyo/Engineering-Learning-Ecosystem" target="_blank" rel="noopener noreferrer" className="font-mono text-brand-600 hover:underline dark:text-brand-400">aji-nurcahyo/Engineering-Learning-Ecosystem</a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('home');
                    window.location.hash = 'home';
                  }}
                  className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                >
                  Beranda Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('hubs');
                    window.location.hash = 'hubs';
                  }}
                  className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                >
                  Katalog Learning Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('paths');
                    window.location.hash = 'paths';
                  }}
                  className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                >
                  Rekomendasi Jalur Belajar
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('about');
                    window.location.hash = 'about';
                  }}
                  className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                >
                  Tentang Portal & Prinsip
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Learning Hubs Direct Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Katalog Learning Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              {LEARNING_HUBS.map(hub => (
                <li key={hub.id}>
                  {hub.websiteUrl ? (
                    <a
                      href={hub.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400 transition-colors"
                    >
                      <span className="truncate">{hub.title}</span>
                      {hub.deploymentStatus === 'local-only' && (
                        <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">
                          (Segera Hadir)
                        </span>
                      )}
                      <ExternalLink className="h-3 w-3 shrink-0" />
                    </a>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-500 cursor-default">
                      {hub.title} <span className="text-[10px] italic">(Lokal)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Engineering Learning Ecosystem · Institut Teknologi Sumatera (ITERA). Open Educational Resources.
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1">
              <span>Dibangun dengan dedikasi untuk edukasi terbuka</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};