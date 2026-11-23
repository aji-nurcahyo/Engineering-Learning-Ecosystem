# Keputusan Desain Ulang & Rekomendasi Arah (Redesign Decision)
**Learning Hub Dashboard — Institut Teknologi Sumatera (ITERA)**
*Tanggal Audit: 23 November 2026*

---

## 1. Perbandingan Opsi Strategis

Berdasarkan hasil audit menyeluruh terhadap kode sumber, antarmuka, model data, dan kesiapan publikasi, berikut perbandingan objektif antara ketiga opsi:

| Parameter Evaluasi | Opsi A: Continue (Lanjutkan Apa Adanya) | Opsi B: Refactor + Redesign (Refaktorisasi & Redesain Terarah) | Opsi C: Controlled Rebuild (Bangun Ulang Total) |
| :--- | :--- | :--- | :--- |
| **Risiko Teknis** | **Sangat Rendah** (Kode saat ini stabil & lulus build) | **Rendah** (Mempertahankan fondasi React 19 + Vite yang sudah teruji) | **Tinggi** (Risiko regresi fungsional, bug routing, waktu terbuang) |
| **Pemeliharaan (*Maintainability*)** | **Sedang** (Data statis 4 hub akan sulit saat bertambah menjadi 7+) | **Sangat Tinggi** (Arsitektur data modular, skrip agregasi manifest build-time) | **Tinggi** (Perlu penulisan ulang arsitektur dari nol) |
| **Preservasi Fitur (*Feature Preservation*)** | **100% Terjaga** | **100% Terjaga + Ditingkatkan** (Bookmark, modal, filter, alur belajar tetap ada) | **Rentan Hilang / Terpotong** |
| **Skalabilitas Ekosistem** | **Terbatas** (Hanya 4 hub, kategori statis) | **Sangat Baik** (Mendukung 7+ hub, kategori dinamis, cluster keilmuan) | **Baik** |
| **Upaya Migrasi (*Effort*)** | **Minimal** (1–2 jam) | **Terukur & Proporsional** (1–2 hari kerja) | **Besar** (3–5 hari kerja tanpa nilai tambah riil) |
| **Kesesuaian Hosting Statis (GitHub Pages)** | **Sangat Baik** | **Sangat Baik** (Base path subpath + 404 fallback terjaga) | **Belum Tentu** (Harus diuji ulang) |

---

## 2. Keputusan yang Direkomendasikan

### ➔ **REKOMENDASI: OPSI B — REFACTOR + REDESIGN (Refaktorisasi & Redesain Terarah)**

### Justifikasi Objektif:

1. **Fondasi Teknis Saat Ini Sudah Solid**:
   - Kode sumber ditulis dalam React 19, TypeScript strict mode, Tailwind CSS 3.4, dan Vite 6.
   - Lulus kompilasi `tsc --noEmit` dengan 0 error dan ESLint 9 dengan 0 warning.
   - Mengikuti filosofi Anti-Slop (ITERA Navy & Gold, tipografi editorial, tanpa efek murahan).
   - Memilih Opsi C (Rebuild) adalah pemborosan sumber daya dan melanggar prinsip kehati-hatian rekayasa perangkat lunak (*premature rewrite fallacy*).
2. **Opsi A (Continue Murni) Tidak Cukup untuk Menampung Ekosistem Baru**:
   - Ditemukan 3 Learning Hub baru di direktori induk (`Signal Processing`, `Remote Sensing`, dan `Scientific Research`) yang belum terdaftar.
   - Kategori bidang keilmuan masih dibatasi 4 opsi.
   - Jalur belajar (*Learning Paths*) masih terbatas pada 3 alur dan belum memetakan ilmu kebumian/geospasial maupun metodologi riset ilmiah.
3. **Nilai Tambah Nyata Melalui Opsi B**:
   - Memperluas Central Hub Registry untuk mendaftarkan ke-7 Learning Hub.
   - Mengembangkan skrip agregasi manifest build-time agar pembaruan data kurikulum dapat disinkronkan secara semi-otomatis dari repositori lokal tetangga.
   - Memperbaiki tata letak katalog agar tetap nyaman dijelajahi saat jumlah kartu bertambah.
   - Memperkaya visualisasi alur belajar dengan menambahkan alur *Geospatial Intelligence* dan *Academic Research Methodology*.

---

## 3. Peta Jalan Pelaksanaan (Prioritized Implementation Roadmap)

Pelaksanaan Opsi B direkomendasikan dibagi ke dalam 4 fase terarah:

### Fase 1: Perluasan Skema & Pendaftaran 7+ Learning Hub
- Tambahkan domain baru pada `src/types/hub.ts` (misal: *Signal & Communication*, *Earth & Geospatial Intelligence*, *Academic Research & Methodology*).
- Daftarkan metadata terverifikasi untuk `Signal Processing`, `Remote Sensing`, dan `Scientific Research` ke dalam `src/data/learningHubs.ts`.
- Perbarui metrik statistik ringkasan di Hero Section secara dinamis.

### Fase 2: Peningkatan UI/UX Katalog & Visualisasi Alur Belajar
- Tambahkan indikator fitur materi pada kartu hub (`[Slides]`, `[Notebooks]`, `[Interactive Labs]`).
- Tambahkan 2 jalur belajar baru pada `src/data/learningPaths.ts`:
  1. *Jalur Penginderaan Jauh & Kecerdasan Geospasial* (Python ➔ AI Computer Vision ➔ Remote Sensing).
  2. *Jalur Metodologi Riset & Publikasi Ilmiah* (Scientific Research ➔ Data Analytics / Python ➔ Thesis Capstone).
- Tingkatkan filter pencarian dengan pengelompokan (*academic clustering*).

### Fase 3: Skrip Agregasi Manifest Waktu Kompilasi (Build-Time Sync)
- Buat skrip utilitas `scripts/sync-manifests.mjs` yang dapat mengekstrak metadata dari folder repositori lokal secara read-only.
- Pastikan build GitHub Actions tetap memiliki fallback ke data statis tanpa ketergantungan folder lokal.

### Fase 4: Audit Akhir Publikasi & Verifikasi Total
- Validasi SEO OpenGraph tags di `index.html`.
- Pengujian lintas peramban (Chrome, Firefox, Safari mobile emulation).
- Final linting dan static build run.
