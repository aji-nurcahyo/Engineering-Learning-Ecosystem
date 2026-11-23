import React from 'react';
import { 
  Building2, 
  User, 
  ShieldCheck, 
  CheckCircle,
  Layers
} from 'lucide-react';
import { OVERVIEW_STATS } from '../data/learningHubs';

export const AboutSection: React.FC = () => {
  return (
    <section className="space-y-10" aria-labelledby="about-heading">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 dark:border-slate-800">
        <div className="inline-flex items-center gap-2 rounded-md bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300 mb-2">
          <Building2 className="h-3.5 w-3.5" />
          <span>Informasi Institusi & Pengembang</span>
        </div>
        <h2 id="about-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Tentang Engineering Learning Ecosystem
        </h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Portal pusat satu pintu (*Central Gateway*) untuk mengakses, menjelajahi, dan mengelola katalog seluruh ekosistem modul pembelajaran terbuka di lingkungan Institut Teknologi Sumatera (ITERA). Repositori publik: <code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-800 dark:bg-slate-800 dark:text-slate-200">aji-nurcahyo/Engineering-Learning-Ecosystem</code>.
        </p>
      </div>

      {/* Identity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Institut Teknologi Sumatera (ITERA)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Penyelenggara Ekosistem Kurikulum OER
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-300">
            Didedikasikan untuk meningkatkan literasi teknologi dan daya saing saintifik mahasiswa melalui Open Educational Resources (OER) gratis tanpa sekat registrasi komersial, mencakup bidang pemrograman, AI, IoT, sinyal, penginderaan jauh, dan metodologi riset.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Aji Pamungkas Tri Nurcahyo
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Inisiator, Perancang & Pengembang Kurikulum
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-300">
            Merancang struktur silabus kanonikal bertingkat, penulisan contoh kode komputasi terverifikasi CPython, slide presentasi interaktif, simulator laboratorium klien, serta implementasi portal arsitektur pendidikan mandiri.
          </p>
        </div>
      </div>

      {/* Ekosistem Overview & 4 Klaster */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            4 Klaster Keilmuan & {OVERVIEW_STATS.totalHubs} Learning Hub Terdaftar
          </h3>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Total kurikulum mencakup {OVERVIEW_STATS.totalPlannedChapters} bab terencana, dengan {OVERVIEW_STATS.totalImplementedChapters} bab terimplementasi dan {OVERVIEW_STATS.totalOnlineAccessibleChapters} bab aktif daring di GitHub Pages ({OVERVIEW_STATS.deployedHubsCount} hub daring, {OVERVIEW_STATS.localOnlyHubsCount} hub workspace lokal).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <h4 className="text-xs font-bold text-brand-700 dark:text-brand-400 uppercase tracking-wider mb-1">
              Klaster 1: Computing & Artificial Intelligence
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Python Learning Hub</strong> (30 bab inti / 55 total) & <strong>AI Learning Hub</strong> (40 chapter akademik). Fokus pada sintaks, struktur data, algoritma search, ML/DL, dan Edge AI.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <h4 className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-1">
              Klaster 2: Sensing, Signals & Embedded Systems
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>IoT Learning Hub</strong> (40 bab fondasi) & <strong>Signal Processing Hub</strong> (113 bab terencana / 25 terimplementasi). Fokus pada sensor fisik, ADC, filter FIR/IIR, dan telemetri MQTT.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <h4 className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-1">
              Klaster 3: Vision & Geospatial Intelligence
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Multimedia & Computer Vision</strong> (60 bab) & <strong>Remote Sensing Hub</strong> (28 bab terencana / 21 terimplementasi). Fokus pada 2D FFT, Canny/Sobel, radar SAR, dan GEOINT AI.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200/80 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <h4 className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-1">
              Klaster 4: Scientific Research & Methodology
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Scientific Research Hub</strong> (51 bab lengkap). Fokus pada epistemologi sains, ANOVA/uji hipotesis kuantitatif, penulisan artikel jurnal Q1, dan persiapan studi doktoral.
            </p>
          </div>
        </div>
      </div>

      {/* Core Architectural Principles */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
        <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Prinsip Utama Arsitektur Portal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                Repositori Terpisah & Independen
              </h4>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Setiap Learning Hub memiliki repositori Git dan siklus rilis mandiri. Dashboard memperlakukan seluruh repositori lain sebagai referensi yang berdiri sendiri secara read-only.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                Pintu Masuk Terpusat (Central Discovery)
              </h4>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Berfungsi sebagai portal navigasi dan kurasi pembelajaran, tanpa menduplikasi isi bab atau materi presentasi masing-masing kursus.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                Build-Time Manifest Aggregation
              </h4>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Metadata bab diekstrak pada saat kompilasi build statis melalui script agregator, dilengkapi snapshot cadangan aman untuk deployment GitHub Actions.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                Static-First & Zero Backend
              </h4>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Situs berjalan 100% statis di sisi browser klien, tanpa memerlukan database berbayar atau server otentikasi login yang kompleks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Anti-Slop & Quality Standard Statement */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Standar Kualitas & Desain Anti-Slop
          </h3>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Platform ini dirancang dengan prinsip desain fungsional berorientasi tujuan (*purpose-driven*), tipografi proporsional berkejelasan tinggi, data riil terverifikasi tanpa fabrikasi angka, kepatuhan aksesibilitas WCAG, serta responsif di semua ukuran layar desktop maupun smartphone.
        </p>
      </div>
    </section>
  );
};
