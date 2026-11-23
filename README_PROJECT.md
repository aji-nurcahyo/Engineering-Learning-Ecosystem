# Engineering Learning Ecosystem — Project Continuation Reference
**Portal Utama Ekosistem Pembelajaran Terbuka — Institut Teknologi Sumatera (ITERA)**  
*Dokumen Rujukan Utama untuk Sesi AI & Pengembang*  
*Terakhir Diperbarui: 23 November 2026 (Fase DASH-02R Hotfix Selesai — PRODUCTION READY)*

---

## 📌 1. Identitas & Status Proyek

- **Nama Publik Portal:** **Engineering Learning Ecosystem**
- **Nama Folder Lokal:** `Learning-Hub-Dashboard` (tetap dipertahankan di `D:\Workstation\Repo My Corses\Learning-Hub-Dashboard`)
- **Institusi Resmi:** Program Studi S1 Teknik Telekomunikasi, Institut Teknologi Sumatera (ITERA)
- **Payung Riset:** Intelligent Sensing, Vision and Wireless Systems (ISVWS) 2026–2040
- **Fokus Kepakaran:** Intelligent Computer Vision
- **Inisiator & Pengembang:** Aji Pamungkas Tri Nurcahyo
- **Target Repositori GitHub:** [`aji-nurcahyo/Engineering-Learning-Ecosystem`](https://github.com/aji-nurcahyo/Engineering-Learning-Ecosystem)
- **Target GitHub Pages:** [`https://aji-nurcahyo.github.io/Engineering-Learning-Ecosystem/`](https://aji-nurcahyo.github.io/Engineering-Learning-Ecosystem/)
- **Status Fase Saat Ini:** **Fase DASH-02R Final Hotfix SELESAI (PRODUCTION READY)**.
  - Nama publik portal diselaraskan menjadi **Engineering Learning Ecosystem**.
  - Target repositori GitHub dan GitHub Pages dikonfigurasi pada `.github/workflows/deploy.yml`, `index.html`, `public/404.html`, dan navigasi UI.
  - Seluruh 7 Repositori GitHub resmi untuk ketujuh Learning Hub (termasuk `Signal Processing`, `Remote Sensing`, dan `Scientific Research`) telah terdaftar dengan URL resmi.
  - Metrik seluruh ekosistem diaudit berbasis bukti file nyata (308 slide deck, 40 laboratorium interaktif terverifikasi, 309 script CPython teruji, 10 templat riset).
  - Skrip agregasi manifest `scripts/sync-manifests.mjs` v2.0 mendukung live filesystem audit dan *isolated CI fallback* (GitHub Actions runner).
  - 5 Rekomendasi Alur Belajar Lintas Disiplin (*Cross-Hub Learning Paths*) tervalidasi 100% bebas dari dead links.
  - Dokumen laporan kesiapan rilis final tersedia di [`docs/DASH_02R_FINAL_HOTFIX_REPORT.md`](docs/DASH_02R_FINAL_HOTFIX_REPORT.md) dan [`docs/DASH_02R_RELEASE_READINESS_REPORT.md`](docs/DASH_02R_RELEASE_READINESS_REPORT.md).
  - Berhenti di Gerbang Rilis Final (*Release Approval Gate*) tanpa melakukan auto-commit atau push ke remote.

---

## 🗺️ 2. Pemetaan Aktual Ekosistem 7 Learning Hub (Terekonsiliasi Final)

| Nama Learning Hub | Klaster Keilmuan | Kategori | Folder Lokal | Status Deployment | Bab Rencana | Bab Impl. | Bab Daring | Repositori GitHub & Artefak Terverifikasi |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Python Learning Hub** | Computing & AI | Programming | `Alpro-python` | **Tersedia Daring** | 55 | 55 | 30 | `aji-nurcahyo/Python-Learning-Hub`<br>309 Contoh CPython 3.12, 30 Slides |
| **AI Learning Hub** | Computing & AI | AI | `Kecerdasan Buatan` | **Tersedia Daring** | 40 | 40 | 40 | `aji-nurcahyo/AI-Learning-Hub`<br>40 Slides, 5 Track Labs |
| **IoT Learning Hub** | Sensing, Signals & Embedded | IoT | `Internet Of Things` | **Tersedia Daring** | 40 | 40 | 40 | `aji-nurcahyo/IoT-Learning-Hub`<br>40 Slides, Fondasi Daring (Hardware Untested) |
| **Multimedia & CV Hub** | Vision & Geospatial | Multimedia & CV | `Multimedia & Computer Vision` | **Tersedia Daring** | 60 | 60 | 60 | `aji-nurcahyo/Multimedia-Computer-Vision-Learning-Hub`<br>60 Slides, 18 Client Labs (53 Playgrounds) |
| **Signal Processing Hub** | Sensing, Signals & Embedded | Signal Processing | `Signal Processing` | **Pengembangan Lokal** | 113 | 28 | 0 | [`aji-nurcahyo/Signal-Processing-Learning-Hub`](https://github.com/aji-nurcahyo/Signal-Processing-Learning-Hub.git)<br>115 Slide Deck HTML Standalone (Repositori Terdaftar) |
| **Remote Sensing Hub** | Vision & Geospatial | Remote Sensing | `Remote Sensing & Geospatial Intelligence` | **Pengembangan Lokal** | 28 | 23 | 0 | `aji-nurcahyo/Remote-sensing-Geospatial-intelligent-Learning-Hub`<br>23 Slide Decks, 2 Simulator Lab Interaktif |
| **Scientific Research Hub** | Scientific Research | Research Methodology | `Scientific Research & Experimental Methods`| **Pengembangan Lokal** | 51 | 51 | 0 | `aji-nurcahyo/Scientific-Research-Experimental-Methods-Learning-Hub`<br>15 Lab Komputasi Reproduktif, 10 Templat Riset |
| **TOTAL EKOSISTEM** | **4 Klaster** | **7 Domain** | — | **4 Daring / 3 Lokal** | **387** | **297** | **170** | **308 Slide Decks, 40 Lab, 309 CPython, 10 Templat** |

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

## 📋 6. Panduan untuk AI Session Selanjutnya

Jika pengguna memberikan instruksi lanjutan:
1. **Dilarang melakukan rebuild aplikasi dari nol.**
2. **Pertahankan arsitektur modular, skema metadata terekonsiliasi, dan 4 klaster keilmuan.**
3. **Semua metrik wajib berbasis fakta empiris** dari manifest atau file lokal; dilarang mengarang bab atau status fiktif.
4. **Sebelum melakukan git commit atau push remote**, selalu mintakan otorisasi eksplisit dari pengguna.
