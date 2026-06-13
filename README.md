# Kartu Profil Mahasiswa Baru

Kartu Profil Mahasiswa Baru merupakan komponen berbasis Next.js yang dirancang untuk menampilkan identitas mahasiswa baru secara informatif dan menarik.

Saat ini, data masih dikelola secara lokal menggunakan `useState` dan belum terhubung dengan API maupun database.

## Fitur Utama

### Automatic Name Shortening

Komponen dilengkapi dengan fitur _automatic name shortening_ untuk menangani nama yang terlalu panjang. Apabila panjang nama melebihi batas yang ditentukan, kata-kata di bagian belakang nama akan diubah menjadi inisial secara bertahap hingga panjang nama sesuai dengan ruang yang tersedia.

Sebagai contoh:

- `Muhammad Alif Rizki Pratama Putra`
- `Scherie Pascale Alexandra W.`
- `Scherie Pascale A. W.`

Dengan pendekatan ini, identitas pengguna tetap mudah dikenali tanpa mengganggu kerapihan maupun konsistensi layout.

### Region & Unit Badge

Komponen menerima data berupa:

- Foto profil
- Nama
- NRP
- Region
- Unit

Informasi region dan unit ditampilkan menggunakan sistem badge.

Region direpresentasikan menggunakan ikon yang sesuai dengan konteks region, sedangkan unit ditampilkan dalam bentuk teks.

Sebagai contoh, pada GEREX 2025:

<p align="center">
  <img src="./public/readme/badge-example.png" alt="Region Badge Example" width="250">
</p>
* **Region:** Art Master
* **Unit:** Picasso

Badge region akan menampilkan ikon kuas lukis yang merepresentasikan tema Art Master.

### UKM Finder Tags

Selain digunakan untuk menampilkan region dan unit, komponen badge juga dapat digunakan untuk menampilkan hasil tes **UKM Finder** yang telah dikerjakan oleh mahasiswa baru.

Dengan demikian, pengguna dapat membuka kembali kartu profil mereka untuk melihat hasil rekomendasi UKM tanpa perlu mengulang tes, terutama apabila tes hanya dapat dilakukan satu kali.

### Faculty-Based Theme

Warna header kartu ditentukan berdasarkan fakultas mahasiswa sehingga setiap fakultas memiliki identitas visual yang berbeda dan mudah dikenali.

Selain tema bawaan berdasarkan fakultas, pengguna juga dapat melakukan _customization_ dengan memilih tema lain yang telah disediakan.

### Editable Profile Photo

Komponen menyediakan fitur untuk mengganti foto profil sehingga mahasiswa baru dapat menggunakan foto sesuai preferensi mereka.

Apabila pengguna belum mengunggah foto atau memilih untuk tidak mencantumkannya, sistem akan secara otomatis menampilkan avatar default.

### Data Integrity

Fitur edit hanya diterapkan pada foto profil.

Data lain seperti nama, NRP, region, dan unit tidak dapat diubah oleh pengguna karena merupakan data resmi yang ditentukan dan dikelola oleh sistem.
