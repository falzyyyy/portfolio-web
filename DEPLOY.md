# Panduan Deployment (GitHub & Vercel)

Berikut adalah langkah-langkah untuk meng-online-kan portfolio Anda agar bisa diakses semua orang.

## Tahap 1: Push ke GitHub

Karena saya sudah menyiapkan Git lokal, Anda tinggal menghubungkannya ke GitHub Anda.

1.  Login ke **[GitHub.com](https://github.com/)**.
2.  Buat **Repository Baru**:
    *   Klik tombol **+** di pojok kanan atas -> **New repository**.
    *   Nama repository: `portfolio-web` (atau bebas).
    *   Pilih **Public**.
    *   **JANGAN** centang "Add a README file" (karena kita sudah punya file lokal).
    *   Klik **Create repository**.

3.  Hubungkan & Upload Kode:
    Salin dan jalankan perintah yang muncul di halaman GitHub bagian **"…or push an existing repository from the command line"**. Perintahnya mirip seperti ini (ganti `USERNAME` dengan username GitHub Anda):

    ```bash
    git remote add origin https://github.com/USERNAME/portfolio-web.git
    git branch -M main
    git push -u origin main
    ```

    *Jalankan perintah tersebut di terminal VS Code Anda.*

## Tahap 2: Deploy ke Vercel

Vercel adalah tempat hosting gratis terbaik untuk project React/Vite.

1.  Buka **[Vercel.com](https://vercel.com/)** dan Login (bisa pakai akun GitHub).
2.  Klik **Add New...** -> **Project**.
3.  Di bagian "Import Git Repository", cari `portfolio-web` yang baru saja Anda upload ke GitHub, lalu klik **Import**.
4.  **Konfigurasi**:
    *   Framework Preset: **Vite** (biasanya otomatis terdeteksi).
    *   Root Directory: `./` (biarkan default).
    *   Klik **Deploy**.

## Selesai! 🚀

Tunggu sekitar 1-2 menit. Vercel akan memberikan link domain (contoh: `portfolio-web-naufal.vercel.app`) yang bisa Anda bagikan ke siapa saja.

Setiap kali Anda mengubah kode di laptop dan melakukan `git push`, Vercel akan otomatis meng-update website Anda!
