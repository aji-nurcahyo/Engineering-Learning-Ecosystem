# Kesiapan Publikasi Web (Public Website Readiness)
**Learning Hub Dashboard — Institut Teknologi Sumatera (ITERA)**
*Tanggal Audit: 23 November 2026*

---

## 1. Matriks Kesiapan Publikasi

| Aspek | Status Kesiapan | Hasil Audit & Catatan Implementasi | Rekomendasi Lanjutan |
| :--- | :--- | :--- | :--- |
| **SEO & OpenGraph** | **75% Siap** | Title, meta description, favicon SVG, dan author telah terpasang di `index.html`. | Tambahkan tag OpenGraph (`og:title`, `og:image`, `og:url`) dan Twitter Card. |
| **Routing Statis** | **100% Siap** | Hash routing (`#home`, `#hubs`, `#paths`, dll.) + skrip `public/404.html` mencegah error 404 saat refresh di GitHub Pages. | Sudah optimal untuk static hosting. |
| **Base Path Subpath** | **100% Siap** | Konfigurasi `vite.config.ts` membaca variabel lingkungan `VITE_BASE_PATH` (default `./` atau `/Learning-Hub-Dashboard/`). | Siap untuk custom domain maupun GitHub subpath. |
| **Aksesibilitas (WCAG)**| **95% Siap** | Fokus keyboard terlihat, kontras > 4.5:1, semantik HTML5 (`main`, `header`, `nav`, `section`, `footer`), `prefers-reduced-motion`. | Tambahkan skip-to-content link pada header. |
| **Tautan Eksternal** | **100% Siap** | Seluruh tautan ke luar memiliki atribut `rel="noopener noreferrer"` dan `target="_blank"`. | Aman dari kerentanan tab-nabbing. |
| **Performa & Bundle** | **95% Siap** | Ukuran gzip JS 89 KB, CSS 5.9 KB. Pemuatan instan di bawah 1 detik pada jaringan 4G. | Tambahkan preconnect font Google di `<head>`. (Sudah ada). |
| **Privasi Pengguna** | **100% Siap** | Bebas pelacak (zero trackers), bebas kuki (zero cookies), analitik pihak ketiga tidak dipasang. Bookmark hanya di `localStorage`. | Sesuai prinsip privasi akademik tertinggi. |
| **Keamanan** | **100% Siap** | Arsitektur 100% statis. Tidak ada server endpoint, tidak ada evaluasi `eval()`, tidak ada eksposur token/kunci API. | Sangat aman. |
| **Perilaku Mobile** | **95% Siap** | Tampilan mobile rapi, hamburger menu responsif, tombol sentuh ergonomis (>= 40px). | Pertahankan kesederhanaan drawer mobile. |
| **Hak Cipta & OER** | **100% Siap** | Atribusi institusi ITERA, pembuat kurikulum Aji Pamungkas Tri Nurcahyo, dan deklarasi lisensi OER terpasang jelas di Footer dan About. | Memenuhi standar etika dan hak kekayaan intelektual. |

---

## 2. Pembedaan Status Akademik vs Ketersediaan Publik

Salah satu prinsip terpenting dalam publikasi portal pendidikan adalah **Kejujuran Verifikasi (Content Honesty)**:

> *Jangan mengekspos materi atau mengklaim suatu kursus sudah daring hanya karena kodenya ada di folder lokal atau repositori privat.*

### Kebijakan Pengkategorian Status Publikasi:

1. **Status: `published` ("Tersedia di GitHub Pages")**:
   - Diberikan **HANYA** jika situs tersebut telah memiliki workflow GitHub Actions yang aktif dan situsnya dapat diakses secara publik via internet melalui URL `https://aji-nurcahyo.github.io/<Repo-Name>/`.
   - Modul yang memenuhi syarat saat ini:
     - **Python Learning Hub** (`https://aji-nurcahyo.github.io/Python-Learning-Hub/`)
     - **AI Learning Hub** (`https://aji-nurcahyo.github.io/AI-Learning-Hub/`)
2. **Status: `in-development` ("Dalam Pengembangan")**:
   - Diberikan untuk kursus yang materi atau kurikulumnya telah dirancang secara lokal, namun belum dipublikasikan atau belum memiliki domain publik yang aktif.
   - Tombol peluncuran ("Buka Learning Hub") dinonaktifkan secara visual dan fungsional agar pengunjung tidak mengalami tautan rusak (*broken link*).
   - Modul yang berada dalam status ini saat ini:
     - **Internet of Things Learning Hub** (Fondasi selesai, deployment URL disiapkan).
     - **Multimedia & Computer Vision Learning Hub** (Bab 01–15 selesai, belum di-push).
     - **Signal Processing Learning Hub** (113 bab terencana / 20 bab lokal).
     - **Remote Sensing & Geospatial Intelligence Learning Hub** (28 bab kurikulum / 14 lokal).
     - **Scientific Research & Experimental Methods** (51 bab terdaftar).

---

## 3. Checklist Sebelum Go-Live Publik

- [x] Pastikan `npm run lint` menghasilkan 0 error dan 0 warning.
- [x] Pastikan `npm run build` berhasil tanpa kesalahan kompilasi.
- [x] Pastikan file `public/.nojekyll` ada di folder publikasi `dist/`.
- [x] Pastikan `public/404.html` tersalin ke folder `dist/` untuk fallback routing statis.
- [x] Pastikan workflow `.github/workflows/deploy.yml` dikonfigurasi dengan environment `github-pages`.
- [ ] Tambahkan meta tag OpenGraph (`og:image`, `og:title`, `og:description`) untuk tampilan preview saat tautan dibagikan di media sosial atau perpesanan.
- [ ] Dapatkan persetujuan eksplisit dari pembuat kursus sebelum melakukan push git pertama kali ke repositori GitHub remote.
