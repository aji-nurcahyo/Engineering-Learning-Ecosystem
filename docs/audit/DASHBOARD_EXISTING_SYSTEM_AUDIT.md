# Audit Sistem yang Ada (Existing System Audit)
**Learning Hub Dashboard — Institut Teknologi Sumatera (ITERA)**
*Tanggal Audit: 23 November 2026*
*Auditor: Antigravity AI Engineering Assistant*

---

## 1. Ringkasan Eksekutif

Audit ini dilakukan terhadap repositori `Learning-Hub-Dashboard` yang berlokasi di `D:\Workstation\Repo My Corses\Learning-Hub-Dashboard`. Berdasarkan inspeksi kode sumber, konfigurasi build, analisis ketergantungan (*dependency analysis*), dan verifikasi kompilasi, proyek ini berada dalam kondisi **fungsional, bersih, dan berstandar teknis tinggi**, namun memerlukan refaktorisasi bertahap untuk mengakomodasi pertumbuhan ekosistem dari 4 menjadi 7+ Learning Hub.

---

## 2. Struktur Direktori Proyek

```
D:\Workstation\Repo My Corses\Learning-Hub-Dashboard
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions Pages deployment pipeline
├── .gitignore                      # Git ignore rules (node_modules, dist, logs)
├── dist/                           # Production build output
│   ├── assets/
│   │   ├── index-*.css (32.6 KB)
│   │   └── index-*.js (310.5 KB)
│   ├── .nojekyll
│   ├── 404.html
│   └── index.html
├── node_modules/                   # Node.js dependencies
├── public/
│   ├── .nojekyll                   # Menghindari Jekyll processing di GitHub Pages
│   └── 404.html                    # SPA redirection script untuk GitHub Pages
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # Informasi profil ITERA, developer & prinsip OER
│   │   ├── Footer.tsx              # Footer navigasi, atribusi hak cipta OER
│   │   ├── Header.tsx              # Navigasi atas, pengalih tema, counter bookmark
│   │   ├── Hero.tsx                # Hero section editorial, verified metric counters
│   │   ├── HubCard.tsx             # Card katalog interaktif, status badge & detail trigger
│   │   ├── HubDetailModal.tsx      # Modal rincian silabus, kompetensi & prasyarat
│   │   ├── HubFilter.tsx           # Search bar, filter kategori, status toggle, reset
│   │   ├── LearningPathsSection.tsx# Visualisasi 3 jalur belajar lintas disiplin
│   │   └── LocalBookmarksSection.tsx# Tampilan hub favorit tersimpan lokal
│   ├── data/
│   │   ├── learningHubs.ts         # Central Hub Registry (4 hub terdaftar)
│   │   └── learningPaths.ts        # Definisi alur pembelajaran lintas disiplin
│   ├── hooks/
│   │   ├── useBookmarks.ts         # Hook state persistence localStorage
│   │   └── useTheme.ts             # Hook theme switcher (Light/Dark/System)
│   ├── types/
│   │   ├── hub.ts                  # Type definitions untuk metadata hub & paths
│   │   └── integration.ts          # Kontrak Phase 2 Manifest Ekstraksi
│   ├── App.tsx                     # Main controller & hash-routing state coordinator
│   ├── index.css                   # Tailwind base directives & accessibility rules
│   ├── main.tsx                    # React DOM 19 client mounting point
│   └── vite-env.d.ts               # Vite client types declaration
├── eslint.config.js                # Flat config ESLint 9 + TypeScript-ESLint
├── index.html                      # HTML entrypoint dengan inline anti-theme-flash script
├── package.json                    # Project manifest & npm scripts
├── package-lock.json               # Locked dependency tree
├── postcss.config.js               # PostCSS configuration untuk Tailwind
├── README.md                       # Dokumentasi publik proyek
├── tailwind.config.js              # Desain token ITERA (Navy & Gold), Dark Mode class
├── tsconfig.json                   # Strict TypeScript compiler options
└── vite.config.ts                  # Vite config dengan configurable base path
```

---

## 3. Analisis Dependensi & Framework

### Dependensi Produksi (`dependencies`)
- `react: ^19.3.1` — Menggunakan rilis stabil React 19 dengan concurrent features.
- `react-dom: ^19.3.1` — React DOM client renderer.
- `lucide-react: ^0.468.0` — Ikonografi vektor SVG yang ringan dan semantik.

### Dependensi Pengembangan (`devDependencies`)
- `vite: ^6.4.6` — Bundler ESM super cepat dengan Rollup engine.
- `@vitejs/plugin-react: ^4.3.4` — Fast Refresh & JSX transform plugin.
- `typescript: ~5.7.2` — Type-checker berkekuatan penuh dengan mode `strict`.
- `tailwindcss: 3.4.17` — Utility-first styling engine (dipin ke versi stabil 3.4.17).
- `postcss: ^8.4.49` & `autoprefixer: ^10.4.20` — CSS pipeline.
- `eslint: ^9.17.0`, `@eslint/js: ^9.17.0`, `typescript-eslint: ^8.18.2` — Code linting.

