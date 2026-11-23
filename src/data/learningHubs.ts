import { LearningHubMetadata, AcademicCluster } from '../types/hub';

/**
 * CENTRAL HUB REGISTRY — ENGINEERING LEARNING ECOSYSTEM
 * S1 Teknik Telekomunikasi, Institut Teknologi Sumatera (ITERA)
 * Research Umbrella: Intelligent Sensing, Vision and Wireless Systems (ISVWS) 2026–2040
 * Core Expertise: Intelligent Computer Vision
 * Creator: Aji Pamungkas Tri Nurcahyo
 * 
 * Single Source of Truth untuk seluruh katalog Learning Hub.
 * Membedakan secara transparan antara:
 * - plannedChapters: Total bab terencana pada kurikulum kanonikal
 * - implementedChapters: Bab yang telah ditulis/dikembangkan di kode sumber
 * - contentPublishedChapters: Bab yang materi akademiknya telah terbit di repositori
 * - onlineAccessibleChapters: Bab yang aktif dan dapat diakses publik via GitHub Pages
 */
export const LEARNING_HUBS: LearningHubMetadata[] = [
  {
    id: 'python-learning-hub',
    title: 'Python Learning Hub',
    slug: 'python',
    tagline: 'Learn Python, One Chapter at a Time',
    description: 'Koleksi modul interaktif pemrograman Python 3, presentasi slide berbasis browser, 309 program contoh teruji interpreter CPython, kuis konseptual, dan proyek capstone.',
    cluster: 'Computing & Artificial Intelligence',
    category: 'Programming',
    iconName: 'Terminal',
    deploymentStatus: 'deployed',
    status: 'published',
    statusLabel: 'Tersedia di GitHub Pages',
    websiteUrl: 'https://aji-nurcahyo.github.io/Python-Learning-Hub/',
    repositoryUrl: 'https://github.com/aji-nurcahyo/Python-Learning-Hub',
    metrics: {
      plannedChapters: 55,
      implementedChapters: 55,
      contentPublishedChapters: 55,
      onlineAccessibleChapters: 30, // 30 Core chapters di web, 25 modul spesialisasi via repo
      verifiedExamplesCount: 309,
      slideDecksCount: 30,
    },
    plannedChaptersCount: 55,
    implementedChaptersCount: 55,
    publishedChaptersCount: 30,
    chaptersCount: 30,
    chaptersBreakdown: '30 Core Chapter Daring + 25 Modul Spesialisasi (Total 55 Modul)',
    topics: [
      'Python 3 Fundamentals',
      'Algoritma & Struktur Data',
      'Object-Oriented Programming (OOP)',
      'Automated Testing (pytest)',
      'Data Science & Capstone Projects'
    ],
    features: {
      hasSlides: true,
      hasNotebooks: true,
      hasInteractiveLabs: false,
      hasResearchTrack: false,
      hasAssessments: true,
    },
    provenance: {
      sourceManifest: 'Alpro-python/src/curriculum/index.ts',
      sourceRevision: 'v2.1.0',
      lastSynchronizedAt: '2026-11-23',
      verificationNotes: '30 bab inti terpublikasi aktif di GitHub Pages; 309 script contoh lulus verifikasi CPython 3.12.'
    },
    featured: true,
    lastUpdated: 'November 2026',
    levelStructure: [
      'Level 1: Foundations (Bab 01–12)',
      'Level 2: Intermediate & OOP (Bab 13–22)',
      'Level 3: Professional & Architecture (Bab 23–30)',
      'Spesialisasi: 5 Domain Terapan Lanjutan (25 Modul)'
    ],
    keyCompetencies: [
      'Siklus eksekusi CPython, alokasi memori, dan manajemen bytecode',
      'Desain algoritma terstruktur dan analisis kompleksitas Big-O',
      'Pola desain Object-Oriented Programming (OOP) standar industri',
      'Pengujian otomatis berbasis pytest dan penerapan gaya kode PEP 8'
    ],
    prerequisites: ['Logika matematika dasar', 'Kemampuan membaca bahasa Inggris teknis'],
    chaptersPreview: [
      { number: '01', title: 'Introduction to Python', focus: 'Filosofi, Ekosistem & Eksekusi Program Pertama', status: 'published' },
      { number: '06', title: 'Data Structures: List & Tuple', focus: 'Alokasi Memori, Mutability & Slicing', status: 'published' },
      { number: '13', title: 'Object-Oriented Programming', focus: 'Class, Instance, Magic Methods & Abstraksi', status: 'published' },
      { number: '23', title: 'Decorators & Generators', focus: 'First-Class Functions, Closures & Memory Streaming', status: 'published' },
      { number: '30', title: 'Capstone Project Integration', focus: 'Arsitektur Aplikasi & Packaging Standar Industri', status: 'published' }
    ]
  },
  {
    id: 'ai-learning-hub',
    title: 'AI Learning Hub',
    slug: 'ai',
    tagline: 'From AI Fundamentals to Intelligent Systems',
    description: 'Platform kurikulum komputasi cerdas terpadu mencakup algoritma pencarian, Machine Learning klasik, Deep Learning, Computer Vision, Generative AI & Large Language Models, hingga Edge AI.',
    cluster: 'Computing & Artificial Intelligence',
    category: 'Artificial Intelligence',
    iconName: 'Brain',
    deploymentStatus: 'deployed',
    status: 'published',
    statusLabel: 'Tersedia di GitHub Pages',
    websiteUrl: 'https://aji-nurcahyo.github.io/AI-Learning-Hub/',
    repositoryUrl: 'https://github.com/aji-nurcahyo/AI-Learning-Hub',
    metrics: {
      plannedChapters: 40,
      implementedChapters: 40,
      contentPublishedChapters: 40,
      onlineAccessibleChapters: 40,
      slideDecksCount: 40,
      interactiveLabsCount: 5,
    },
    plannedChaptersCount: 40,
    implementedChaptersCount: 40,
    publishedChaptersCount: 40,
    chaptersCount: 40,
    chaptersBreakdown: '40 Chapter Akademik Daring (4 Level) + 5 Jalur Spesialisasi',
    topics: [
      'Search & Problem Solving',
      'Machine Learning Klasik',
      'Deep Learning & Neural Networks',
      'Computer Vision & NLP',
      'LLM & Edge AI Deployment'
    ],
    features: {
      hasSlides: true,
      hasNotebooks: true,
      hasInteractiveLabs: false,
      hasResearchTrack: true,
      hasAssessments: true,
    },
    provenance: {
      sourceManifest: 'Kecerdasan Buatan/content/levels.json',
      sourceRevision: 'v0.1.0 (commit main)',
      lastSynchronizedAt: '2026-11-23',
      verificationNotes: '40 chapter akademik aktif di GitHub Pages dengan routing hash #/chapter/{id}.'
    },
    featured: true,
    lastUpdated: 'November 2026',
    levelStructure: [
      'Level 1: AI Fundamentals (Chapter 01–10)',
      'Level 2: Machine Learning Core (Chapter 11–20)',
      'Level 3: Deep Learning Systems (Chapter 21–30)',
      'Level 4: Advanced AI & Deployment (Chapter 31–40)'
    ],
    keyCompetencies: [
      'Perumusan ruang keadaan (state space) dan algoritma search heuristik',
      'Pemodelan matematis Supervised & Unsupervised Machine Learning',
      'Perancangan Convolutional Neural Networks (CNN) & arsitektur Transformer',
      'Kuantisasi dan deployment model AI pada perangkat edge terbatas sumber daya'
    ],
    prerequisites: ['Pemrograman Python 3', 'Aljabar linear & kalkulus dasar'],
    chaptersPreview: [
      { number: '01', title: 'Introduction to Artificial Intelligence', focus: 'Definisi Agen Cerdas, Sejarah & Paradigma Komputasi', status: 'published' },
      { number: '11', title: 'Supervised Learning Foundations', focus: 'Linear & Logistic Regression, Gradient Descent', status: 'published' },
      { number: '21', title: 'Convolutional Neural Networks', focus: 'Feature Maps, Konvolusi, Pooling & Klasifikasi Citra', status: 'published' },
      { number: '31', title: 'Natural Language Processing & LLM', focus: 'Attention Mechanism, Self-Attention & Transformers', status: 'published' },
      { number: '40', title: 'Edge AI Deployment & Quantization', focus: 'Optimasi Model Komputasi untuk Perangkat Tepi', status: 'published' }
    ]
  },
  {
    id: 'iot-learning-hub',
    title: 'Internet of Things Learning Hub',
    slug: 'iot',
    tagline: 'From Connected Devices to Intelligent Systems',
    description: 'Perpustakaan modul pembelajaran sistem IoT terbuka, mencakup sensor, mikrokontroler, embedded programming, protokol MQTT, integrasi cloud, dan pipeline telemetri real-time.',
    cluster: 'Sensing, Signals & Embedded Systems',
    category: 'Internet of Things',
    iconName: 'Cpu',
    deploymentStatus: 'deployed',
    status: 'published',
    statusLabel: 'Tersedia di GitHub Pages (Fondasi)',
    websiteUrl: 'https://aji-nurcahyo.github.io/IoT-Learning-Hub/',
    repositoryUrl: 'https://github.com/aji-nurcahyo/IoT-Learning-Hub',
    metrics: {
      plannedChapters: 40,
      implementedChapters: 40,
      contentPublishedChapters: 40,
      onlineAccessibleChapters: 40,
      slideDecksCount: 40,
    },
    plannedChaptersCount: 40,
    implementedChaptersCount: 40,
    publishedChaptersCount: 40,
    chaptersCount: 40,
    chaptersBreakdown: '40 Chapter Fondasi Daring (Level 1–4) + Panduan Lab Praktis',
    topics: [
      'Embedded Systems & Sensors',
      'Wireless Protocols & Networking',
      'MQTT & Telemetry Broker',
      'Edge Computing & Gateways',
      'Industrial & Smart City IoT'
    ],
    features: {
      hasSlides: true,
      hasNotebooks: false,
      hasInteractiveLabs: false,
      hasResearchTrack: false,
      hasAssessments: false,
    },
    provenance: {
      sourceManifest: 'Internet Of Things/content/catalog.json',
      sourceRevision: 'v0.1.0',
      lastSynchronizedAt: '2026-11-23',
      verificationNotes: 'Fondasi kurikulum 40 chapter terbit daring di GitHub Pages dengan prinsip kejujuran verifikasi hardware.'
    },
    featured: false,
    lastUpdated: 'November 2026',
    levelStructure: [
      'Level 1: Hardware & Sensor Interfaces (Chapter 01–10)',
      'Level 2: Connectivity & Network Protocols (Chapter 11–20)',
      'Level 3: Cloud Ingestion & Edge Gateways (Chapter 21–30)',
      'Level 4: Applied IoT Architecture (Chapter 31–40)'
    ],
    keyCompetencies: [
      'Interfacing sensor analog dan digital (GPIO, I2C, SPI, UART)',
      'Protokol komunikasi nirkabel hemat daya (Wi-Fi, BLE, LoRaWAN, MQTT)',
      'Arsitektur broker telemetri dan integrasi time-series database',
      'Eksekusi logika inferensi tepi (Edge Computing) secara andal'
    ],
    prerequisites: ['Pemrograman dasar (Python / C / C++)', 'Dasar elektronika & rangkaian listrik'],
    chaptersPreview: [
      { number: '01', title: 'Introduction to IoT Architecture', focus: 'Topologi Jaringan, SoC & Siklus Hidup Sensor', status: 'published' },
      { number: '12', title: 'Lightweight Messaging with MQTT', focus: 'QoS, Publish/Subscribe, Broker Setup & Security', status: 'published' },
      { number: '24', title: 'Cloud Telemetry & Time-Series DB', focus: 'Data Ingestion Pipeline & Real-Time Storage', status: 'published' },
      { number: '35', title: 'Edge AI on Microcontrollers', focus: 'TinyML, Sensor Inference & Power Budgeting', status: 'published' }
    ]
  },
  {
    id: 'multimedia-cv-learning-hub',
    title: 'Multimedia & Computer Vision Learning Hub',
    slug: 'multimedia-cv',
    tagline: 'From Digital Media to Intelligent Visual & Audio Systems',
    description: 'Platform kurikulum akademik mendalam yang menjembatani sinyal multimedia digital (citra, audio, video) menuju visi komputer modern, arsitektur CNN, dan multimodal intelligence.',
    cluster: 'Vision & Geospatial Intelligence',
    category: 'Multimedia & Computer Vision',
    iconName: 'Eye',
    deploymentStatus: 'deployed',
    status: 'published',
    statusLabel: 'Tersedia di GitHub Pages',
    websiteUrl: 'https://aji-nurcahyo.github.io/Multimedia-Computer-Vision-Learning-Hub/',
    repositoryUrl: 'https://github.com/aji-nurcahyo/Multimedia-Computer-Vision-Learning-Hub',
    metrics: {
      plannedChapters: 60,
      implementedChapters: 60,
      contentPublishedChapters: 60,
      onlineAccessibleChapters: 60, // 60 chapters aktif di router daring, Bab 01-15 dengan lab lengkap
      interactiveLabsCount: 18,
      slideDecksCount: 60,
    },
    plannedChaptersCount: 60,
    implementedChaptersCount: 60,
    publishedChaptersCount: 60,
    chaptersCount: 60,
    chaptersBreakdown: '60 Bab Terbit Daring (12 Seksi Keilmuan) · 18 Laboratorium Klien Interaktif',
    topics: [
      'Digital Image Processing',
      'Spatial & Frequency Filters (2D FFT)',
      'Audio & Speech Processing',
      'Video Processing & Tracking',
      'Computer Vision & Deep Learning',
      'Multimodal Vision-Language'
    ],
    features: {
      hasSlides: true,
      hasNotebooks: false,
      hasInteractiveLabs: true,
      hasResearchTrack: true,
      hasAssessments: true,
    },
    provenance: {
      sourceManifest: 'Multimedia & Computer Vision/content/curriculum/master-curriculum.json',
      sourceRevision: 'v1.1.0 (commit main)',
      lastSynchronizedAt: '2026-11-23',
      verificationNotes: 'Repositori publik aktif; 60 folder bab terverifikasi; Bab 01–15 lengkap dengan 18 simulator lab.'
    },
    featured: true,
    lastUpdated: 'November 2026',
    levelStructure: [
      'Section 01–03: Fondasi & Pengolahan Citra Digital (Bab 01–15 · Lab Interaktif)',
      'Section 04–05: Pemrosesan Audio & Sinyal Suara (Bab 16–25)',
      'Section 06–07: Pemrosesan Video & Pelacakan Objek (Bab 26–35)',
      'Section 08–10: Rekayasa Visi Komputer & CNN (Bab 36–50)',
      'Section 11–12: Multimodal AI & Edge Vision (Bab 51–60)'
    ],
    keyCompetencies: [
      'Representasi matriks piksel, ruang warna (RGB, HSV, Lab) & sampling',
      'Transformasi domain frekuensi (2D Discrete Fourier Transform / FFT)',
      'Ekstraksi fitur citra spasial, konvolusi, dan segmentasi morfologi',
      'Model deteksi objek modern dan multimodal vision transformers'
    ],
    prerequisites: ['Pemrograman Python 3', 'Matriks, kalkulus, dan pemrosesan sinyal dasar'],
    chaptersPreview: [
      { number: '01', title: 'Introduction to Multimedia & CV', focus: 'Taksonomi Media Digital, Sampling & Rantai Komputasi', status: 'published' },
      { number: '07', title: 'Ruang Warna & Konversi Kanal', focus: 'RGB, Grayscale, HSV, YCbCr & Segmentasi Warna', status: 'published' },
      { number: '10', title: 'Konvolusi Spasial & Filter Linear/Nonlinear', focus: 'Kernel Konvolusi, Gaussian, Sobel, Median', status: 'published' },
      { number: '11', title: 'Domain Frekuensi & 2D FFT', focus: 'Spektrum Fourier, Low-Pass & High-Pass Filtering', status: 'published' },
      { number: '15', title: 'Segmentasi Citra & Analisis Morfometri', focus: 'Metode Otsu, Connected Component Labelling', status: 'published' }
    ]
  },
  {
    id: 'signal-processing-learning-hub',
    title: 'Signal Processing Learning Hub',
    slug: 'signal-processing',
    tagline: 'From Signals & Systems to Intelligent Visual Perception',
    description: 'Platform kurikulum komputasi pemrosesan sinyal fisik, transformasi domain spasial dan frekuensi (Fourier/Wavelet), konvolusi matematis, rekonstruksi sinyal berderau, hingga fondasi persepsi visual cerdas.',
    cluster: 'Sensing, Signals & Embedded Systems',
    category: 'Signal Processing',
    iconName: 'Activity',
    deploymentStatus: 'local-only',
    status: 'in-development',
    statusLabel: 'Pengembangan Lokal (28 Bab Terbit)',
    websiteUrl: undefined,
    repositoryUrl: 'https://github.com/aji-nurcahyo/Signal-Processing-Learning-Hub.git',
    metrics: {
      plannedChapters: 113,
      implementedChapters: 28,
      contentPublishedChapters: 28,
      onlineAccessibleChapters: 0, // Belum dipublikasikan ke remote GitHub Pages
      slideDecksCount: 115,
    },
    plannedChaptersCount: 113,
    implementedChaptersCount: 28,
    publishedChaptersCount: 28,
    chaptersCount: 28,
    chaptersBreakdown: '113 Bab Terencana (4 Pilar Kurikulum) · 28 Bab Terimplementasi Lokal (115 Slide Pelajaran)',
    topics: [
      'Discrete-Time Signals & Systems',
      'Fourier Transforms (DFT / 2D FFT)',
      'Z-Transform & Filter Design (FIR/IIR)',
      'Statistical Signal Processing',
      'Wavelet Transforms & Multirate'
    ],
    features: {
      hasSlides: true,
      hasNotebooks: true,
      hasInteractiveLabs: false,
      hasResearchTrack: true,
      hasAssessments: true,
    },
    provenance: {
      sourceManifest: 'Signal Processing/src/data/curriculum_metadata.json',
      sourceRevision: 'v1.0.0-rc (local)',
      lastSynchronizedAt: '2026-11-23',
      verificationNotes: 'Repositori GitHub resmi terdaftar (belum memiliki source code publik / deployment daring); 28 bab terimplementasi di direktori lokal dengan 115 slide deck HTML siap saji.'
    },
    featured: false,
    lastUpdated: 'November 2026',
    levelStructure: [
      'Pilar 1: Discrete-Time Signal Foundations (Bab C01–C28)',
      'Pilar 2: Transform Analysis & Linear Systems (Bab C29–C56)',
      'Pilar 3: Digital Filter Design & Stochastic Signals (Bab C57–C84)',
      'Pilar 4: Intelligent Signal Perception & Machine Vision (Bab C85–C113)'
    ],
    keyCompetencies: [
      'Representasi matematis sinyal kontinu vs diskret dan konvolusi linier',
      'Analisis domain frekuensi menggunakan DFT, Radix-2 FFT, dan Z-Transform',
      'Perancangan filter digital FIR (Windowing) dan IIR (Bilinear Transformation)',
      'Penerapan analisis spektral untuk pra-pemrosesan model penglihatan cerdas'
    ],
    prerequisites: ['Kalkulus diferensial & integral', 'Aljabar matriks', 'Pemrograman Python (NumPy)'],
    chaptersPreview: [
      { number: 'C01', title: 'Introduction to Signal Processing', focus: 'Taksonomi Sinyal Fisik, Siklus Akuisisi & Peran AI', status: 'implemented' },
      { number: 'C05', title: 'Sampling Theorem & Aliasing', focus: 'Nyquist-Shannon Rate, Anti-Aliasing Filter & Rekonstruksi', status: 'implemented' },
      { number: 'C10', title: 'Discrete Fourier Transform & FFT', focus: 'Dekomposisi Spektrum Frekuensi, Kompleksitas O(N log N)', status: 'implemented' },
      { number: 'C15', title: 'FIR Filter Design', focus: 'Linear-Phase Systems, Windowing Method & Parks-McClellan', status: 'implemented' },
      { number: 'C20', title: '2D Transforms for Visual Perception', focus: '2D DFT untuk Ekstraksi Fitur Citra & Tepi Objek', status: 'implemented' }
    ]
  },
  {
    id: 'remote-sensing-hub',
    title: 'Remote Sensing & Geospatial Intelligence Learning Hub',
    slug: 'remote-sensing',
    tagline: 'Earth Observation, Satellite Imagery & Geospatial AI',
    description: 'Platform kurikulum penginderaan jauh akademik dari hukum radiasi elektromagnetik, fotogrametri, koreksi radiometrik/atmosferik, analisis multispektral/SAR, hingga kecerdasan geospasial (GEOINT) berbasis AI.',
    cluster: 'Vision & Geospatial Intelligence',
    category: 'Remote Sensing & Geospatial',
    iconName: 'Globe',
    deploymentStatus: 'local-only',
    status: 'in-development',
    statusLabel: 'Pengembangan Lokal (23 Bab Terbit)',
    websiteUrl: undefined,
    repositoryUrl: 'https://github.com/aji-nurcahyo/Remote-sensing-Geospatial-intelligent-Learning-Hub',
    metrics: {
      plannedChapters: 28,
      implementedChapters: 23,
      contentPublishedChapters: 23,
      onlineAccessibleChapters: 0, // Belum dipublikasikan ke remote GitHub Pages
      slideDecksCount: 23,
      interactiveLabsCount: 2,
    },
    plannedChaptersCount: 28,
    implementedChaptersCount: 23,
    publishedChaptersCount: 23,
    chaptersCount: 23,
    chaptersBreakdown: '28 Bab Terencana (4 Level / 8 Seksi) · 23 Bab Terimplementasi Lokal (23 Slide Decks + 2 Lab)',
    topics: [
      'Electromagnetic Radiation & Earth Observation',
      'Multispectral & Hyperspectral Imagery',
      'Synthetic Aperture Radar (SAR)',
      'Atmospheric & Radiometric Correction',
      'Geospatial Deep Learning & GEOINT'
    ],
    features: {
      hasSlides: true,
      hasNotebooks: true,
      hasInteractiveLabs: true,
      hasResearchTrack: true,
      hasAssessments: false,
    },
    provenance: {
      sourceManifest: 'Remote Sensing & Geospatial Intelligence/content/curriculum/master-curriculum.json',
      sourceRevision: 'v0.1.0 (local)',
      lastSynchronizedAt: '2026-11-23',
      verificationNotes: 'Repositori GitHub terdaftar (belum memiliki deployment daring); 23 bab terstruktur dengan 23 slide deck dan 2 simulator lab interaktif.'
    },
    featured: false,
    lastUpdated: 'November 2026',
    levelStructure: [
      'Level 1: Physical Foundations & Sensor Systems (Bab 01–07)',
      'Level 2: Image Preprocessing & Radiometric Calibration (Bab 08–14)',
      'Level 3: Feature Extraction & Multispectral Indices (Bab 15–21)',
      'Level 4: Advanced Geospatial Intelligence & SAR (Bab 22–28)'
    ],
    keyCompetencies: [
      'Karakterisasi spektral tanda tangan vegetasi, air, dan tutupan lahan',
      'Kalibrasi radiometrik, koreksi geometrik ortorektifikasi, dan atmosferik (DOS/6S)',
      'Ekstraksi indeks vegetasi (NDVI, EVI, NDWI) dan klasifikasi tutupan lahan',
      'Integrasi citra optik & SAR dengan model Convolutional Neural Networks'
    ],
    prerequisites: ['Fisika gelombang elektromagnetik', 'Pemrosesan citra digital dasar', 'Python'],
    chaptersPreview: [
      { number: '01', title: 'Pengantar Observasi Bumi & GEOINT', focus: 'Rantai Transmisi Informasi, Sensor Aktif vs Pasif', status: 'implemented' },
      { number: '05', title: 'Sistem Sensor Multispektral Satelit', focus: 'Landsat, Sentinel-2, Modis & Resolusi Spasial/Spektral', status: 'implemented' },
      { number: '09', title: 'Koreksi Atmosferik & Radiometrik', focus: 'Top-of-Atmosphere (TOA) ke Bottom-of-Atmosphere (BOA)', status: 'implemented' },
      { number: '14', title: 'Analisis Indeks Spektral Biofisik', focus: 'NDVI, SAVI, NDWI & Estimasi Biomassa Permukaan', status: 'implemented' },
      { number: '21', title: 'Prinsip Synthetic Aperture Radar (SAR)', focus: 'Hamburan Balik Radar, Polarimetri & Speckle Filtering', status: 'implemented' }
    ]
  },
  {
    id: 'scientific-research-hub',
    title: 'Scientific Research & Experimental Methods Learning Hub',
    slug: 'scientific-research',
    tagline: 'Rigorous Methodology, Academic Writing & PhD Preparation',
    description: 'Platform kurikulum metodologi penelitian ilmiah rekayasa, perumusan hipotesis, desain eksperimen kuantitatif, analisis statistika inferensial, penulisan artikel jurnal Q1, dan persiapan studi doktoral.',
    cluster: 'Scientific Research & Methodology',
    category: 'Scientific Research & Methodology',
    iconName: 'FlaskConical',
    deploymentStatus: 'local-only',
    status: 'in-development',
    statusLabel: 'Pengembangan Lokal (51 Bab Terbit)',
    websiteUrl: undefined,
    repositoryUrl: 'https://github.com/aji-nurcahyo/Scientific-Research-Experimental-Methods-Learning-Hub',
    metrics: {
      plannedChapters: 51,
      implementedChapters: 51,
      contentPublishedChapters: 51,
      onlineAccessibleChapters: 0, // Belum dipublikasikan ke remote GitHub Pages
      researchTemplatesCount: 10,
      interactiveLabsCount: 15,
    },
    plannedChaptersCount: 51,
    implementedChaptersCount: 51,
    publishedChaptersCount: 51,
    chaptersCount: 51,
    chaptersBreakdown: '51 Bab Akademik Terbit Lokal (5 Pilar Metodologi) · 15 Lab Komputasi + 10 Templat Riset',
    topics: [
      'Philosophy of Science & Research Design',
      'Quantitative & Statistical Experimentation',
      'Data Analysis & Empirical Validation',
      'Q1 Journal Article Drafting & LaTeX',
      'Research Ethics, Peer Review & PhD Proposals'
    ],
    features: {
      hasSlides: true,
      hasNotebooks: false,
      hasInteractiveLabs: true,
      hasResearchTrack: true,
      hasAssessments: true,
    },
    provenance: {
      sourceManifest: 'Scientific Research & Experimental Methods/src/data/chapters_parsed.json',
      sourceRevision: 'v2.0.0 (local)',
      lastSynchronizedAt: '2026-11-23',
      verificationNotes: 'Repositori GitHub terdaftar (belum memiliki deployment daring); 51 file bab lengkap di src/lessons/ dengan 15 modul laboratorium komputasi dan 10 templat riset.'
    },
    featured: false,
    lastUpdated: 'November 2026',
    levelStructure: [
      'Pilar 1: Epistemologi & Perumusan Masalah Riset (Bab 01–10)',
      'Pilar 2: Desain Eksperimen & Validitas Data (Bab 11–20)',
      'Pilar 3: Statistika Inferensial & Uji Hipotesis (Bab 21–30)',
      'Pilar 4: Penulisan Manuskrip Ilmiah Standar IEEE/Elsevier (Bab 31–40)',
      'Pilar 5: Peer Review, Diseminasi & Proposal Doktoral (Bab 41–51)'
    ],
    keyCompetencies: [
      'Identifikasi research gap dan perumusan novelty riset rekayasa',
      'Desain eksperimen terkontrol (ANOVA, t-test, regresi multivariat)',
      'Strukturisasi artikel ilmiah standar IMRaD dan penyusunan argumen saintifik',
      'Manajemen sitasi, respon reviewer jurnal, dan etika integritas akademik'
    ],
    prerequisites: ['Statistika probabilitas dasar', 'Kemampuan membaca literatur ilmiah bahasa Inggris'],
    chaptersPreview: [
      { number: '01', title: 'Fondasi Riset Ilmiah & Tradisi Rekayasa', focus: 'Metode Ilmiah, Penalaran Deduktif-Induktif & Novelty', status: 'implemented' },
      { number: '12', title: 'Desain Eksperimen & Kontrol Variabel', focus: 'Randomisasi, Replikasi, Validitas Internal & Eksternal', status: 'implemented' },
      { number: '22', title: 'Statistika Inferensial & Pengujian Hipotesis', focus: 'Nilai p, Confidence Intervals, Koreksi Bonferroni', status: 'implemented' },
      { number: '34', title: 'Anatomi Manuskrip Jurnal Q1', focus: 'Title, Abstract, Results & Discussion Berstandar Tinggi', status: 'implemented' },
      { number: '45', title: 'Proses Peer-Review & Strategi Respon Reviewer', focus: 'Rebuttal Letter, Etika Penulisan & Komunikasi Ilmiah', status: 'implemented' }
    ]
  }
];

