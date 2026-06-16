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
  linkKontribusi: "https://tally.so/r/GANTI_LINK_INI",
};

// ============================================================
//  TOPIK
// ============================================================
const TOPIK = [
  { id: "semua",    label: "Semua",         icon: "ti-layout-grid" },
  { id: "bitcoin",  label: "Bitcoin",        icon: "ti-currency-bitcoin" },
  { id: "ekonomi",  label: "Ekonomi",        icon: "ti-chart-line" },
  { id: "filsafat", label: "Filsafat",       icon: "ti-brain" },
  { id: "ai",       label: "AI & Teknologi", icon: "ti-cpu" },
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
//  jenis       : "PDF" | "Art" | "Video" | "Storyblog" | "Riset" | "Podcast"
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
    topik: "bitcoin",
    jenis: "PDF",
    kontributor: "Tim RBSL",
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
    thumbnail: "bitcoin_koin_terakhir.jpg",
    deskripsi: "Bitcoin setelah 21 juta koin habis ditambang — apa yang terjadi dengan miner dan masa depan BTC?",
  },
  {
    judul: "Jika Surga & Neraka Tak Pernah Ada — Yakin Lo Gak Nyari Keuntungan di Bitcoin?",
    topik: "bitcoin",
    jenis: "Video",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "https://www.youtube.com/watch?v=DtUwTYlWBHg",
    thumbnail: "https://img.youtube.com/vi/DtUwTYlWBHg/maxresdefault.jpg",
    deskripsi: "Ngobrolin ilusi kebaikan, bitcoin, dan apa yang sebenernya kita cari. Deep talk alert!",
  },
  {
    judul: "Circular Economy @ Nusa Community Hub",
    topik: "ekonomi",
    jenis: "Podcast",
    kontributor: "om.sats, annasahmads, mithos_btc, bitcoinsports.id",
    tanggal: "2025-06-16",
    link: "https://www.youtube.com/watch?v=IxVFvHy-uk4",
    thumbnail: "https://img.youtube.com/vi/IxVFvHy-uk4/maxresdefault.jpg",
    deskripsi: "Diskusi circular economy bersama komunitas Bitcoin di Nusa Community Hub.",
  },
  {
    judul: "Puzzle of Idea",
    topik: "filsafat",
    jenis: "Storyblog",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "https://puzzlesofidea.netlify.app/",
    thumbnail: "puzzle_of_idea.jpg",
    deskripsi: "Clarity, golden ratio, tipografi, narasi — 10 puzzle di balik setiap ide besar.",
  },
  {
    judul: "Berpikir Seperti Matematika",
    topik: "bitcoin",
    jenis: "Storyblog",
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
    thumbnail: "satoshi_in_wonderland.jpg",
    deskripsi: "Gimana kalo pencipta Bitcoin ketemuan sama Kucing Cheshire? Deep talk paling mind-blowing abad ini.",
  },
  {
    judul: "Ngetik Code atau Nulis Filsafat?",
    topik: "filsafat",
    jenis: "PDF",
    kontributor: "Bitcoin SatoshiCat",
    tanggal: "2025-06-16",
    link: "https://drive.google.com/file/d/1lHwDtXU5iYl7UqISW7Sg--pwPNf_7FIp/view?usp=drive_link",
    thumbnail: "architects_of_logic.jpg",
    deskripsi: "Gimana pemikiran filsuf dari balik jeruji besi WWI jadi pondasi absolut buat Programming & Bitcoin modern.",
  },

];
