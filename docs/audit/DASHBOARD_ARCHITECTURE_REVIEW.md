# Tinjauan Arsitektur Produk (Product Architecture Review)
**Learning Hub Dashboard — Institut Teknologi Sumatera (ITERA)**
*Tanggal Audit: 23 November 2026*

---

## 1. Evaluasi Identitas Perilaku Dashboard Saat Ini

Apakah Learning Hub Dashboard saat ini berperilaku sebagai:
1. **Koleksi tautan sederhana (*Simple Link Collection*)?**
   - *Bukan sekadar tautan sederhana.* Dashboard memiliki visualisasi kurikulum, rincian kompetensi, prasyarat belajar, indikator status verifikasi, dan rekomendasi jalur belajar lintas disiplin. Namun, bagi pengguna yang hanya mengklik tombol "Buka Learning Hub", antarmukanya memang berfungsi sebagai jembatan peluncuran (*launcher*).
2. **Dashboard pemantau proyek (*Project Monitoring Dashboard*)?**
   - *Bukan dashboard monitoring internal.* Tidak ada metrik CI/CD internal, commit tracker, atau audit code quality yang diekspos untuk publik. Informasi status yang ditampilkan murni berorientasi pada ketersediaan materi untuk mahasiswa (*published* vs *in-development*).
3. **Katalog pendidikan terpadu (*Unified Educational Catalog*)?**
   - *Ya, ini peran utamanya.* Seluruh modul dipetakan dalam sebuah registry standar dengan metadata terstruktur: judul, deskripsi, bidang keilmuan, jumlah bab, kompetensi inti, dan prasyarat.
4. **Portal pembelajaran (*Learning Portal*)?**
   - *Ya, pada lapis navigasi dan penemuan (Discovery Layer).* Dashboard bertindak sebagai satu pintu masuk (*single entrypoint*) yang memandu mahasiswa menentukan langkah awal eksplorasi belajar tanpa harus menghafal URL masing-masing repositori.

### Kesimpulan Identitas
Learning Hub Dashboard saat ini berperilaku sebagai **Katalog Pendidikan Terpadu & Portal Penemuan Pembelajaran (Unified Educational Catalog & Discovery Portal)** dengan dukungan personalisasi lokal (*bookmarks*).

---

## 2. Arsitektur yang Direkomendasikan: *Layered Decentralized Model*

Untuk memastikan ekosistem dapat berkembang hingga puluhan Learning Hub tanpa menyebabkan dashboard menjadi rapuh (*brittle*) atau membebani tim pengembang, arsitektur berikut direkomendasikan:

```
+-------------------------------------------------------------------------------+
|                       CENTRAL DISCOVERY & NAVIGATION LAYER                    |
|                           (Learning Hub Dashboard)                            |
|                                                                               |
|  - Ekosistem Registry (Katalog 7+ Hub)                                        |
|  - Mesin Pencari Lintas Domain & Filter Topik                                 |
|  - Peta Rekomendasi Alur Belajar (Cross-Hub Learning Paths)                   |
|  - Status Publikasi & Verifikasi Daring Transparan                            |
|  - Penyimpanan Personalisasi Mahasiswa (Local Offline Bookmarks)              |
+-------------------------------------------------------------------------------+
                                    |
          Build-Time Manifest Aggregation (JSON Schemas / Contracts)
                                    |
         +--------------------------+--------------------------+
         |                          |                          |
         v                          v                          v
+------------------+       +------------------+       +------------------+
| Python Hub       |       | AI Hub           |       | Signal Proc Hub  |
| (Repo Mandiri)   |       | (Repo Mandiri)   |       | (Repo Mandiri)   |
| GitHub Pages     |       | GitHub Pages     |       | GitHub Pages     |
| Slide & Latihan  |       | Notebook & Model |       | Teori & Lab FFT  |
+------------------+       +------------------+       +------------------+
         |                          |                          |
         v                          v                          v
+------------------+       +------------------+       +------------------+
| IoT Hub          |       | Multimedia & CV  |       | Remote Sensing   |
| (Repo Mandiri)   |       | (Repo Mandiri)   |       | (Repo Mandiri)   |
+------------------+       +------------------+       +------------------+
```

### Prinsip-Prinsip Desain Arsitektur:

1. **Zero Content Duplication (Tanpa Duplikasi Konten Pelajaran)**:
   - Dashboard **TIDAK BOLEH** menyalin isi teks materi, slide presentasi HTML, file notebook Jupyter, atau kode latihan dari repositori masing-masing kursus.
   - Dashboard hanya mengelola **Metadata Penemuan (Discovery Metadata)**: ID, Judul, Tagline, Bidang, Level, Jumlah Bab, Status Publikasi, URL Peluncuran, dan Ringkasan Silabus.
2. **Kemandirian Siklus Hidup (Decoupled Lifecycles)**:
   - Setiap Learning Hub bebas mengupdate kurikulum, menambah bab, memperbaiki slide, atau mengganti versi pustaka tanpa perlu persetujuan atau modifikasi langsung pada kode dashboard.
   - Jika satu repositori kursus mengalami error build, dashboard tetap beroperasi normal.
3. **Static-First & Serverless**:
   - Beroperasi penuh di atas infrastruktur hosting statis GitHub Pages.
   - Tidak memerlukan database MySQL/PostgreSQL atau server Node.js/Python yang berjalan terus-menerus.
4. **Graceful Degradation (Degradasi Anggun)**:
   - Jika suatu Learning Hub belum memiliki repositori daring atau situs publikasi, dashboard tetap menampilkannya dengan status "Dalam Pengembangan" dan menonaktifkan tombol tautan secara visual tanpa error.

---

## 3. Evaluasi Batas Tanggung Jawab Sistem

| Fungsi | Tanggung Jawab Dashboard | Tanggung Jawab Learning Hub Masing-Masing |
| :--- | :--- | :--- |
| **Katalog & Direktori** | **Ya** (Menampilkan seluruh daftar hub) | Tidak (Hanya fokus pada materinya sendiri) |
| **Rute & Peluncuran** | **Ya** (Mengarahkan ke URL live) | **Ya** (Menyediakan hash route seperti `#/chapter/14`) |
| **Penyimpanan Bookmark**| **Ya** (Menyimpan daftar favorit di browser) | Tidak |
| **Pengujian Kode Siswa**| Tidak (Bukan runner evaluasi) | **Ya** (Melalui testing/lab lokal di masing-masing hub) |
| **Presentasi Slide** | Tidak | **Ya** (Menggunakan Reveal.js lokal di masing-masing hub) |
| **Pencarian Global** | **Ya** (Tingkat judul, topik & silabus) | **Ya** (Tingkat isi teks bab masing-masing) |
| **Sinkronisasi Otentikasi**| Tidak (Tidak membangun LMS kompleks) | Tidak (Prinsip OER bebas registrasi) |
