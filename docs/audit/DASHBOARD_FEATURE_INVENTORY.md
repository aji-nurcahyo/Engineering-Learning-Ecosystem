# Inventaris Fitur (Feature Inventory)
**Learning Hub Dashboard — Institut Teknologi Sumatera (ITERA)**
*Tanggal Audit: 23 November 2026*

---

## 1. Matriks Fitur Keseluruhan

| No | Modul / Fitur | Komponen Sumber | Status Fungsional | Keterangan & Batasan |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Header & Identitas Institusi** | `src/components/Header.tsx` | **Lengkap & Berfungsi** | Logo LH, badge ITERA, deskripsi OER, sticky top bar |
| 2 | **Navigasi Tab Utama** | `src/components/Header.tsx`, `App.tsx` | **Lengkap & Berfungsi** | Beranda, Katalog Hub, Jalur Belajar, Tersimpan, Tentang |
| 3 | **Pengalih Tema (Theme Toggle)** | `src/hooks/useTheme.ts`, `Header.tsx` | **Lengkap & Berfungsi** | Mendukung Light, Dark, System; tersimpan di localStorage |
| 4 | **Menu Navigasi Mobile** | `src/components/Header.tsx` | **Lengkap & Berfungsi** | Drawer responsive untuk layar smartphone dan tablet |
| 5 | **Hero Section & Metrik Terverifikasi** | `src/components/Hero.tsx` | **Lengkap & Berfungsi** | Tagline resmi, tombol CTA, dan 4 metrik ringkasan riil |
| 6 | **Central Hub Catalog Grid** | `src/components/HubCard.tsx`, `App.tsx` | **Lengkap & Berfungsi** | Grid 2 kolom responsif untuk kartu-kartu Learning Hub |
| 7 | **Filter Kategori Keilmuan** | `src/components/HubFilter.tsx` | **Lengkap & Berfungsi** | Tab pill kategori (Semua, Programming, AI, IoT, Multimedia) |
| 8 | **Filter Status Publikasi** | `src/components/HubFilter.tsx` | **Lengkap & Berfungsi** | Filter cepat: Semua, Tersedia Daring, Dalam Pengembangan |
| 9 | **Pencarian Real-Time (Search)** | `src/components/HubFilter.tsx`, `App.tsx` | **Lengkap & Berfungsi** | Mencari judul, tagline, deskripsi, topik, dan silabus |
| 10 | **Empty State Penelusuran** | `src/App.tsx` | **Lengkap & Berfungsi** | Tampilan ramah saat pencarian nihil + tombol reset |
| 11 | **Card Interaktif Learning Hub** | `src/components/HubCard.tsx` | **Lengkap & Berfungsi** | Menampilkan ikon domain, status badge, chapter count, tags |
| 12 | **Tautan Eksternal Aman** | `src/components/HubCard.tsx` | **Lengkap & Berfungsi** | `target="_blank"`, `rel="noopener noreferrer"`, disable jika offline |
| 13 | **Modal Rincian Kurikulum** | `src/components/HubDetailModal.tsx` | **Lengkap & Berfungsi** | Modal dialog accessible (ESC key, backdrop click, lock scroll) |
| 14 | **Silabus & Contoh Bab** | `src/components/HubDetailModal.tsx` | **Lengkap & Berfungsi** | Rincian nomor bab, judul, dan fokus materi |
| 15 | **Daftar Kompetensi Inti** | `src/components/HubDetailModal.tsx` | **Lengkap & Berfungsi** | Grid kompetensi praktis yang dibangun setiap hub |
| 16 | **Visualisasi Alur Belajar** | `src/components/LearningPathsSection.tsx`| **Lengkap & Berfungsi** | 3 alur belajar (AI, IoT, Multimedia), step-by-step diagram |
| 17 | **Penyimpanan Bookmark Lokal** | `src/hooks/useBookmarks.ts` | **Lengkap & Berfungsi** | Simpan hub favorit ke localStorage tanpa database eksternal |
| 18 | **Tampilan Khusus "Tersimpan"** | `src/components/LocalBookmarksSection.tsx`| **Lengkap & Berfungsi** | Halaman daftar kursus favorit + tombol kosongkan semua |
| 19 | **Halaman Informasi & Roadmap** | `src/components/AboutSection.tsx` | **Lengkap & Berfungsi** | Atribusi ITERA, pembuat kurikulum, prinsip OER, status Phase 1–3 |
| 20 | **Footer Institusional** | `src/components/Footer.tsx` | **Lengkap & Berfungsi** | Navigasi cepat, tautan langsung ke hub aktif, hak cipta |

