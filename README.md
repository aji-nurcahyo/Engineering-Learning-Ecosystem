# Learning Hub Dashboard

> **Portal Utama Ekosistem Pembelajaran Terbuka (Engineering Learning Ecosystem)**  
> **Institusi:** Institut Teknologi Sumatera (ITERA)  
> **Inisiator & Pengembang:** Aji Pamungkas Tri Nurcahyo  
> **Jenis Proyek:** Educational Content Portal (Single Page Application)  
> **Target Deployment:** GitHub Pages  

---

## 📌 1. Gambaran Umum Proyek

**Learning Hub Dashboard** adalah portal pusat satu pintu (*Central Gateway*) yang dirancang untuk mengakses, menjelajahi, dan mengelola katalog seluruh *Learning Hub* akademik di lingkungan Institut Teknologi Sumatera (ITERA).

Portal ini mengintegrasikan **7 Learning Hub** dalam **4 Klaster Keilmuan**, mencakup **387 bab terencana** dengan **292 bab terimplementasi** dan **171 bab siap publikasi daring**.

### Prinsip Utama Arsitektur

1. **Pintu Masuk Terpusat, Bukan Pengganti:** Dashboard berfungsi sebagai agregator navigasi dan panduan eksplorasi materi, tanpa menggantikan repositori atau situs masing-masing Learning Hub.
2. **Independensi Repositori:** Setiap Learning Hub memiliki repositori Git, silabus mandiri, dan siklus rilis terpisah. Dashboard memperlakukan repositori lain sebagai referensi yang berdiri sendiri secara *read-only*.
3. **Desain Anti-Slop & Human-Friendly:** Dibangun dengan prinsip desain fungsional berorientasi tujuan (*purpose-driven*), tipografi berkontras tinggi, bebas dari dekorasi berlebih (*no generic AI slop*), serta sepenuhnya responsif.
4. **Build-Time Manifest Aggregation:** Data kurikulum disinkronkan secara semi-otomatis melalui script agregator pada saat build, dengan snapshot cadangan aman untuk deployment GitHub Actions.
5. **Kejujuran Data & Verifikasi:** Statistik bab, status publikasi, dan ketersediaan fitur (Slides, Notebooks, Interactive Labs, Research Track) disajikan secara transparan berdasarkan status aktual proyek.

---

## 🗂️ 2. Katalog 7 Learning Hub Terdaftar

