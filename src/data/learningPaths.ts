import { LearningPath } from '../types/hub';

/**
 * REKOMENDASI JALUR BELAJAR LINTAS DISIPLIN (CROSS-HUB LEARNING PATHS)
 * Institut Teknologi Sumatera (ITERA)
 * 
 * Jalur rekomendasi navigasi antarmateri berdasarkan hubungan prasyarat konseptual.
 * Ini adalah panduan navigasi eksplorasi mahasiswa, BUKAN pengganti kurikulum masing-masing hub.
 * Tidak ada dead links — setiap langkah mereferensikan status ketersediaan materi secara jujur.
 */
export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'computer-vision-perception-path',
    title: 'Computer Vision & Intelligent Visual Perception',
    targetRole: 'Computer Vision Engineer / Visual Perception Specialist',
    cluster: 'Vision & Geospatial Intelligence',
    description: 'Menjembatani representasi sinyal kontinu ke diskret, transformasi spasial/frekuensi (FFT/Wavelet), hingga model deteksi objek Deep Learning modern dan Vision Transformers.',
    prerequisites: 'Kalkulus, aljabar linier, dan pemrograman Python 3',
    steps: [
      {
        hubId: 'python-learning-hub',
        stageName: 'Tahap 1: Pemrograman Ilmiah & Struktur Data Matriks',
        description: 'Kuasai manipulasi array multidimensi dengan NumPy, eksekusi memori CPython, dan penulisan skrip pemrosesan data numerik efisien.',
        targetChapters: 'Bab 01–12 (Foundations) & Modul Spesialisasi NumPy',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Python-Learning-Hub/',
        recommendedFocus: [
          'Bab 06–08: List, Tuple & Array Slicing di memori',
          'Spesialisasi: Manipulasi tensor matriks numerik efisien'
        ]
      },
      {
        hubId: 'signal-processing-learning-hub',
        stageName: 'Tahap 2: Teorema Sinyal & Transformasi Domain Frekuensi',
        description: 'Pahami teori sampling Nyquist-Shannon, konvolusi 2D, dekomposisi spektrum frekuensi dengan Discrete Fourier Transform (2D FFT), dan filtering tepi.',
        targetChapters: 'Bab C01, C05, C10, C20',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Signal-Processing-Learning-Hub/',
        recommendedFocus: [
          'Bab C05: Teorema Sampling & Anti-Aliasing Filter',
          'Bab C10: Discrete Fourier Transform & Algoritma 2D FFT',
          'Bab C20: 2D Transforms for Visual Perception'
        ]
      },
      {
        hubId: 'multimedia-cv-learning-hub',
        stageName: 'Tahap 3: Pengolahan Citra Digital & Ekstraksi Fitur Spasial',
        description: 'Terapkan konvolusi spasial (Sobel, Canny, Gaussian), manipulasi ruang warna (RGB/HSV), segmentasi Otsu, dan morfometri citra di laboratorium interaktif.',
        targetChapters: 'Section 01–03 (Bab 01–15)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Multimedia-Computer-Vision-Learning-Hub/#/chapter/11',
        recommendedFocus: [
          'Bab 07–10: Ruang Warna, Histogram & Konvolusi Spasial',
          'Bab 11–15: 2D FFT Lab, Restorasi Citra & Segmentasi Morfometri'
        ]
      },
      {
        hubId: 'ai-learning-hub',
        stageName: 'Tahap 4: Arsitektur Deep Learning untuk Visi Komputer',
        description: 'Rancang arsitektur Convolutional Neural Networks (CNN), transfer learning dengan ResNet/YOLO, hingga Vision Transformers (ViT) untuk pemahaman adegan visual.',
        targetChapters: 'Level 3 & 4 (Chapter 21–25, 36–40)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/AI-Learning-Hub/',
        recommendedFocus: [
          'Chapter 21–24: Convolutional Neural Networks & Feature Maps',
          'Chapter 38–40: Object Detection Modern & Edge AI Deployment'
        ]
      }
    ]
  },
  {
    id: 'iot-intelligent-sensing-path',
    title: 'IoT, Intelligent Sensing & Edge Computing',
    targetRole: 'IoT Systems Architect / Embedded AI Engineer',
    cluster: 'Sensing, Signals & Embedded Systems',
    description: 'Membangun sistem telemetri fisik cerdas dari transduser sensor, pengondisian sinyal analog, komunikasi protokol MQTT, hingga inferensi TinyML di mikrokontroler.',
    prerequisites: 'Dasar elektronika, logika komputasi, dan jaringan dasar',
    steps: [
      {
        hubId: 'python-learning-hub',
        stageName: 'Tahap 1: Logika Pemrograman & Skrip Komunikasi Serial',
        description: 'Pelajari penanganan I/O file terstruktur, parsing string/byte serial, penanganan exception, dan serialisasi data JSON.',
        targetChapters: 'Bab 01–10 & Bab 21–25',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Python-Learning-Hub/',
        recommendedFocus: [
          'Bab 09–10: Input/Output file & penanganan format serial',
          'Bab 21–22: Error handling terstruktur & stream processing'
        ]
      },
      {
        hubId: 'signal-processing-learning-hub',
        stageName: 'Tahap 2: Pengondisian Sinyal Sensor & Reduksi Derau',
        description: 'Kuasai konversi analog-ke-digital (ADC), kuantisasi, reduksi derau termal dengan filter FIR digital, dan estimasi spektral sinyal fisik.',
        targetChapters: 'Bab C01–C05, C15–C18',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Signal-Processing-Learning-Hub/',
        recommendedFocus: [
          'Bab C01: Siklus Akuisisi Sinyal: Transduser, Pengondisi, ADC',
          'Bab C15: Perancangan Filter Digital FIR untuk Sensor Fisik'
        ]
      },
      {
        hubId: 'iot-learning-hub',
        stageName: 'Tahap 3: Arsitektur Protokol Nirkabel & Broker Telemetri',
        description: 'Integrasikan mikrokontroler via I2C/SPI, atur komunikasi hemat daya Wi-Fi/BLE/LoRaWAN, dan transmisikan data telemetri menggunakan broker MQTT.',
        targetChapters: 'Level 1–3 (Chapter 01–30)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/IoT-Learning-Hub/',
        recommendedFocus: [
          'Level 1: Interfacing Sensor Analog & Digital',
          'Level 2: Protokol MQTT, QoS & Topik Publish/Subscribe',
          'Level 3: Edge Gateways & Ingestion Time-Series'
        ]
      },
      {
        hubId: 'ai-learning-hub',
        stageName: 'Tahap 4: Edge AI & Kuantisasi Model pada Mikrokontroler',
        description: 'Latih model klasifikasi cerdas untuk data sensor time-series, lalu lakukan kuantisasi bobot model agar dapat dieksekusi efisien di mikroprosesor berdaya rendah (TinyML).',
        targetChapters: 'Level 4 (Chapter 40)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/AI-Learning-Hub/',
        recommendedFocus: [
          'Chapter 18: Klasifikasi Sinyal Sensor Time-Series',
          'Chapter 40: Edge AI Deployment & Model Quantization'
        ]
      }
    ]
  },
  {
    id: 'remote-sensing-geospatial-path',
    title: 'Remote Sensing & Geospatial Intelligence (GEOINT)',
    targetRole: 'Earth Observation Data Scientist / Geospatial AI Specialist',
    cluster: 'Vision & Geospatial Intelligence',
    description: 'Mengintegrasikan teori fisika observasi bumi, radiometri satelit, analisis multispektral/SAR, hingga pemodelan kecerdasan geospasial berbasis AI.',
    prerequisites: 'Fisika gelombang elektromagnetik, dasar citra digital, dan Python',
    steps: [
      {
        hubId: 'python-learning-hub',
        stageName: 'Tahap 1: Analisis Data Komputasi Geospasial',
        description: 'Kuasai komputasi raster dengan NumPy, manipulasi array multidimensi satelit, dan otomatisasi workflow data spasial.',
        targetChapters: 'Bab 06–12 & Modul Spesialisasi',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Python-Learning-Hub/',
        recommendedFocus: [
          'Bab 06–08: Indexing array dan slicing data citra',
          'Spesialisasi: Penanganan file numerik volume besar'
        ]
      },
      {
        hubId: 'multimedia-cv-learning-hub',
        stageName: 'Tahap 2: Dasar Pengolahan Citra Digital & Ruang Warna',
        description: 'Pelajari manipulasi matriks piksel, kalibrasi kontras, histogram equalization, dan deteksi tepi spasial.',
        targetChapters: 'Section 01–03 (Bab 01–15)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Multimedia-Computer-Vision-Learning-Hub/#/chapter/7',
        recommendedFocus: [
          'Bab 07–09: Ruang Warna, Histogram & Kontras Dinamis',
          'Bab 13–15: Deteksi Tepi Harris/Canny & Segmentasi Citra'
        ]
      },
      {
        hubId: 'remote-sensing-hub',
        stageName: 'Tahap 3: Kalibrasi Radiometrik, Indeks Spektral & Radar SAR',
        description: 'Terapkan koreksi atmosferik BOA, ekstraksi indeks biofisik (NDVI/EVI/NDWI), serta analisis polarimetri radar gelombang mikro Synthetic Aperture Radar (SAR).',
        targetChapters: 'Level 1–3 (Bab 01–21)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Remote-Sensing-Geospatial-Intelligence-Learning-Hub/',
        recommendedFocus: [
          'Bab 01–05: Rantai Transmisi Informasi & Sensor Optik Satelit',
          'Bab 09–14: Koreksi Radiometrik & Analisis Indeks Spektral',
          'Bab 21: Prinsip Hamburan Balik & Polarimetri Radar SAR'
        ]
      },
      {
        hubId: 'ai-learning-hub',
        stageName: 'Tahap 4: Geospatial Deep Learning & GEOINT Analytics',
        description: 'Gunakan Convolutional Neural Networks dan model segmentasi semantik (U-Net) untuk klasifikasi tutupan lahan satelit otomatis dan deteksi anomali geospasial.',
        targetChapters: 'Level 3 & 4 (Chapter 21–25, 36–40)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/AI-Learning-Hub/',
        recommendedFocus: [
          'Chapter 21–24: CNN Feature Representation untuk Citra Multiband',
          'Chapter 36: Segmentasi Semantik untuk Pemetaan Citra Satelit'
        ]
      }
    ]
  },
  {
    id: 'signal-processing-foundations-path',
    title: 'Signal Processing & Scientific Systems Foundations',
    targetRole: 'Signal Processing Engineer / Telecommunication Systems Analyst',
    cluster: 'Sensing, Signals & Embedded Systems',
    description: 'Menyelami pemodelan matematis sinyal dan sistem linier waktu-diskret, transformasi integral (Fourier, Laplace, Z), perancangan filter FIR/IIR, dan estimasi spektral stokastik.',
    prerequisites: 'Kalkulus integral, variabel kompleks, dan dasar pemrograman',
    steps: [
      {
        hubId: 'python-learning-hub',
        stageName: 'Tahap 1: Fondasi Komputasi & Modularitas Kode',
        description: 'Bangun penguasaan penulisan fungsi matematika murni, struktur perulangan cepat, dan pengujian otomatis berbasis pytest.',
        targetChapters: 'Bab 01–20',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Python-Learning-Hub/',
        recommendedFocus: [
          'Bab 11–12: Pembuatan fungsi komputasi ilmiah',
          'Bab 18–20: Pengujian unit otomatis (pytest) untuk algoritma numerik'
        ]
      },
      {
        hubId: 'signal-processing-learning-hub',
        stageName: 'Tahap 2: Sinyal Diskret, Konvolusi Linier & Transformasi Z',
        description: 'Analisis sifat linear time-invariant (LTI), respon impuls, stabilitas sistem di bidang Z, dan representasi pole-zero.',
        targetChapters: 'Pilar 1 (Bab C01–C10)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Signal-Processing-Learning-Hub/',
        recommendedFocus: [
          'Bab C01–C04: Sinyal Waktu-Diskret & Konvolusi Matematis',
          'Bab C06–C09: Analisis Sistem LTI & Transformasi Z'
        ]
      },
      {
        hubId: 'signal-processing-learning-hub',
        stageName: 'Tahap 3: Perancangan Filter Digital & Transformasi Frekuensi',
        description: 'Rancang filter digital FIR fase-linier dan filter IIR eliptik/Butterworth menggunakan transformasi bilinear serta optimasi windowing.',
        targetChapters: 'Pilar 2 & 3 (Bab C11–C25)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Signal-Processing-Learning-Hub/',
        recommendedFocus: [
          'Bab C10–C14: Algoritma Radix-2 FFT & Spektrogram Waktu-Frekuensi',
          'Bab C15–C19: Desain Filter FIR/IIR Standar Industri'
        ]
      }
    ]
  },
  {
    id: 'scientific-research-phd-path',
    title: 'Scientific Research Methodology & PhD Preparation',
    targetRole: 'Academic Researcher / Doctoral Candidate / R&D Scientist',
    cluster: 'Scientific Research & Methodology',
    description: 'Panduan sistematis merumuskan novelty riset rekayasa, merancang eksperimen empiris terkontrol, menguji hipotesis statistika, menyusun manuskrip jurnal Q1, dan menavigasi proses peer-review.',
    prerequisites: 'Statistika probabilitas dasar dan kemampuan membaca literatur ilmiah',
    steps: [
      {
        hubId: 'scientific-research-hub',
        stageName: 'Tahap 1: Epistemologi Riset & Identifikasi Research Gap',
        description: 'Pelajari perbedaan sains vs rekayasa, metode induktif/deduktif, pemetaan literatur ilmiah sistematis (SLR), dan formulasi novelty.',
        targetChapters: 'Pilar 1 (Bab 01–10)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Scientific-Research-Experimental-Methods-Learning-Hub/',
        recommendedFocus: [
          'Bab 01–03: Metode Ilmiah & Taksonomi Kontribusi Riset',
          'Bab 07–10: Systematic Literature Review & State-of-the-Art Mapping'
        ]
      },
      {
        hubId: 'scientific-research-hub',
        stageName: 'Tahap 2: Desain Eksperimen Kuantitatif & Validasi Empiris',
        description: 'Rancang eksperimen terkontrol, randomisasi sampel, mitigasi bias, dan pengujian statistika inferensial (ANOVA, t-test, regresi linier multivariat).',
        targetChapters: 'Pilar 2 & 3 (Bab 11–30)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Scientific-Research-Experimental-Methods-Learning-Hub/',
        recommendedFocus: [
          'Bab 12–15: Kontrol Variabel, Validitas Internal & Eksternal',
          'Bab 21–25: Uji Signifikansi Statistik, Nilai-p & Effect Size'
        ]
      },
      {
        hubId: 'python-learning-hub',
        stageName: 'Tahap 3: Komputasi Statistik & Reproducibility Pipeline',
        description: 'Bangun script otomatisasi pemrosesan dataset, pengujian hipotesis dengan SciPy/Statsmodels, dan visualisasi data standar publikasi ilmiah.',
        targetChapters: 'Modul Spesialisasi Python Scientific Toolchain',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Python-Learning-Hub/',
        recommendedFocus: [
          'Spesialisasi: Eksekusi komputasi saintifik terverifikasi',
          'Automated validation scripts untuk reproduktibilitas hasil'
        ]
      },
      {
        hubId: 'scientific-research-hub',
        stageName: 'Tahap 4: Penulisan Manuskrip Jurnal Q1 & Peer-Review Strategy',
        description: 'Susun manuskrip berstruktur IMRaD berstandar IEEE/Elsevier, tulis rebuttal letter tangguh untuk reviewer, dan siapkan proposal riset doktoral.',
        targetChapters: 'Pilar 4 & 5 (Bab 31–51)',
        availabilityStatus: 'Tersedia Daring',
        directLink: 'https://aji-nurcahyo.github.io/Scientific-Research-Experimental-Methods-Learning-Hub/',
        recommendedFocus: [
          'Bab 31–36: Penulisan Title, Abstract, Results & Discussion Jurnal Q1',
          'Bab 41–46: Navigasi Peer-Review, Respon Reviewer & Proposal Doktoral'
        ]
      }
    ]
  }
];
