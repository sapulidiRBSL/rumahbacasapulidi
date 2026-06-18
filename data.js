// ============================================================
//  RBSL — Data Materi
//  Edit file ini untuk menambah, mengubah, atau menghapus materi.
//  Tidak perlu menyentuh index.html sama sekali.
// ============================================================

const RBSL_CONFIG = {
  namaKomunitas: "Rumah Baca Sapu Lidi",
  tagline: "Dari kita, untuk kita.",
  deskripsi: "Perpustakaan digital bersama — tempat belajar, berbagi, dan berkarya. Seperti sapu lidi, lebih kuat bersama.",
  // Link formulir kontribusi (ganti dengan link Tally/Google Form kamu)
  linkKontribusi: "https://t.me/+p4JAxJAXuJ05OThl",
};

// ============================================================
//  TOPIK
// ============================================================
const TOPIK = [
  { id: "semua",    label: "Semua",         icon: "ti-layout-grid" },
  { id: "bitcoin",  label: "Bitcoin for Beginner", icon: "ti-currency-bitcoin" },
  { id: "bitcoinmath", label: "Bitcoin & Math", icon: "ti-math-function" },
  { id: "bitcoinphilosophy", label: "Bitcoin & Philosophy", icon: "ti-yin-yang" },
  { id: "bitcointechnicals", label: "Bitcoin Technicals Made Simple", icon: "ti-settings-cog" },
  { id: "ekonomi",  label: "Economy",        icon: "ti-chart-line" },
  { id: "filsafat", label: "Philosophy",       icon: "ti-brain" },
  { id: "ai",       label: "Technology", icon: "ti-cpu" },
  { id: "sejarah",  label: "Sejarah",        icon: "ti-history" },
  { id: "buku",     label: "Buku",           icon: "ti-books" },
  { id: "psikologi",label: "Psikologi",      icon: "ti-heart" },
  { id: "produktif",label: "Produktivitas",  icon: "ti-rocket" },
];

