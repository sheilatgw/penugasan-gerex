Saya mengimplementasikan komponen Kartu Profil Maba menggunakan Next.js dengan pendekatan component-based. Saat ini data masih dikelola secara lokal menggunakan useState dan belum terhubung dengan API maupun database.

Komponen menerima data berupa foto, nama, NRP, dan region/unit. Data region dan unit ditampilkan dalam bentuk badge dengan region direpresentasikan menggunakan ikon yang sesuai dengan konteks region, sedangkan unit ditampilkan sebagai teks 

<img width="196" height="61" alt="Screenshot 2026-06-13 052228" src="https://github.com/user-attachments/assets/2b3e366e-1f8e-4cd9-887f-5f488098a67a" />

```
Sebagai contoh, saya mengambil pendekatan dari GEREX 2025 dengan region Art Master dan unit Picasso.
Pada badge terdapatikon kuas lukis untuk merepresentasikan region Art Master sehingga pengguna dapat
lebih mudah mengenali identitas region secara visual.
```

Selain digunakan untuk menampilkan identitas region dan unit, komponen badge juga diterapkan untuk menampilkan tag hasil dari tes UKM Finder yang dilakukan oleh Mahasiswa baru. Dengan demikian, pengguna cukup membuka laman kartu peserta apabila ingin melihat kembali hasil tes UKM Finder-nya (just in case kalau tes hanya bisa dilakukan sekali)

Warna header kartu ditentukan berdasarkan fakultas mahasiswa baru sehingga setiap fakultas memiliki visual yang berbeda dan mudah dikenali oleh pengguna.

Terdapat juga fitur yang tidak kalah penting yaitu fitur edit foto profil agar mahasiswa baru atau pengguna dapat mengganti foto profil sesuka hati. Tentunya, komponen ini juga diengkapi dengan avatar default apabila foto tidak tersedia atau pengguna memilih untuk tidak mencantumkan foto untuk mencegah tampilan rusak dan meningkatkan experience pengguna. 

Sementara itu, fitur edit tidak diterapkan pada data lain seperti nama, NRP, region dan unit, karena informasi tersebut bersifat tetap dan ditentukan oleh sistem.

