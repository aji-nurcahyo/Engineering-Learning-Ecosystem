# Engineering Learning Ecosystem — Project Continuation Reference
**Portal Utama Ekosistem Pembelajaran Terbuka — Institut Teknologi Sumatera (ITERA)**  
*Dokumen Rujukan Utama untuk Sesi AI & Pengembang*  
*Terakhir Diperbarui: 23 November 2026 (Fase RELEASE-02 — RELEASED & VERIFIED v1.0.1)*

---

## 📌 1. Identitas & Status Rilis Produksi (v1.0.1)

- **Nama Publik Portal:** **Engineering Learning Ecosystem**
- **Versi Rilis:** `v1.0.1`
- **Status Rilis:** **RELEASED & VERIFIED** (Publikasi GitHub Pages Aktif & Terverifikasi Nyata)
- **Nama Folder Lokal:** `Learning-Hub-Dashboard` (dipertahankan di `D:\Workstation\Repo My Corses\Learning-Hub-Dashboard`)
- **Institusi Resmi:** Program Studi S1 Teknik Telekomunikasi, Institut Teknologi Sumatera (ITERA)
- **Payung Riset:** Intelligent Sensing, Vision and Wireless Systems (ISVWS) 2026–2040
- **Fokus Kepakaran:** Intelligent Computer Vision
- **Inisiator & Pengembang:** Aji Pamungkas Tri Nurcahyo
- **Repositori Produksi GitHub:** [`aji-nurcahyo/Engineering-Learning-Ecosystem`](https://github.com/aji-nurcahyo/Engineering-Learning-Ecosystem) (`main` branch)
- **URL GitHub Pages Publik:** [`https://aji-nurcahyo.github.io/Engineering-Learning-Ecosystem/`](https://aji-nurcahyo.github.io/Engineering-Learning-Ecosystem/)
- **Git Commit SHA Rilis v1.0.1:** `34eb8af821aa6ac470f35ddbbce376278d39c016` (`release: Engineering Learning Ecosystem v1.0.1 - synchronize public hub links & update Scientific Research deployment`)
- **Status GitHub Actions Workflow:**
  - **Workflow Name:** `Deploy Engineering Learning Ecosystem to GitHub Pages`
  - **Workflow Run ID:** `45149652495`
  - **Run URL:** [`https://github.com/aji-nurcahyo/Engineering-Learning-Ecosystem/actions/runs/45149652495`](https://github.com/aji-nurcahyo/Engineering-Learning-Ecosystem/actions/runs/45149652495)
  - **Job 1 (Build & Verify Dashboard):** ID `137607541826` — **SUCCESS**
  - **Job 2 (Deploy to GitHub Pages):** ID `137607673171` — **SUCCESS**
- **Hasil Verifikasi Produksi Daring Nyata (Headless Chrome DOM Audit):**
  - Halaman utama merespons `HTTP 200 OK` (ETag: `"6b040aec-a81"`).
  - Bundel produksi JS aktif: `index-V8RZcF7g.js` (`HTTP 200 OK`).
  - Bundel produksi CSS aktif: `index-p3XXlGwj.css` (`HTTP 200 OK`).
  - Seluruh 7 kartu Learning Hub menyajikan tombol aksi "Buka Learning Hub" aktif menuju alamat GitHub Pages masing-masing.
  - Scientific Research & Experimental Methods terverifikasi aktif daring (`deploymentStatus: 'deployed'`) dengan 51 bab materi online.
  - Signal Processing dan Remote Sensing terverifikasi aman (`deploymentStatus: 'local-only'`, 0 online chapters) dengan label penjelas *Segera Hadir*.
  - Bebas dari kesalahan konsol kritis (*0 console errors*).

---

## 🗺️ 2. Pemetaan Aktual Ekosistem 7 Learning Hub (Terekonsiliasi Final v1.0.1)

| Nama Learning Hub | Klaster Keilmuan | Kategori | Folder Lokal | Status Deployment | Bab Rencana | Bab Impl. | Bab Daring | URL Website Publik & Repositori |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Python Learning Hub** | Computing & AI | Programming | `Alpro-python` | **Tersedia Daring** | 55 | 55 | 30 | [`aji-nurcahyo.github.io/Python-Learning-Hub`](https://aji-nurcahyo.github.io/Python-Learning-Hub/)<br>309 Contoh CPython 3.12, 30 Slides |
| **AI Learning Hub** | Computing & AI | AI | `Kecerdasan Buatan` | **Tersedia Daring** | 40 | 40 | 40 | [`aji-nurcahyo.github.io/AI-Learning-Hub`](https://aji-nurcahyo.github.io/AI-Learning-Hub/)<br>40 Slides, 5 Track Labs |
| **IoT Learning Hub** | Sensing, Signals & Embedded | IoT | `Internet Of Things` | **Tersedia Daring** | 40 | 40 | 40 | [`aji-nurcahyo.github.io/IoT-Learning-Hub`](https://aji-nurcahyo.github.io/IoT-Learning-Hub/)<br>40 Slides, Fondasi Daring (Hardware Untested) |
| **Multimedia & CV Hub** | Vision & Geospatial | Multimedia & CV | `Multimedia & Computer Vision` | **Tersedia Daring** | 60 | 60 | 60 | [`aji-nurcahyo.github.io/Multimedia-Computer-Vision-Learning-Hub`](https://aji-nurcahyo.github.io/Multimedia-Computer-Vision-Learning-Hub/)<br>60 Slides, 18 Client Labs (53 Playgrounds) |
| **Scientific Research Hub** | Scientific Research | Research Methodology | `Scientific Research & Experimental Methods`| **Tersedia Daring** | 51 | 51 | 51 | [`aji-nurcahyo.github.io/Scientific-Research-Experimental-Methods-Learning-Hub`](https://aji-nurcahyo.github.io/Scientific-Research-Experimental-Methods-Learning-Hub/)<br>51 Bab Daring, 15 Lab Komputasi, 10 Templat Riset |
| **Signal Processing Hub** | Sensing, Signals & Embedded | Signal Processing | `Signal Processing` | **Pengembangan Lokal** (Segera Hadir) | 113 | 28 | 0 | [`aji-nurcahyo.github.io/Signal-Processing-Learning-Hub`](https://aji-nurcahyo.github.io/Signal-Processing-Learning-Hub/)<br>115 Slide Deck HTML (Repositori GitHub Terdaftar) |
| **Remote Sensing Hub** | Vision & Geospatial | Remote Sensing | `Remote Sensing & Geospatial Intelligence` | **Pengembangan Lokal** (Segera Hadir) | 28 | 23 | 0 | [`aji-nurcahyo.github.io/Remote-sensing-Geospatial-intelligent-Learning-Hub`](https://aji-nurcahyo.github.io/Remote-sensing-Geospatial-intelligent-Learning-Hub/)<br>23 Slide Decks, 2 Simulator Lab Interaktif |
| **TOTAL EKOSISTEM** | **4 Klaster** | **7 Domain** | — | **5 Daring / 2 Lokal** | **387** | **297** | **221** | **308 Slide Decks, 40 Lab, 309 CPython, 10 Templat** |

> [!IMPORTANT]
> **PERINGATAN PROTOKOL READ-ONLY:**  
> Seluruh repositori Learning Hub tetangga di atas **BERSIFAT STRICTLY READ-ONLY**.  
> Agen AI dilarang memodifikasi file sumber, struktur direktori, atau file manifest pada repositori kursus tetangga. Seluruh ekstraksi metadata dilakukan secara pasif melalui skrip agregator.

---

## 🏗️ 3. Arsitektur Teknis Dashboard

- **Frontend Core:** React 19 (`react: ^19.3.1`, `react-dom: ^19.3.1`)
- **Bahasa & Type-Safety:** TypeScript 5.7 (Mode `strict: true`, `noEmit: true`)
- **Bundler:** Vite 6 (`vite: ^6.4.6`) dengan konfigurasi `VITE_BASE_PATH` untuk target `/Engineering-Learning-Ecosystem/`
- **Styling:** Tailwind CSS 3.4.17 (Token Warna ITERA: Navy `#0f2b48`, Gold/Amber `#b45309`, dan Slate netral)
- **Ikonografi:** Lucide React (`lucide-react: ^0.468.0`)
- **Quality Assurance:** ESLint 9 Flat Config + typescript-eslint (`0 errors, 0 warnings`)
- **Routing:** Hash-based client routing (`#home`, `#hubs`, `#paths`, `#bookmarks`, `#about`) dengan fallback `public/404.html`
- **Build-Time Manifest Synchronization:** `scripts/sync-manifests.mjs` mengekstrak data dari folder tetangga secara adaptif, memvalidasi skema runtime, serta menyediakan `BASELINE_SNAPSHOT` deterministik bila dijalankan di CI terisolasi.

---

## 🧭 4. Lima Jalur Belajar Lintas Disiplin (Cross-Hub Learning Paths)

1. **Computer Vision & Intelligent Visual Perception:**  
   `Python Hub (NumPy Array Matrix)` ➔ `Signal Processing Hub (2D FFT & Sinyal Spasial)` ➔ `Multimedia & CV Hub (Filter Spasial & Lab 2D FFT)` ➔ `AI Hub (CNN, Object Detection & ViT)`
2. **IoT, Intelligent Sensing & Edge Computing:**  
   `Python Hub (Serial I/O & Exception Handling)` ➔ `Signal Processing Hub (ADC, Derau & Filter FIR)` ➔ `IoT Hub (MQTT Broker & Telemetri)` ➔ `AI Hub (TinyML & Kuantisasi Model)`
3. **Remote Sensing & Geospatial Intelligence (GEOINT):**  
   `Python Hub (Raster Analytics)` ➔ `Multimedia & CV Hub (Histogram, Kontras & Deteksi Tepi)` ➔ `Remote Sensing Hub (Koreksi BOA & Radar SAR)` ➔ `AI Hub (Geospatial Deep Learning)`
4. **Signal Processing & Scientific Systems Foundations:**  
   `Python Hub (Fungsi Matematika & Pytest)` ➔ `Signal Processing Hub (Sistem LTI & Bidang Z)` ➔ `Signal Processing Hub (Desain Filter FIR/IIR Standar Industri)`
5. **Scientific Research Methodology & PhD Preparation:**  
   `Scientific Research Hub (Epistemologi & Research Gap)` ➔ `Scientific Research Hub (Desain Eksperimen & Validasi ANOVA)` ➔ `Python Hub (SciPy Data Pipeline)` ➔ `Scientific Research Hub (Manuskrip Q1 & Strategi Rebuttal)`

---

## ⚡ 5. Perintah Pengujian & Eksekusi

```powershell
# 1. Jalankan development server lokal
npm run dev

# 2. Sinkronkan manifest repositori tetangga (dengan live-audit & validasi skema)
npm run sync:manifests

# 3. Jalankan linting (ESLint)
npm run lint

# 4. Bangun bundel produksi (otomatis menyinkronkan manifest + tsc + vite build)
npm run build

# 5. Bangun bundel produksi dengan target base path GitHub Pages
$env:VITE_BASE_PATH="/Engineering-Learning-Ecosystem/"; npm run build; Remove-Item Env:\VITE_BASE_PATH

# 6. Pratinjau server statis hasil kompilasi
npm run preview
```

---

## ⚠️ 6. Batasan Diketahui (Known Limitations v1.0.0)

1. **Pengujian Fisik Perangkat Keras IoT:**
   - 40 Bab Internet of Things Hub telah ter-deploy di GitHub Pages, namun pengujian hardware fisik masih berstatus `untested hardware`.
2. **Repositori Berstatus Pengembangan Lokal:**
   - `Signal Processing Learning Hub`, `Remote Sensing & Geospatial Intelligence Learning Hub`, dan `Scientific Research & Experimental Methods Learning Hub` telah memiliki repositori GitHub resmi terdaftar, namun belum memiliki hosting web publik yang aktif (`deploymentStatus: 'local-only'`, `onlineAccessibleChapters: 0`). Tombol aksi portal secara aman menyajikan label *Pengembangan Lokal* tanpa tautan kosong.
3. **Kompatibilitas Lingkungan CI:**
   - Skrip `scripts/sync-manifests.mjs` secara deterministik menggunakan `BASELINE_SNAPSHOT` bila dijalankan pada GitHub Actions runner tanpa keberadaan folder repositori lokal tetangga.

---

## 📋 7. Panduan untuk AI Session Selanjutnya

Jika pengguna memberikan instruksi lanjutan:
1. **Dilarang melakukan rebuild aplikasi dari nol.**
2. **Pertahankan arsitektur modular, skema metadata terekonsiliasi, dan 4 klaster keilmuan.**
3. **Semua metrik wajib berbasis fakta empiris** dari manifest atau file lokal; dilarang mengarang bab atau status fiktif.
4. **Kebijakan Read-Only:** Seluruh repositori tetangga bersifat read-only mutlak.
5. **Sebelum melakukan git commit atau push remote**, selalu mintakan otorisasi eksplisit dari pengguna.