// ============================================================
//  MATERI
//
//  FORMAT:
//  judul       : judul materi
//  topik       : id topik dari daftar TOPIK di atas
//  jenis       : "PDF" | "Art" | "Video" | "Blog" | "Article" | "Riset" | "Podcast" | "Infographic"
//  kontributor : nama kontributor
//  tanggal     : "YYYY-MM-DD"
//  link        : link Google Drive → klik kanan file → Share → Copy link
//  thumbnail   : (opsional) link thumbnail cover
//                Format: https://drive.google.com/thumbnail?id=FILE_ID&sz=w400
//                FILE_ID = bagian /d/XXXX/ dari link Google Drive kamu
//  deskripsi   : (opsional) kalimat singkat tentang isi materi
// ============================================================
const MATERI = [
  {
    judul: "Don't Trust, Verify — Seni Membaca Kebenaran",
    topik: "bitcoinmath",
    jenis: "PDF",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    // Ganti FILE_ID di bawah dengan ID file PDF dari Google Drive
    // Contoh link: https://drive.google.com/file/d/1aBcDeFgH.../view
    // FILE_ID = bagian setelah /d/ sampai sebelum /view
    link: "https://drive.google.com/file/d/1hycbbvCXpWt2AUXNuU4wYZqaYsOEJ7e8/view?usp=drive_link",
    thumbnail: "https://drive.google.com/thumbnail?id=1hycbbvCXpWt2AUXNuU4wYZqaYsOEJ7e8&sz=w400",
    deskripsi: "Semua logika, bahasa, dan seni verifikasi bermuara di tiga kata ajaib ini.",
  },
  {
    judul: "When Knowledge Becomes a Grenade",
    topik: "bitcoin",
    jenis: "Art",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "knowledge_grenade.jpg",
    thumbnail: "knowledge_grenade.jpg",
    deskripsi: "Silence is the pin that holds back revolution. Educate yourself. Question everything. Bitcoin is knowledge.",
  },
  {
    judul: "Bad Sector — Time Isn't Saved, It's Spent",
    topik: "bitcoin",
    jenis: "Art",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "bad_sector.jpg",
    thumbnail: "bad_sector.jpg",
    deskripsi: "Ketika sepotong hidupmu dikristalkan menjadi uang — di mana kamu menitipkan waktu itu?",
  },
  {
    judul: "Bitcoin Setelah Koin Terakhir — Apa yang Terjadi di Tahun 2140?",
    topik: "bitcoin",
    jenis: "Video",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "https://www.youtube.com/watch?v=ZjNXA3kO3e0&t=80s",
    thumbnail: "https://img.youtube.com/vi/ZjNXA3kO3e0/hqdefault.jpg",
    deskripsi: "Bitcoin setelah 21 juta koin habis ditambang — apa yang terjadi dengan miner dan masa depan BTC?",
  },
  {
    judul: "Jika Surga & Neraka Tak Pernah Ada — Yakin Lo Gak Nyari Keuntungan di Bitcoin?",
    topik: "bitcoinphilosophy",
    jenis: "Video",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "https://www.youtube.com/watch?v=DtUwTYlWBHg",
    thumbnail: "https://img.youtube.com/vi/DtUwTYlWBHg/hqdefault.jpg",
    deskripsi: "Ngobrolin ilusi kebaikan, bitcoin, dan apa yang sebenernya kita cari. Deep talk alert!",
  },
  {
    judul: "Circular Economy @ Nusa Community Hub",
    topik: "ekonomi",
    jenis: "Podcast",
    kontributor: "om.sats, annasahmads, mithos_btc, bitcoinsports.id",
    tanggal: "2025-06-16",
    link: "https://www.youtube.com/watch?v=IxVFvHy-uk4",
    thumbnail: "https://img.youtube.com/vi/IxVFvHy-uk4/hqdefault.jpg",
    deskripsi: "Diskusi circular economy bersama komunitas Bitcoin di Nusa Community Hub.",
  },
  {
    judul: "Puzzle of Idea",
    topik: "filsafat",
    jenis: "Blog",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "https://puzzlesofidea.netlify.app/",
    thumbnail: "puzzle_of_idea.jpg",
    deskripsi: "Clarity, golden ratio, tipografi, narasi — 10 puzzle di balik setiap ide besar.",
  },
  {
    judul: "Berpikir Seperti Matematika",
    topik: "bitcoinmath",
    jenis: "Blog",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-05-15",
    link: "https://thinklikemath.netlify.app/",
    thumbnail: "think_like_math.jpg",
    deskripsi: "Don't Trust, Verify — belajar berpikir dengan logika dan ketelitian seperti matematika.",
  },
  {
    judul: "Kalo Satoshi Nakamoto Nongkrong di Wonderland",
    topik: "bitcoin",
    jenis: "PDF",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "https://drive.google.com/file/d/12OulA7av1--IWeC-qUMy03sTFVptvHe_/view?usp=sharing",
    thumbnail: "https://drive.google.com/thumbnail?id=12OulA7av1--IWeC-qUMy03sTFVptvHe_&sz=w400",
    deskripsi: "Gimana kalo pencipta Bitcoin ketemuan sama Kucing Cheshire? Deep talk paling mind-blowing abad ini.",
  },
  {
    judul: "Ngetik Code atau Nulis Filsafat?",
    topik: "bitcoinmath",
    jenis: "PDF",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "https://drive.google.com/file/d/1lHwDtXU5iYl7UqISW7Sg--pwPNf_7FIp/view?usp=drive_link",
    thumbnail: "https://drive.google.com/thumbnail?id=1lHwDtXU5iYl7UqISW7Sg--pwPNf_7FIp&sz=w400",
    deskripsi: "Gimana pemikiran filsuf dari balik jeruji besi WWI jadi pondasi absolut buat Programming & Bitcoin modern.",
  },
  {
    judul: "Kripto: Harta Masa Depan atau Judi Modern?",
    topik: "ai",
    jenis: "Podcast",
    kontributor: "Podcast Kurniawan",
    tanggal: "2026-06-16",
    link: "https://open.spotify.com/episode/1H5nLKKXK75nu6MplSAdDo?si=OKThtg1pSzW4nZ4zpdMn_w",
    thumbnail: "https://i.scdn.co/image/ab6765630000ba8a3860837bf00f4d27cf0709a8",
    deskripsi: "Kripto sah jadi harta masa depan, atau cuma judi modern berbungkus teknologi? Bedah hukum Bappebti, fatwa MUI-NU-Muhammadiyah, sampai peluang ekonomi bebas riba.",
  },
  {
    judul: "Lawan Bias Otak Agar Pensiun 35 Tahun",
    topik: "ekonomi",
    jenis: "Podcast",
    kontributor: "Podcast Kurniawan",
    tanggal: "2026-06-06",
    link: "https://open.spotify.com/episode/5NPa6ulhE3JtHjhCjTmT1y",
    thumbnail: "https://i.scdn.co/image/ab6765630000ba8a7238de2e493d920863e5cef2",
    deskripsi: "Otak kita diprogram untuk konsumtif — bedah behavioral finance, compounding, dan perbandingan emas vs Bitcoin untuk anak muda yang ingin pensiun di usia 35–40 tahun.",
  },
  {
    judul: "Bitcoin: The Public Map & The Mystery of Privacy",
    topik: "bitcoin",
    jenis: "Infographic",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2026-06-16",
    link: "bitcoin_public_map_privacy.jpg",
    thumbnail: "bitcoin_public_map_privacy.jpg",
    deskripsi: "Saldo Bitcoin itu peta publik, bukan buku tabungan — gimana jejak transaksi bisa dilacak, dan cara aktifin 'stealth mode' lewat CoinJoin, Lightning Network, sampai Coin Control.",
  },
  {
    judul: "Ketika Bitcoin Bercerita — Comic Reader",
    topik: "bitcoin",
    jenis: "Blog",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2026-06-17",
    link: "https://satoshicatstory.netlify.app/",
    thumbnail: "ketika_bitcoin_bercerita.jpg",
    deskripsi: "Komik strip Bitcoin — kisah Satoshicat dalam 11 halaman penuh warna yang bikin paham Bitcoin tanpa perlu baca whitepaper.",
  },
  {
    judul: "Ep.1 - Celengan Pertamaku",
    topik: "bitcoin",
    jenis: "PDF",
    kontributor: "achmad.ardian.syah",
    tanggal: "2026-06-17",
    link: "https://drive.google.com/file/d/14UVukXKprKyxb_fUsdmJ0tvNk9r4e55N/view?pli=1",
    thumbnail: "https://drive.google.com/thumbnail?id=14UVukXKprKyxb_fUsdmJ0tvNk9r4e55N&sz=w400",
    deskripsi: "Langkah pertama mengenal Bitcoin — dari mana mulainya, kenapa penting, dan bagaimana memulai perjalananmu sebagai pemula.",
  },
  {
    judul: "Belajar Bitcoin dari Nol dalam 10 Menit (Langsung Paham)",
    topik: "bitcoin",
    jenis: "Video",
    kontributor: "datul",
    tanggal: "2026-06-18",
    link: "https://www.youtube.com/watch?v=2tAN2gS5p9U",
    thumbnail: "https://img.youtube.com/vi/2tAN2gS5p9U/hqdefault.jpg",
    deskripsi: "Pengantar singkat Bitcoin buat pemula — paham dasar-dasarnya cuma dalam 10 menit.",
  },
  {
    judul: "Dari Nol ke Bertahan: 4 Mitos & Rahasia Hidup yang Bikin Kamu Kuat Seperti Bitcoin",
    topik: "bitcoin",
    jenis: "Video",
    kontributor: "Bitcoin SatoshiCat, dhiemazalfa",
    tanggal: "2026-06-18",
    link: "https://www.youtube.com/watch?v=Oyz0gMewsUc",
    thumbnail: "https://img.youtube.com/vi/Oyz0gMewsUc/hqdefault.jpg",
    deskripsi: "Bongkar 4 mitos hidup yang bikin kita rapuh, dan gimana belajar dari ketahanan Bitcoin buat jadi lebih kuat.",
  },
  {
    judul: "Episode 3 : Adu Kedaulatan Kripto dan CBDC",
    topik: "ai",
    jenis: "Podcast",
    kontributor: "Podcast Kurniawan",
    tanggal: "2026-06-04",
    link: "https://open.spotify.com/episode/7hAzY9wqFhCRsab3v6Bs51",
    thumbnail: "https://i.scdn.co/image/ab6765630000ba8aebfdce052e86427dc324e1bd",
    deskripsi: "Kripto vs CBDC — benturan ideologi antara desentralisasi dan kedaulatan negara, siapa yang bakal menang kendali atas dompetmu?",
  },
  {
    judul: "Surat Terbuka: Di Antara Ketakutan Menjadi Miskin dan Kehinaan Menjadi Serakah",
    topik: "ekonomi",
    jenis: "Article",
    kontributor: "annasahmads",
    tanggal: "2025-12-01",
    link: "https://www.annasahmad.com/2025/12/surat-terbuka-di-antara-ketakutan.html",
    thumbnail: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAK39FrJmMqoB_3fG4JE5bTboskOhEO9oCrbzQZuQ9Tf23bYbQ2VdRZxG-hfD8Sncy0OYTUbwGXU0By-2ZSnHvnohoK4DsFFWBvY0_ehrVIX_b7MccxM6-MrdVwLw7L_gXlL_5R-mdtr0t9gd5BbMGldslw0bSlRzC0-d8mf3GY1mDy3UiWKeLNb1YCZw/w640-h430/7ef4d16d-260f-40f0-8dc7-2d0abc05f2a9.png",
    deskripsi: "Renungan tentang ketakutan mati miskin versus kehinaan mati serakah — mendefinisikan ulang makna kekayaan menjelang 2026.",
  },
  {
    judul: "Memahami Protokol Bitcoin Dengan Mudah Untuk Semua Orang",
    topik: "bitcointechnicals",
    jenis: "Blog",
    kontributor: "maxima.freiman",
    tanggal: "2026-06-18",
    link: "https://bitprotocol.netlify.app/",
    thumbnail: "bitprotocol_thumbnail.jpg",
    deskripsi: "Pelajari bagaimana Bitcoin bekerja dari dasar hingga mekanisme terdalamnya, tanpa jargon rumit, tanpa hype crypto, dan tanpa harus jadi programmer.",
  },
  {
    judul: "3 Mitos dan 2 Angka yang Perlu Kamu Cari",
    topik: "ekonomi",
    jenis: "Article",
    kontributor: "annasahmads",
    tanggal: "2025-02-01",
    link: "https://www.annasahmad.com/2025/02/3-mitos-dan-2-angka-yang-perlu-kamu.html",
    thumbnail: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjRtu9swKmFgXHpyk3ooRe3wzq8ngCbgrcJzDjPxyxiKkj8SgSkBhZIkxNqr5HPCliFnk74HQrS2gNSMFnjSkq7Z3LtlP0Ohp7du9QzcTM40yABtZNsmyER99uW63iJ4zqVSPw8dgIbCVZdl1WG6HJjbtflwS0FSUl_6POYeyXB4CNM3yk_Hqa-44qNMk/s1312/k2sWc8g2Ssun28-CXuNr8A.webp",
    deskripsi: "Membongkar mitos-mitos seputar keuangan dan dua angka penting yang sering diabaikan, tapi sebenarnya krusial untuk perjalanan finansialmu.",
  },
  {
    judul: "Siapa sih yang Pertama Kali Ngadain Makan 3x Sehari?",
    topik: "filsafat",
    jenis: "Article",
    kontributor: "jokoart.id",
    tanggal: "2026-04-16",
    link: "https://jokowarihwiguna.blogspot.com/2026/04/makan-3x-sehari-siapa-yang-ciptakan.html",
    thumbnail: "joko_makan_3x_sehari_thumbnail.jpg",
    deskripsi: "Hal yang dianggap biasa, dibedah sampai dalam — menelusuri asal-usul kebiasaan makan tiga kali sehari yang jarang dipertanyakan.",
  },

];