---

## 2. Rincian Fitur Utama

### A. Central Hub Registry (`src/data/learningHubs.ts`)
- **Format Data**: Objek TypeScript terstruktur dengan interface `LearningHubMetadata`.
- **Field yang Didukung**:
  - `id`: Unique identifier (string).
  - `title`: Nama resmi kursus.
  - `slug`: URL slug representatif.
  - `tagline`: Subjudul/moto pembelajaran.
  - `description`: Deskripsi tujuan instruksional.
  - `category`: Domain akademik.
  - `iconName`: Identitas visual (Terminal, Brain, Cpu, Eye).
  - `status`: `'published'` atau `'in-development'`.
  - `statusLabel`: Teks ramah pengguna ("Tersedia di GitHub Pages" vs "Dalam Pengembangan").
  - `websiteUrl`: URL GitHub Pages (opsional).
  - `repositoryUrl`: URL repositori GitHub (opsional).
  - `chaptersCount`: Jumlah bab terverifikasi.
  - `chaptersBreakdown`: Rincian struktur modul inti vs spesialisasi.
  - `topics`: Daftar tag kata kunci keahlian.
  - `featured`: Penanda modul unggulan.
  - `lastUpdated`: Waktu pembaruan kanonikal.
  - `levelStructure`: Hirarki level akademik.
  - `keyCompetencies`: Kompetensi lulusan modul.
  - `prerequisites`: Pengetahuan prasyarat.
  - `chaptersPreview`: Cuplikan silabus bab representatif.

### B. Pencarian & Penyaringan Terpadu (`src/components/HubFilter.tsx`)
- Pencarian *case-insensitive* yang mencocokkan kata kunci ke beberapa atribut sekaligus:
  - Judul modul (`hub.title`)
  - Tagline (`hub.tagline`)
  - Deskripsi (`hub.description`)
  - Array topik (`hub.topics`)
  - Judul bab silabus (`hub.chaptersPreview.title`)
  - Fokus bab silabus (`hub.chaptersPreview.focus`)
- Penyaringan kategori secara simultan dengan status publikasi daring.
- Tombol reset filter langsung mengembalikan state ke `Semua Kategori` dan status `all`.

### C. Alur Belajar Lintas Disiplin (`src/components/LearningPathsSection.tsx`)
1. **Jalur Rekayasa Kecerdasan Artifisial & Intelligent Systems**:
   - Python Learning Hub ➔ AI Learning Hub ➔ Multimedia & Computer Vision Learning Hub.
2. **Jalur Sistem Tersemat & IoT Cerdas (Edge AI)**:
   - Python Learning Hub ➔ IoT Learning Hub ➔ AI Learning Hub (Edge AI / TinyML).
3. **Jalur Pemrosesan Sinyal & Multimedia Digital Terintegrasi**:
   - Python Fundamentals ➔ Multimedia & CV ➔ AI Deep Learning.

Setiap alur dilengkapi dengan kartu deskripsi tahapan, rekomendasi modul/bab spesifik, serta tombol langsung menuju kurikulum hub yang bersangkutan.

### D. Penanda Lokal Mahasiswa (*Bookmarks / Offline-Ready*)
- Menggunakan `localStorage` dengan kunci `learning_hub_bookmarks_v1`.
- Tidak ada klaim sinkronisasi akun palsu; secara eksplisit dijelaskan kepada mahasiswa bahwa data tersimpan di peramban lokal.
- Mendukung penambahan/penghapusan satu klik dari card maupun dari modal rincian.
- Menyediakan halaman ikhtisar khusus tab `#bookmarks` dengan tombol *Kosongkan Semua Bookmark*.

---

## 3. Fitur yang Belum Tersedia / Peluang Pengembangan

1. **Integrasi 3 Learning Hub Tambahan**:
   - Signal Processing Learning Hub.
   - Remote Sensing & Geospatial Intelligence Learning Hub.
   - Scientific Research & Experimental Methods Learning Hub.
2. **Ekstraksi Manifest Otomatis (Build-Time Manifest Synchronization)**:
   - Membaca file manifest `hub.config.json` atau `curriculum_metadata.json` langsung saat build pipeline berjalan, alih-alih hanya mengandalkan file statis TypeScript.
3. **Dukungan Filter Sub-Kategori / Akademik Track**:
   - Filter berdasarkan tingkat kesulitan (*Beginner*, *Intermediate*, *Advanced*).
   - Filter berdasarkan keberadaan materi pendukung (*Slide Presentasi*, *Jupyter Notebook*, *Kode Praktik*, *Kuis*).
