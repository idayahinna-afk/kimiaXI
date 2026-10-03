# Media Belajar Interaktif Kimia Fase F (Kelas XI dan XII)

Website statis berisi presentasi, simulasi interaktif, kuis, dan panduan guru untuk mata pelajaran Kimia SMA/MA Fase F, mengikuti perangkat ajar dan modul ajar Pembelajaran Mendalam Tahun Pelajaran 2026/2027.

## Struktur

```
index.html            ← beranda (pilih kelas)
kelas-xi/index.html   ← Kimia Kelas XI (6 bab)
kelas-xii/index.html  ← Kimia Kelas XII (6 bab)
```

Setiap halaman kelas berdiri sendiri (CSS dan JavaScript sudah di dalam file), tidak memerlukan instalasi apa pun.

## Cara publikasi di GitHub Pages

1. Buat repository baru di GitHub, misalnya `kimia-fase-f`.
2. Unggah seluruh isi folder ini (index.html, folder kelas-xi, folder kelas-xii, README.md) melalui **Add file → Upload files**, lalu **Commit changes**.
3. Buka **Settings → Pages**. Pada **Source** pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
4. Tunggu 1–2 menit. Website dapat dibuka di `https://<nama-pengguna>.github.io/kimia-fase-f/`.

## Tautan langsung ke bab dan tab

Gunakan format `kelas-xi/index.html#XI-3/simulasi` (tab: presentasi, simulasi, kuis, panduan).

## Penggunaan di kelas

- Tekan **Layar penuh** pada tab Presentasi dan gunakan tombol panah kiri/kanan.
- Simulasi berjalan langsung di browser dan dapat dibuka di HP peserta didik.
- Saat pertama kali dibuka, semua foto Kelas XI dan XII otomatis diunduh dan disimpan di penyimpanan internal browser (IndexedDB); indikator "Menyimpan foto ke browser" muncul di atas. Kunjungan berikutnya memakai foto tersimpan sehingga presentasi tetap bergambar tanpa internet.
- Penyimpanan foto juga bekerja bila file dibuka langsung dari komputer (Chrome/Edge). Halaman yang dibuka dari GitHub Pages juga ikut tersimpan oleh sw.js.
- Jika foto pernah dihapus dari browser (clear browsing data), cukup buka website sekali lagi saat online.
