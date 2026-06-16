# Panduan Deploy RBSL ke GitHub Pages

## File yang kamu punya
```
rbsl-website/
├── index.html   ← tampilan website (tidak perlu diedit)
└── data.js      ← DATA MATERI — edit file ini untuk update konten
```

---

## Cara Deploy (sekali saja)

### 1. Buat akun GitHub
Kalau belum punya, daftar di https://github.com

### 2. Buat repository baru
- Klik tombol **+** → **New repository**
- Nama repo: `rumah-baca-sapu-lidi` (atau apapun)
- Set ke **Public**
- Klik **Create repository**

### 3. Upload file
- Klik **uploading an existing file**
- Drag & drop `index.html` dan `data.js` sekaligus
- Klik **Commit changes**

### 4. Aktifkan GitHub Pages
- Buka tab **Settings** di repo
- Klik **Pages** di menu kiri
- Di bagian **Branch**, pilih `main` → folder `/ (root)`
- Klik **Save**

### 5. Website live!
Dalam 1-2 menit, website bisa diakses di:
```
https://USERNAME.github.io/NAMA-REPO/
```
Contoh: `https://sapulidi.github.io/rumah-baca-sapu-lidi/`

---

## Cara Update Konten (rutin)

### Tambah materi baru
1. Buka file `data.js`
2. Salin salah satu blok `{ ... }` di dalam array `MATERI`
3. Isi judul, topik, jenis, kontributor, tanggal, dan link Google Drive
4. Simpan & upload ke GitHub (drag & drop lagi, atau edit langsung di GitHub)

### Format link Google Drive
1. Klik kanan file di Google Drive → **Share** → **Anyone with the link**
2. Salin link-nya, paste di field `link`

### Tambah topik baru
Edit bagian `TOPIK` di `data.js`, tambah baris baru:
```js
{ id: "nama-id", label: "Nama Topik", icon: "ti-NAMA-IKON" },
```
Cari nama ikon di: https://tabler.io/icons

---

## Tips

- **Formulir kontribusi**: Buat di https://tally.so (gratis), ganti link di `RBSL_CONFIG.linkKontribusi`
- **Custom domain** (opsional): Bisa pakai domain sendiri via Settings → Pages → Custom domain
- **Update otomatis**: Edit file langsung di GitHub.com, tidak perlu software apapun
