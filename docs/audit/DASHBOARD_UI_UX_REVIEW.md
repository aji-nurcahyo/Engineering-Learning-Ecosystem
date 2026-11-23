# Tinjauan UI/UX & Kepatuhan Anti-Slop (UI/UX Review)
**Learning Hub Dashboard — Institut Teknologi Sumatera (ITERA)**
*Tanggal Audit: 23 November 2026*

---

## 1. Kepatuhan Terhadap Filosofi Anti-Slop

Evaluasi desain dilakukan berlandaskan prinsip **Anti-Slop Design** ([github.com/miqdadbadjuber/anti-slop](https://github.com/miqdadbadjuber/anti-slop)):

> *Desain yang baik harus terasa dirancang oleh manusia dengan tujuan spesifik (purpose-driven), bukan kumpulan komponen template generik dengan efek visual berlebihan yang tidak bernilai guna.*

### Matriks Kepatuhan Anti-Slop (Audited Against Slop Patterns):

| Pola AI Slop yang Dihindari | Status pada Dashboard Saat Ini | Bukti Implementasi / Kode Sumber |
| :--- | :--- | :--- |
| **Generic Blue-Purple Gradient** | **Bebas Slop** | Menggunakan palet akademis ITERA: Deep Navy (`#0f2b48`) dan Warm Amber (`#b45309`). Tidak ada gradien neon ungu-sian. |
| **Excessive Glassmorphism** | **Bebas Slop** | Transparansi hanya digunakan minimal pada sticky navbar (`bg-white/95 backdrop-blur-md`) untuk keterbacaan kontras saat scroll. Card menggunakan background solid (`bg-white` / `bg-slate-900`). |
| **Pill-Everything Obsession** | **Bebas Slop** | Radius border bervariasi secara fungsional: Badge status menggunakan `rounded-full`, kartu konten menggunakan `rounded-xl`, tombol aksi menggunakan `rounded-lg`, tab kategori menggunakan `rounded-md`. |
| **Floating Soft Glow Shadows** | **Bebas Slop** | Menggunakan bayangan tegas berpresisi rendah (`shadow-xs`, `hover:shadow-md`). Tidak ada efek *ambient colored glow* pada tombol atau card. |
| **Mesh Gradients & Background Dots**| **Bebas Slop** | Latar belakang bersih tanpa titik-titik blueprint dekoratif atau orb warna-warni yang mengalihkan perhatian dari materi. |
| **Decorative Filler Widgets** | **Bebas Slop** | Setiap widget memiliki fungsi nyata: Metrik menyajikan data terverifikasi riil (170+ bab, 4 domain, status OER). Tidak ada grafik palsu "78% Completion Rate" yang tidak memiliki sumber data. |
| **Sterile Over-Correction** | **Lulus** | Meskipun bersih dari efek murahan, antarmuka tetap berkarakter akademis berkat aksen warna emas ITERA, tipografi Inter, dan kontras tajam. |

---

## 2. Evaluasi Rinci Elemen Antarmuka

### A. Hirarki Halaman Beranda (Homepage Hierarchy)
- **Kekuatan**:
  - Alur membaca mengikuti pola mata alami (F-Pattern): Pengguna pertama kali disambut oleh identitas institusi (ITERA), diikuti *value proposition* portal ("Explore Your Learning Hub"), metrik pencapaian kurikulum terverifikasi, lalu langsung masuk ke katalog interaktif.
  - Terdapat tombol ajakan bertindak (*Call-to-Action*) yang jelas untuk mahasiswa baru: *Jelajahi Katalog Hub* dan *Lihat Rekomendasi Alur Belajar*.
- **Area Peningkatan**:
  - Dengan bertambahnya jumlah Learning Hub dari 4 menjadi 7, tata letak grid 2-kolom saat ini akan menjadi cukup panjang. Perlu dipertimbangkan opsi *view toggle* (Grid vs List/Compact Table) atau segmentasi per Cluster Bidang Ilmu.

### B. Desain Kartu (Hub Cards & Catalog View)
- **Kekuatan**:
  - Kartu memadukan kategori keilmuan, badge status publikasi yang terverifikasi, ikon tematik, judul, tagline, cuplikan ringkasan, alokasi modul/bab, tag topik, dan tanggal pembaruan.
  - Membedakan aksi utama (Buka Hub via tombol tegas brand) dengan aksi sekunder (Inspeksi Detail via tombol outline) dan aksi repositori (ikon GitHub).
  - Penanganan status non-aktif yang jujur: Bila hub belum dihosting daring, tombol "Buka Learning Hub" otomatis nonaktif dengan label "Belum Daring".
- **Area Peningkatan**:
  - Penambahan badge tingkat kesulitan (*difficulty level*) atau informasi ketersediaan materi (*Notebooks*, *Slides*, *Labs*).

### C. Tipografi & Sistem Warna (Typography & Color System)
- **Tipografi**:
  - Font Sans: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`. Memberikan keterbacaan luar biasa pada ukuran teks kecil (12–14px).
  - Font Mono: `JetBrains Mono` untuk angka bab, kode modul, dan singkatan `LH`.
- **Sistem Warna**:
  - Light Mode: Latar belakang `bg-slate-50`, teks utama `text-slate-800` dan `text-slate-900`. Kontras rasio teks hitam pekat terhadap putih mencapai > 14:1 (jauh di atas batas WCAG AAA 7:1).
  - Dark Mode: Latar belakang `#0b1120`, kartu `bg-slate-900`, border `border-slate-800`, teks utama `text-slate-200`. Kontras mencapai > 11:1.

### D. Aksesibilitas (Accessibility & Usability)
- **Fokus Keyboard**: Seluruh elemen interaktif (`<button>`, `<a>`, `<input>`) dilengkapi `:focus-visible` dengan cincin 2px biru brand (`focus-visible:ring-brand-500`) dan *offset* yang kontras.
- **Dukungan Pembaca Layar (Screen Reader)**:
  - Tombol ikon memiliki atribut `aria-label` deskriptif (misal: "Kembali ke Beranda Learning Hub Dashboard", "Simpan AI Learning Hub", "Tutup navigasi").
  - Modal silabus memiliki atribut `role="dialog"`, `aria-modal="true"`, dan `aria-labelledby="modal-title"`.
- **Keyboard Trapping & Escape Listener**: Modal langsung tertutup saat tombol `Escape` ditekan, dan scrolling dokumen dinonaktifkan (`document.body.style.overflow = 'hidden'`) untuk mencegah disorientasi.

### E. Perilaku Responsif & Mobile Usability
- **Desktop (>= 1024px)**: Navigasi horizontal lengkap, metrik 4-kolom, grid kartu 2-kolom seimbang.
- **Tablet (768px - 1023px)**: Grid kartu 2-kolom, metrik 2x2.
- **Mobile (< 768px)**:
  - Navigasi berpindah ke menu hamburger drawer yang rapi dan tidak menutupi seluruh layar secara invasif.
  - Tombol CTA fleksibel turun ke baris baru (*flex-wrap*).
  - Filter kategori bergulir secara horizontal atau melipat secara teratur (*flex-wrap*).
  - Ukuran target sentuh tombol minimal 40x40px, memenuhi standar ergonomi sentuhan jari.

---

## 3. Rekomendasi Redesain Spesifik (UI/UX Action Items)

1. **Segmentasi Kategori Tingkat Lanjut (Academic Clustering)**:
   - Mengelompokkan 7+ Learning Hub ke dalam 3 Cluster Akademik Utama:
     - *Cluster A: Komputasi & Pemrograman* (Python, AI)
     - *Cluster B: Sistem Fisik & IoT* (IoT, Signal Processing)
     - *Cluster C: Visi, Citra & Penginderaan Jauh* (Multimedia & CV, Remote Sensing, Scientific Research)
2. **Indikator Fitur Modul (Feature Pills)**:
   - Menambahkan ikon kecil berlabel pada kartu untuk menandai fasilitas apa saja yang disediakan kursus tersebut (misal: `[Slides]`, `[Notebooks]`, `[Interactive Labs]`).
3. **Penyempurnaan Diagram Alur Belajar**:
   - Menambahkan diagram interaktif yang dapat menyorot jalur relasi antar-kursus saat mahasiswa mengarahkan kursor (*hover*) pada salah satu simpul hub.
