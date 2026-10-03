# Media Belajar Kimia Fase F — paket Vercel

Paket ini menampilkan website yang sama dengan versi GitHub, tetapi:

- **Kode tersembunyi dari "View Source".** `index.html` hanya berisi pemuat kecil yang teracak. Isi website disimpan tersandi di folder `app/` dan baru dibuka di dalam browser.
- **Offline setelah dibuka sekali.** Kunjungan pertama menyimpan seluruh halaman (beranda, Kelas XI, Kelas XII), 107 foto, dan huruf di penyimpanan browser (IndexedDB dan Cache). Kunjungan berikutnya dibuka dari simpanan, termasuk tanpa internet.
- **Pembaruan otomatis.** Saat online, pemuat memeriksa `app/version.json`. Jika Anda men-deploy versi baru, isi website yang tersimpan diganti otomatis.

## Cara deploy ke Vercel

1. Buat repository **privat** baru di GitHub, unggah seluruh isi folder ini (termasuk `vercel.json`, `sw.js`, dan folder `app`).
2. Masuk ke vercel.com → **Add New… → Project** → pilih repository tersebut → **Deploy** (tanpa pengaturan build; Framework Preset: Other).
3. Buka alamat website sekali saat online di setiap perangkat yang akan dipakai, tunggu sampai muncul "✓ Semua 107 foto tersimpan".

Catatan: kode yang dijalankan browser tetap dapat diperiksa oleh orang yang sangat paham (melalui DevTools), tetapi sudah teracak sehingga sangat sulit dibaca atau disalin.