export const ACADEMIC_CLUSTERS: (AcademicCluster | 'Semua Klaster')[] = [
  'Semua Klaster',
  'Computing & Artificial Intelligence',
  'Sensing, Signals & Embedded Systems',
  'Vision & Geospatial Intelligence',
  'Scientific Research & Methodology'
];

export const CATEGORIES = [
  'Semua Kategori',
  'Programming',
  'Artificial Intelligence',
  'Internet of Things',
  'Signal Processing',
  'Multimedia & Computer Vision',
  'Remote Sensing & Geospatial',
  'Scientific Research & Methodology'
] as const;

// Metrik ringkasan terverifikasi riil di seluruh ekosistem (Satuan terpisah tanpa agregat rancu)
export const OVERVIEW_STATS = {
  totalHubs: LEARNING_HUBS.length,
  totalClusters: 4,
  deployedHubsCount: LEARNING_HUBS.filter(h => h.deploymentStatus === 'deployed').length,
  localOnlyHubsCount: LEARNING_HUBS.filter(h => h.deploymentStatus === 'local-only').length,
  totalPlannedChapters: LEARNING_HUBS.reduce((acc, h) => acc + h.metrics.plannedChapters, 0),
  totalImplementedChapters: LEARNING_HUBS.reduce((acc, h) => acc + h.metrics.implementedChapters, 0),
  totalOnlineAccessibleChapters: LEARNING_HUBS.reduce((acc, h) => acc + h.metrics.onlineAccessibleChapters, 0),
  totalVerifiedExamples: 309, // Python CPython suite terverifikasi
  totalSlideDecks: 308,       // 30 Python core + 40 AI + 40 IoT + 60 MMCV + 115 SP + 23 RS (333 jika 55 Python dihitung)
  totalInteractiveLabs: 40,   // 18 MMCV (Bab 01–15) + 2 RS + 15 SR + 5 AI track labs (53 di MMCV playgrounds)
  totalResearchTemplates: 10, // SR (TMPL-01 s.d TMPL-10)
};
