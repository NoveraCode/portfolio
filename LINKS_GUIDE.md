# Panduan Mengelola Link Project

## 🔗 Cara Menambahkan Link

Setiap project dapat memiliki kombinasi link yang berbeda:

### 1. **Project dengan Demo & GitHub**

```javascript
{
  id: 3,
  title: "Jelajah Tulang",
  description: "...",
  image: "/projects/jelajah-tulang.png",
  tags: ["React", "Next.js", "Tailwind CSS"],
  demoUrl: "https://jelajah-tulang.vercel.app/",      // ✅ Ada demo
  githubUrl: "https://github.com/rwynns/jelajah-tulang", // ✅ Ada GitHub
}
```

**Hasil:** Menampilkan 2 icon (🔗 External Link & 🐙 GitHub)

---

### 2. **Project dengan Demo Saja**

```javascript
{
  id: 1,
  title: "Landing Page RAPMAFEST #9",
  description: "...",
  image: "/projects/rapmafest9.png",
  tags: ["HTML", "Bootstrap", "CSS"],
  demoUrl: "https://landing-page-rapmafest9.vercel.app/", // ✅ Ada demo
  // githubUrl tidak ada
}
```

**Hasil:** Menampilkan 1 icon (🔗 External Link saja)

---

### 3. **Project dengan GitHub Saja**

```javascript
{
  id: 6,
  title: "SiHaki",
  description: "...",
  image: "/projects/sihaki.png",
  tags: ["Laravel", "Tailwind", "mySQL", "php"],
  // demoUrl tidak ada
  githubUrl: "https://github.com/Pumpkins20/siHaki", // ✅ Ada GitHub
}
```

**Hasil:** Menampilkan 1 icon (🐙 GitHub saja)

---

### 4. **Project Tanpa Link**

```javascript
{
  id: 8,
  title: "Private Project",
  description: "...",
  image: "/projects/private.png",
  tags: ["React", "Node.js"],
  // Tidak ada demoUrl
  // Tidak ada githubUrl
}
```

**Hasil:** Menampilkan text "Click to view details"

---

## 🎯 Fitur Otomatis

### Di Project Card:

- ✅ Icon link hanya muncul jika URL tersedia
- ✅ Hover menampilkan tooltip ("View Demo" / "View Code")
- ✅ Klik icon langsung membuka link (tanpa buka modal)
- ✅ Klik card membuka modal detail

### Di Modal:

- ✅ Tombol "View Demo" hanya muncul jika ada `demoUrl`
- ✅ Tombol "View Code" hanya muncul jika ada `githubUrl`
- ✅ Jika tidak ada link sama sekali, section button tidak ditampilkan

---

## 📝 Best Practices

### 1. **Untuk Live Demo**

```javascript
demoUrl: "https://your-project.vercel.app/";
```

Gunakan URL lengkap dengan `https://`

### 2. **Untuk GitHub Repository**

```javascript
githubUrl: "https://github.com/username/repo-name";
```

Link ke repository utama, bukan branch atau file tertentu

### 3. **Untuk Project Private/NDA**

```javascript
// Jangan tambahkan demoUrl atau githubUrl
// Project tetap bisa ditampilkan dengan screenshot di modal
```

### 4. **Untuk URL Kosong**

```javascript
demoUrl: "",  // ❌ Jangan seperti ini
githubUrl: "", // ❌ Jangan seperti ini
```

Lebih baik **hapus property-nya** atau **jangan ditulis sama sekali**

---

## ✨ Tips

1. **Testing Link**: Pastikan URL benar dengan membuka di browser
2. **rel="noopener noreferrer"**: Sudah otomatis ditambahkan untuk keamanan
3. **target="\_blank"**: Link dibuka di tab baru
4. **Accessibility**: Sudah ada title/tooltip untuk screen readers

---

## 🚀 Contoh Real World

```javascript
const projects = [
  // Project Production dengan semua link
  {
    id: 1,
    title: "E-Commerce App",
    demoUrl: "https://myshop.com",
    githubUrl: "https://github.com/me/shop",
  },

  // Project dalam development (GitHub saja)
  {
    id: 2,
    title: "Work In Progress",
    githubUrl: "https://github.com/me/wip-project",
  },

  // Client project (Demo saja, private repo)
  {
    id: 3,
    title: "Client Website",
    demoUrl: "https://client-site.com",
  },

  // Portfolio piece (screenshot saja)
  {
    id: 4,
    title: "Design Concept",
    // Tidak ada link, modal akan tampilkan screenshot
  },
];
```
