# Kartu Profil Mahasiswa Baru

Komponen berbasis Next.js yang dirancang untuk menampilkan identitas mahasiswa baru secara menarik.

Saat ini data masih dikelola secara lokal menggunakan `useState` dan belum terhubung dengan API maupun database.

## Fitur Utama

### Automatic Name Shortening

Komponen dilengkapi dengan fitur _automatic name shortening_ untuk menyingkat nama yang terlalu panjang. Apabila panjang nama melebihi batas yang ditentukan, nama belakang akan diubah menjadi inisial hingga panjang nama sesuai dengan ruang yang tersedia.

Sebagai contoh:

- `Elizabeth Carissa Michelle Wijaya Putri`
  <p align="center">
  <img width="613" height="82" alt="Screenshot 2026-06-13 215150" src="https://github.com/user-attachments/assets/8200e6cf-42ec-456e-8d84-d956eee692ca" />
  </p>

Pendekatan ini bertujuan agar konsistensi layout dapat tetap terjaga.

### Region & Unit Badge

Saya membuat komponen menerima data berupa:

- Foto profil
- Nama
- NRP
- Jurusan
- Fakultas
- Region
- Unit

Informasi region dan unit ditampilkan menggunakan sistem badge.

Region direpresentasikan menggunakan ikon yang sesuai dengan konteks region, unit ditampilkan dalam bentuk teks.

Sebagai contoh, pada GEREX 2025 terdapat:

- **Region:** Art Master
- **Unit:** Picasso

<p align="center">
  <img width="196" height="61" alt="Screenshot 2026-06-13 052228" src="https://github.com/user-attachments/assets/7639b07e-39d0-4fef-8557-26a4810382b2" />
</p>

Badge region menampilkan ikon kuas lukis yang merepresentasikan region _Art Master_.

### UKM Finder Tags

Selain digunakan untuk menampilkan region dan unit, komponen badge juga dapat digunakan untuk menampilkan hasil tes **UKM Finder** yang telah dikerjakan oleh mahasiswa baru.

Dengan demikian, pengguna dapat membuka kembali kartu profil mereka untuk melihat hasil kecenderungan minat tanpa perlu mengulang tes, terutama apabila tes hanya dapat dilakukan satu kali.

### Faculty-Based Theme

Warna header kartu ditentukan berdasarkan fakultas mahasiswa sehingga setiap fakultas memiliki identitas visual yang berbeda dan mudah dikenali.

Selain tampilan polos bawaan, pengguna juga dapat melakukan _customization_ dengan memilih tema lain yang disediakan.

### Editable Profile Photo

Komponen menyediakan fitur untuk mengganti foto profil sehingga mahasiswa baru dapat menggunakan foto sesuai preferensi mereka.

Apabila pengguna belum mengunggah foto atau memilih untuk tidak mengunggahnya, sistem akan secara otomatis menampilkan avatar default.

### Data Integrity

Fitur edit hanya diterapkan pada foto profil.

Data lain seperti nama, NRP, region dan unit, jurusan, dan fakultas tidak dapat diubah oleh pengguna karena merupakan data resmi yang ditentukan dan dikelola oleh sistem.
