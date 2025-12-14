# Panduan Deployment ke GitHub & Vercel

Panduan ini akan membantu Anda mengupload website Portfolio ini ke GitHub dan meng-online-kannya menggunakan Vercel dengan target domain `naufalnazhif.vercel.app`.

---

## Tahap 1: Persiapan Git & GitHub

Proses ini memindahkan kode dari laptop Anda ke GitHub.

### 1. Buat Repository di GitHub
1.  Buka [GitHub.com](https://github.com) dan login.
2.  Klik tombol **(+)** di pojok kanan atas > pilih **New repository**.
3.  Isi **Repository name** dengan: `portfolio-web` (atau nama lain).
4.  Pilih **Public**.
5.  **PENTING**: Jangan centang "Add a README file" (biarkan kosong).
6.  Klik tombol **Create repository**.
7.  Biarkan halaman itu terbuka, jangan ditutup.

### 2. Upload Kode dari VS Code
Buka **Terminal** di VS Code (Ctrl + `) dan ketik perintah berikut satu per satu (tekan Enter setiap baris):

```bash
# 1. Inisialisasi Git
git init

# 2. Masukkan semua file ke dalam "paket" siap kirim
git add .

# 3. Simpan perubahan dengan pesan
git commit -m "Upload portfolio pertama"

# 4. Ubah nama branch utama jadi 'main'
git branch -M main

# 5. Sambungkan ke GitHub (Ganti USERNAME dengan username GitHub Anda!)
# Salin link ini dari halaman repository yang baru Anda buat tadi
git remote add origin https://github.com/USERNAME/portfolio-web.git

# 6. Kirim kode ke GitHub
git push -u origin main
```

*Jika diminta login, ikuti instruksi di layar popup.*

---

## Tahap 2: Deployment di Vercel

Proses ini membuat website Anda bisa diakses online.

### 1. Import Project
1.  Buka [Vercel.com](https://vercel.com) dan login (Login with GitHub).
2.  Di halaman Dashboard, klik tombol **Add New...** > pilih **Project**.
3.  Di daftar **Import Git Repository**, Anda akan melihat `portfolio-web`. Klik tombol **Import** di sebelahnya.

### 2. Konfigurasi (Langsung Deploy)
1.  **Framework Preset**: Pastikan terpilih **Vite**.
2.  **Root Directory**: Biarkan `./`.
3.  Klik tombol **Deploy**.
4.  Tunggu proses build selesai (sekitar 1 menit) sampai muncul animasi konfeti 🎊.

---

## Tahap 3: Mengatur Nama Domain (Link)

Agar linknya menjadi `naufalnazhif.vercel.app`:

1.  Di halaman "Congratulations!" Vercel, klik tombol **Continue to Dashboard**.
2.  Klik menu **Settings** (di bagian atas).
3.  Pilih menu **Domains** (di sidebar kiri).
4.  Di kolom input nama domain, ketik: `naufalnazhif.vercel.app`.
5.  Klik **Add**.

**Catatan:**
*   Jika `naufalnazhif.vercel.app` **tersedia**, Vercel akan langsung menggunakannya.
*   Jika **tidak tersedia** (sudah dipakai orang lain), Anda harus memilih nama lain (misal: `naufalnazhif-portfolio.vercel.app`).

---

## Selesai! ✅
Sekarang website Anda sudah online dan bisa diakses melalu link yang Anda atur tadi.

### Cara Update Website Nanti:
Jika Nanti Anda mengedit kode lagi (misal ganti foto atau teks):
1.  Edit kodenya di VS Code.
2.  Buka Terminal, ketik:
    ```bash
    git add .
    git commit -m "Update konten baru"
    git push
    ```
3.  Vercel akan **otomatis** mendeteksi perubahan dan meng-update website Anda dalam hitungan detik.
