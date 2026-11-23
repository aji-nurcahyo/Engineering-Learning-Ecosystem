# Strategi Integrasi Data Ekosistem (Learning Hub Integration Strategy)
**Learning Hub Dashboard — Institut Teknologi Sumatera (ITERA)**
*Tanggal Audit: 23 November 2026*

---

## 1. Analisis Mekanisme Data Saat Ini

Saat ini, data Learning Hub diperoleh dari **Central Hub Registry statis** di `src/data/learningHubs.ts`.

### Kelebihan Pendekatan Saat Ini:
1. **Zero Runtime Latency**: Seluruh data langsung terbundel ke dalam kode JavaScript. Tidak ada jeda pengambilan (*fetch*) jaringan saat pengguna pertama kali membuka situs.
2. **Kesesuaian Hosting Statis (100% Static Compatibility)**: Bekerja sempurna di GitHub Pages tanpa ketergantungan CORS, server API eksternal, atau token autentikasi.
3. **Ketahanan Tinggi (High Resilience)**: Tidak ada risiko kegagalan jaringan eksternal yang menyebabkan antarmuka dashboard menjadi kosong atau macet.

### Keterbatasan Pendekatan Saat Ini:
1. **Pembaruan Manual (Manual Synchronization Overhead)**: Jika suatu repositori kursus (misal `AI-Learning-Hub` atau `Signal Processing`) menambah bab baru dari 40 menjadi 45, pembaruan jumlah bab pada dashboard harus disunting secara manual pada file TypeScript.
2. **Potensi Disinkronisasi Statistik**: Jumlah bab di dashboard berisiko tertinggal dibanding repositori sumber jika penulis materi lupa memperbarui dashboard.

---

## 2. Inventaris Manifest di Repositori Sumber

Pemeriksaan aktual terhadap seluruh repositori di `D:\Workstation\Repo My Corses` mengungkapkan format manifest yang bervariasi:

| Learning Hub | Berkas Manifest Sumber | Format Data | Jumlah Bab Terdeteksi |
| :--- | :--- | :--- | :--- |
| **Python Learning Hub** | `src/curriculum/index.ts` | Objek TypeScript (`CHAPTERS[]`) | 30 Inti + 25 Spesialisasi |
| **AI Learning Hub** | `content/levels.json` & `content/level-*/chapter-*/metadata.json` | JSON multi-file | 40 Chapter (4 Level) |
| **Internet of Things** | `content/catalog.json` | JSON tunggal terpadu | 40 Chapter |
| **Multimedia & CV** | `content/curriculum/` & `scripts/generate-curriculum.mjs` | JSON + Skrip generator | 60 Bab Terencana (15 Terbit) |
| **Signal Processing** | `src/data/curriculum_metadata.json` | JSON terstruktur | 113 Bab (20 Terbit/Implemented) |
| **Remote Sensing** | `content/curriculum/master-curriculum.json` | JSON master curriculum | 28 Bab (14 Implemented) |
| **Scientific Research** | `src/data/chapters_parsed.json` & `curriculumMeta.ts` | JSON + TS Metadata | 51 Bab |

---

## 3. Strategi Integrasi Masa Depan: *Build-Time Manifest Aggregation*

Untuk menjaga dashboard tetap **100% statis** dan kompatibel dengan GitHub Pages sambil tetap terhubung dengan perkembangan bab di masing-masing kursus, kami merekomendasikan **Strategi Agregasi Waktu Kompilasi (Build-Time Data Aggregation)**.

```
[Repositori Learning Hub Masing-Masing]
   ├── Python: src/curriculum/index.ts
   ├── AI: content/levels.json
   ├── IoT: content/catalog.json
   ├── Signal Proc: src/data/curriculum_metadata.json
   ├── Remote Sensing: content/curriculum/master-curriculum.json
   └── Scientific Research: src/data/chapters_parsed.json
                         │
                         ▼
        [Skrip Agregasi Lokal Dashboard]
        `scripts/sync-ecosystem-manifests.mjs`
                         │
                         ▼ (Mengekstrak metadata tanpa mengubah file sumber)
   [src/data/learningHubs.generated.json]
                         │
                         ▼ (Fallback ke `learningHubs.ts` jika direktori tidak ada)
              [Dashboard Production Build]
                         │
                         ▼
             [Deploy ke GitHub Pages]
```

### Mekanisme Kerja:
1. **Skrip Agregator Build (`scripts/sync-ecosystem-manifests.mjs`)**:
   - Dijalankan sebelum `npm run build` (opsional saat development lokal).
   - Membaca manifest yang tersedia di folder tetangga (`D:\Workstation\Repo My Corses\*`).
   - Mengekstrak informasi kanonikal: `title`, `description`, `chaptersCount`, `status`, dan `lastUpdated`.
   - Mengompilasikan hasilnya ke dalam satu berkas `src/data/ecosystem.json`.
2. **Penyangga Aman (Fallback Graceful Degradation)**:
   - Jika dashboard dibuild di lingkungan GitHub Actions runner di mana repositori kursus lain tidak berada di folder tetangga, build script otomatis menggunakan cadangan statis `src/data/learningHubs.ts`.
   - Hal ini memastikan build di GitHub Pages tidak pernah gagal karena keterbatasan akses file lintas repositori.
3. **Pemberian Timestamp Eksplisit**:
   - Setiap entri metadata menyertakan atribut `lastSyncedAt: string` dan `sourceManifest: string` untuk transparansi audit.

---

## 4. Standar Kontrak Data Phase 2 (`src/types/integration.ts`)

File kontrak yang telah disiapkan pada dashboard mendefinisikan schema standar:

```typescript
export interface RemoteHubConfig {
  schemaVersion: '2.0';
  hubId: string;
  title: string;
  version: string;
  institution: string;
  author: string;
  category: string;
  repositoryUrl?: string;
  productionBaseUrl?: string;
  chaptersEndpoint?: string;
}

export interface RemoteChapterManifest {
  id: string | number;
  number: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  level: number | string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'published' | 'draft' | 'planned';
  estimatedHours?: number;
  tags?: string[];
  hasNotebook?: boolean;
  hasSlides?: boolean;
  hasAssignment?: boolean;
  routePath?: string;
}
```

---

## 5. Pertimbangan Keamanan & Izin (Security & Permissions)

- **Tidak Memerlukan Backend**: Arsitektur statis-pertama menghilangkan seluruh permukaan serangan backend (injeksi SQL, kerentanan otentikasi sesi, eksposur credential database).
- **Read-Only Access**: Skrip agregasi lokal hanya membaca file (*read-only*) dan dilarang keras mengubah kode sumber repositori kursus lain.
- **Tanpa Token Privat**: Seluruh data yang diekstraksi adalah kurikulum akademik terbuka (OER). Tidak ada API key berbayar atau secret token yang diperlukan untuk mengoperasikan dashboard.