| Learning Hub | Klaster Keilmuan | Kategori | Bab Impl. / Rencana | Status Publikasi | Tautan Daring | Repositori GitHub |
| :--- | :--- | :--- | :---: | :--- | :--- | :--- |
| **Python Learning Hub** | Computing & AI | Programming | 55 / 55 Bab | **Tersedia Daring** | [Kunjungi Situs](https://aji-nurcahyo.github.io/Python-Learning-Hub/) | [GitHub Repo](https://github.com/aji-nurcahyo/Python-Learning-Hub) |
| **AI Learning Hub** | Computing & AI | AI | 40 / 40 Chapter | **Tersedia Daring** | [Kunjungi Situs](https://aji-nurcahyo.github.io/AI-Learning-Hub/) | [GitHub Repo](https://github.com/aji-nurcahyo/AI-Learning-Hub) |
| **IoT Learning Hub** | Sensing, Signals & Embedded | IoT | 40 / 40 Chapter | **Dalam Pengembangan** | [Kunjungi Situs](https://aji-nurcahyo.github.io/IoT-Learning-Hub/) | [GitHub Repo](https://github.com/aji-nurcahyo/IoT-Learning-Hub) |
| **Signal Processing Hub** | Sensing, Signals & Embedded | Signal Processing | 25 / 113 Bab | **Dalam Pengembangan** | *(Lokal Workspace)* | *(Belum Dipublikasikan)* |
| **Multimedia & CV Hub** | Vision & Geospatial | Multimedia & CV | 60 / 60 Bab | **Dalam Pengembangan** | *(Lokal Workspace)* | *(Belum Dipublikasikan)* |
| **Remote Sensing Hub** | Vision & Geospatial | Remote Sensing | 21 / 28 Bab | **Dalam Pengembangan** | *(Lokal Workspace)* | *(Belum Dipublikasikan)* |
| **Scientific Research Hub** | Scientific Research | Research Methodology | 51 / 51 Bab | **Dalam Pengembangan** | *(Lokal Workspace)* | *(Belum Dipublikasikan)* |

---

## 🗺️ 3. Rekomendasi Jalur Belajar Lintas Disiplin (Cross-Hub Learning Paths)

Dashboard menyediakan visualisasi alur belajar terpadu untuk memandu mahasiswa menghubungkan materi lintas disiplin:

1. **Computer Vision & Intelligent Visual Perception:**  
   `Python Hub (NumPy Matrix)` ➔ `Signal Processing Hub (2D FFT & Sinyal)` ➔ `Multimedia & CV Hub (Filter Spasial & Morfometri)` ➔ `AI Hub (CNN, YOLO & ViT)`
2. **IoT, Intelligent Sensing & Edge Computing:**  
   `Python Hub (Serial I/O)` ➔ `Signal Processing Hub (ADC & Filter FIR)` ➔ `IoT Hub (MQTT & Networking)` ➔ `AI Hub (Edge AI & TinyML)`
3. **Remote Sensing & Geospatial Intelligence (GEOINT):**  
   `Python Hub (Raster Analytics)` ➔ `Multimedia & CV Hub (Histogram & Tepi)` ➔ `Remote Sensing Hub (Koreksi BOA & Radar SAR)` ➔ `AI Hub (Geospatial Deep Learning)`
4. **Signal Processing & Scientific Systems Foundations:**  
   `Python Hub (Testing Pytest)` ➔ `Signal Processing Hub (Sistem LTI & Bidang Z)` ➔ `Signal Processing Hub (Desain Filter FIR/IIR & Wavelet)`
5. **Scientific Research Methodology & PhD Preparation:**  
   `Scientific Research Hub (Epistemologi & Novelty)` ➔ `Scientific Research Hub (Desain Eksperimen & ANOVA)` ➔ `Python Hub (SciPy Pipeline)` ➔ `Scientific Research Hub (Manuskrip Q1 & Rebuttal)`

> *Catatan:* Learning Paths bersifat anjuran navigasi. Mahasiswa memiliki kebebasan penuh mengakses bab mana pun tanpa diwajibkan menyelesaikan tahapan secara linier.

---

## 💻 4. Instalasi & Menjalankan Proyek

### Prasyarat
- **Node.js**: Versi 20 LTS, 22 LTS, atau 24 LTS
- **npm**: Versi 10 atau yang lebih baru

### Langkah Instalasi

```bash
# Masuk ke direktori proyek
cd "d:\Workstation\Repo My Corses\Learning-Hub-Dashboard"

# Pasang dependensi
npm install

# Sinkronkan manifest repositori lokal tetangga (opsional)
npm run sync:manifests

# Jalankan server pengembangan lokal (Vite)
npm run dev
```

Buka peramban di alamat yang tertera (biasanya `http://localhost:5173/`).

### Pengujian & Build Produksi

```bash
# Validasi sintaks dan aturan kode (ESLint)
npm run lint

# Kompilasi TypeScript dan bangun bundel statis
npm run build

# Uji hasil build secara lokal
npm run preview
```

---

## 🚀 5. Pengaturan Deployment ke GitHub Pages

Proyek ini sepenuhnya kompatibel dengan GitHub Pages dan mendukung deployment subpath repository (misalnya `https://aji-nurcahyo.github.io/Learning-Hub-Dashboard/`).

### Konfigurasi Base Path

Vite telah dikonfigurasi pada `vite.config.ts` untuk membaca variabel lingkungan `VITE_BASE_PATH`:

```powershell
# Contoh build manual dengan subpath
$env:VITE_BASE_PATH = '/Learning-Hub-Dashboard/'
npm run build
```

Jika tidak diisi, `base` default adalah `./` yang mendukung hosting relatif.

### Otomatisasi GitHub Actions

Alur CI/CD otomatis telah disediakan pada `.github/workflows/deploy.yml`:
- Berjalan otomatis saat ada `push` ke cabang `main` atau pemicuan manual (`workflow_dispatch`).
- Menjalankan `npm run lint` dan `npm run build`.
- Mengunggah artefak direktori `dist/` ke GitHub Pages secara aman tanpa memerlukan konfigurasi secret tambahan.

---

## ⚖️ 6. Lisensi & Hak Cipta

© 2026 **Institut Teknologi Sumatera (ITERA)**.  
Inisiator & Pengembang: **Aji Pamungkas Tri Nurcahyo**.  
Dilisensikan sebagai **Open Access Educational Resource (OER)** untuk keperluan pendidikan, riset, dan pengembangan keilmuan terbuka.