*Catatan audit*: Tidak ada dependensi usang yang bermasalah. Total ukuran bundle gzip: JS ~89 KB, CSS ~5.9 KB, yang sangat optimal untuk koneksi jaringan akademik.

---

## 4. Arsitektur Routing & Navigasi

- Menggunakan **Hash-based client routing** (`#home`, `#hubs`, `#paths`, `#bookmarks`, `#about`).
- Keunggulan untuk GitHub Pages:
  - Tidak memerlukan modul routing berat (`react-router-dom`).
  - Tidak pernah menghasilkan error `404 Not Found` saat pengguna menyegarkan (*refresh*) halaman atau mengakses subpath di GitHub Pages.
  - Sinkron dengan tombol browser *Back* dan *Forward* via listener `window.addEventListener('hashchange')`.
  - Disertai skrip fallback SPA di `public/404.html` sebagai pelindung lapis kedua jika server GitHub Pages merespons rute non-hash.

---

## 5. Model Data & Registry

Data saat ini tersentralisasi di `src/data/learningHubs.ts`:
- Menyimpan 4 entri:
  1. `python-learning-hub` (Programming)
  2. `ai-learning-hub` (Artificial Intelligence)
  3. `iot-learning-hub` (Internet of Things)
  4. `multimedia-cv-learning-hub` (Multimedia & Computer Vision)
- Tipe data `LearningHubMetadata` di `src/types/hub.ts` telah memfasilitasi field opsional:
  - `websiteUrl?: string` (aman jika belum ada hosting publik)
  - `repositoryUrl?: string` (aman jika repositori belum dipush ke remote)
  - `chaptersCount?: number`
  - `chaptersBreakdown?: string`
  - `levelStructure?: string[]`
  - `keyCompetencies: string[]`
  - `chaptersPreview?: ChapterOutline[]`

*Evaluasi Kelemahan*: Model data masih didefinisikan secara statis di dalam file TypeScript (`src/data/learningHubs.ts`). Bila ada pembaruan jumlah bab pada repositori kursus, pengembang harus menyunting kode ini secara manual.

---

## 6. Desain & Styling System

- **Mode Gelap/Terang**:
  - Dikelola oleh hook `src/hooks/useTheme.ts`.
  - Mendukung 3 mode: `light`, `dark`, dan `system`.
  - Menggunakan skrip pencegah kedipan (*anti-flash script*) di `<head>` `index.html`.
  - Sinkron dengan preferensi OS (`prefers-color-scheme`).
- **Palet Warna**:
  - ITERA Navy: `#0f2b48` / `#082843` / Brand Slate.
  - ITERA Gold/Amber: `#c88a1f` / `#b45309`.
  - Background Dark: `#0b1120` (slate gelap pekat, bukan hitam generik).
- **Aksesibilitas**:
  - Cincin fokus terlihat: `:focus-visible` aktif dengan outline `theme('colors.brand.500')`.
  - Pengurangan gerak (*reduced-motion*): Diterapkan pada `src/index.css` melalui `@media (prefers-reduced-motion: reduce)`.
  - Kontras teks: Rasio kontras teks terhadap latar belakang > 4.5:1 (lulus WCAG AA).

---

## 7. Status Pengujian & Verifikasi Teknis

| Jenis Uji | Perintah | Hasil | Catatan |
| :--- | :--- | :--- | :--- |
| **Linting** | `npm run lint` | **PASS (0 error, 0 warning)** | ESLint 9 + typescript-eslint |
| **Type Check** | `tsc --noEmit` | **PASS (0 error)** | TypeScript 5.7 strict mode |
| **Production Build** | `npm run build` | **PASS (2.88 detik)** | Output tersimpan di `dist/` |
| **Preview HTTP** | `curl -I http://localhost:4173/` | **PASS (HTTP 200 OK)** | Header valid, MIME text/html |
| **Git Repository** | `git status -s` | **Tersedia (Local Git)** | Repositori lokal bersih |

---

## 8. Identifikasi Kekurangan & Hal yang Perlu Diperbaiki

1. **Jumlah Learning Hub dalam Ekosistem Belum Lengkap**:
   - Repositori lokal memiliki 3 kursus tambahan yang belum terdaftar di Dashboard:
     - *Signal Processing Learning Hub* (113 bab terencana / 20 bab terimplementasi).
     - *Remote Sensing & Geospatial Intelligence Learning Hub* (28 bab kurikulum / 14 bab terimplementasi).
     - *Scientific Research & Experimental Methods Learning Hub* (51 bab terdaftar).
2. **Kategori Bidang Keilmuan Masih Terbatas**:
   - Kategori di `src/types/hub.ts` baru mencakup 4 bidang, belum mencakup *Earth & Space Sciences / Geospatial* atau *Scientific Research Methodology*.
3. **Pemberian Skor / Metrik Detail Kurikulum**:
   - Dashboard belum menampilkan jumlah *lessons* (pelajaran sub-bab) yang tersedia di manifest repositori masing-masing.
4. **Alur Belajar (Learning Paths) Belum Mengintegrasikan 3 Domain Baru**:
   - Alur belajar masih terbatas pada 3 alur (AI, IoT, Multimedia). Perlu diperluas dengan alur *Geospatial Intelligence* dan *Academic Research Pipeline*.
