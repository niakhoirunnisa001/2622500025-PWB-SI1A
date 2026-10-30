# P5 - JavaScript Dasar, DOM, Event, dan Validasi Sisi Klien

## Deskripsi

Dokumentasi pengembangan halaman web pada P5, meliputi JavaScript, DOM, event listener, interaksi navigasi, dan validasi formulir sisi klien.

## Fitur dan Pengembangan

- Penyiapan baseline P5: Menyalin `index.html`, `style.css`, dan `img/foto-profil.jpg` dari artefak P4 ke direktori `pertemuan-05/` sebagai dasar pengembangan.
- Penghubungan JavaScript eksternal: Membuat `script.js` dan menghubungkannya ke `index.html` melalui `<script src="script.js"></script>`.
- Tombol navigasi responsif: Menambahkan tombol hamburger `#navToggle` dengan atribut `aria-label`, `aria-controls`, dan `aria-expanded`, serta aturan CSS agar tombol hanya tampil pada layar sempit.
- Event click navigasi: Menangani event `click` pada `#navToggle` dengan `classList.toggle("nav-open")` pada `#navMenu`, lalu memperbarui `aria-expanded` dan `aria-label` ("Buka navigasi" / "Tutup navigasi").
- Validasi formulir sisi klien: Menangani event `submit` pada `#contactForm` dengan `event.preventDefault()` dan memeriksa nama (3-50 karakter), email (pola valid), semester (1-14), tanggal, jenis pesan, topik minat (minimal satu), program studi, dan pesan (tidak kosong, maksimal 300 karakter).
- Umpan balik pengguna: Menampilkan pesan gagal (`form-feedback-error`) atau "Form berhasil divalidasi." (`form-feedback-success`) pada `#formFeedback`, dan menghapus pesan saat event `input` dan `reset`.

## Pengujian

- Baseline P5: Buka `pertemuan-05/index.html`, periksa halaman, gambar profil, dan styling sesuai P4. Hasil aktual: belum diuji.
- Navigasi responsif: Klik tombol hamburger untuk membuka dan menutup menu, periksa `aria-expanded` dan `aria-label`, lalu periksa tampilan layar lebar (min-width 768px). Hasil aktual: belum diuji.
- Validasi nama: Isi nama `Al`, kirim formulir. Diharapkan pesan "Nama lengkap harus diisi 3 sampai 50 karakter." Hasil aktual: belum diuji.
- Validasi email: Isi email `a@s`, kirim formulir. Diharapkan pesan "Masukkan alamat email yang valid." Hasil aktual: belum diuji.
- Validasi semester: Kosongkan semester, lalu isi 0 dan 15. Diharapkan pesan "Semester harus diisi dengan angka 1 sampai 14." Hasil aktual: belum diuji.
- Validasi tanggal, jenis pesan, topik, dan program studi: Kosongkan masing-masing secara terpisah. Diharapkan pesan "Tanggal kunjungan harus diisi.", "Pilih jenis pesan.", "Pilih minimal satu topik yang diminati.", dan "Pilih program studi." Hasil aktual: belum diuji.
- Validasi pesan: Kosongkan textarea, lalu isi hingga 300 karakter dan coba mengetik tambahan. Diharapkan pesan "Pesan harus diisi." dan input dibatasi `maxlength="300"`. Hasil aktual: belum diuji.
- Data valid: Isi seluruh formulir sesuai aturan lalu kirim. Diharapkan pesan "Form berhasil divalidasi." tanpa klaim data terkirim ke peladen. Hasil aktual: belum diuji.
- Umpan balik: Ubah masukan setelah pesan gagal muncul, lalu tampilkan pesan lagi dan klik tombol Batal. Diharapkan pesan lama terhapus. Hasil aktual: belum diuji.
- Debugging DevTools: Buka panel Console selama pengujian untuk memastikan tidak ada galat JavaScript. Hasil aktual: belum diuji.

## Riwayat Pengembangan

- Siapkan baseline P5 dari artefak P4: Menyalin artefak P4 ke `pertemuan-05/` dan memverifikasi kondisi awal. Pengujian: belum dicatat.
- Hubungkan JavaScript eksternal ke HTML: Membuat `script.js` dan menghubungkannya ke `index.html`. Pengujian: belum dicatat.
- Tambah tombol navigasi responsif: Menambahkan `#navToggle` dan aturan CSS navigasi responsif. Pengujian: belum dicatat.
- Tambahkan event listener pada tombol navigasi: Menangani event `click` untuk membuka dan menutup menu. Pengujian: belum dicatat.
- Terapkan pengendalian submit formulir: Menangani event `submit` dengan `preventDefault()` dan aturan validasi. Pengujian: belum dicatat.
- Tambahkan penanganan event input dan reset: Menghapus pesan umpan balik saat masukan berubah atau formulir di-reset. Pengujian: belum dicatat.
- Selesaikan pengujian dan perbaikan P5: Pengujian ulang dan regresi akhir. Pengujian: belum dicatat.
