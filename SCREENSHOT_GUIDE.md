# Panduan Menambahkan Screenshot Project

## 📸 Cara Menambahkan Screenshot

Untuk menampilkan beberapa screenshot dari website Anda di dalam modal, ikuti langkah berikut:

### 1. Simpan Screenshot di Folder Public

Simpan semua screenshot Anda di folder `public/projects/` dengan struktur seperti ini:

```
public/
└── projects/
    ├── rapmafest9.png          (gambar utama)
    ├── rapmafest9-1.png        (screenshot tambahan 1)
    ├── rapmafest9-2.png        (screenshot tambahan 2)
    ├── rapmafest9-3.png        (screenshot tambahan 3)
    └── ...
```

### 2. Update Array Projects

Edit file `src/components/ProjectsSection.jsx` dan tambahkan property `screenshots` ke setiap project:

```javascript
const projects = [
  {
    id: 1,
    title: "Landing Page RAPMAFEST #9",
    description: "A dedicated landing page built to introduce the RAPMAFEST #9 event...",
    image: "/projects/rapmafest9.png",
    screenshots: ["/projects/rapmafest9-1.png", "/projects/rapmafest9-2.png", "/projects/rapmafest9-3.png", "/projects/rapmafest9-4.png"],
    tags: ["HTML", "Bootstrap", "CSS"],
    demoUrl: "https://landing-page-rapmafest9.vercel.app/",
  },
  // ... project lainnya
];
```

### 3. Screenshot Akan Muncul Otomatis

Ketika user mengklik project card, modal akan terbuka dan menampilkan:

- Gambar utama (image) di bagian atas
- Detail project (title, description, tags)
- Grid screenshot tambahan (jika ada)
- Tombol "View Demo" dan "View Code"

## ✨ Fitur Modal

- **Klik Card**: Membuka modal dengan detail lengkap
- **Navigation**: Tombol arrow kiri/kanan untuk pindah antar project
- **Keyboard**: Tekan `Esc` untuk menutup modal
- **Backdrop**: Klik area gelap di luar modal untuk menutup
- **Smooth Animation**: Animasi fade dan zoom yang halus
- **Responsive**: Tampilan optimal di semua ukuran layar

## 🎨 Tips

1. **Ukuran Screenshot**: Gunakan ukuran yang konsisten (misal: 1920x1080 atau 1440x900)
2. **Format File**: Gunakan PNG atau WebP untuk kualitas terbaik
3. **Optimasi**: Compress gambar untuk loading yang lebih cepat
4. **Jumlah**: 4-6 screenshot per project sudah cukup

## 📝 Contoh Lengkap

```javascript
{
  id: 3,
  title: "Jelajah Tulang",
  description: "An interactive learning app built with Next.js 16...",
  image: "/projects/jelajah-tulang.png",
  screenshots: [
    "/projects/jelajah-tulang-home.png",
    "/projects/jelajah-tulang-quiz.png",
    "/projects/jelajah-tulang-detail.png",
    "/projects/jelajah-tulang-audio.png",
  ],
  tags: ["React", "Next.js", "Tailwind CSS"],
  demoUrl: "https://jelajah-tulang.vercel.app/",
  githubUrl: "https://github.com/rwynns/jelajah-tulang",
}
```

## 🚀 Tanpa Screenshot Tambahan

Jika Anda tidak ingin menambahkan screenshot tambahan, cukup jangan tambahkan property `screenshots` atau set sebagai array kosong `[]`. Modal akan tetap berfungsi dengan baik, hanya menampilkan gambar utama.
