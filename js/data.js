/* ===== KONFIGURASI — ubah bagian ini untuk mengembangkan website ===== */
const CONFIG = {
  name: "Ruang Trio BRI",
  heroSub: "Biji robusta dan arabika dari petani Ngawi, disangrai tiap pekan. Tempat duduk yang tenang untuk bekerja atau mengobrol.",
  about: "Ruang Trio BRI dibuka untuk satu hal: kopi lokal yang diseduh dengan benar. Kami bekerja langsung dengan petani di Ngawi Selatan, lalu menyangrai dalam jumlah kecil supaya rasanya selalu segar.",
  whatsapp: "6281234567890",           // nomor tujuan pesanan, format internasional tanpa +
  address: "Jl.Ngawi No. 67, Ngawors, Ngawi Selatan",
  hours: [["Senin–Jumat","08.00–22.00"],["Sabtu–Minggu","09.00–23.00"]],
  wifi: "Wi-Fi gratis dan colokan di tiap meja"
};
const MENU = [
  {
    cat:"Kopi", 
    name:"Kopi Tubruk Ngawi", 
    desc:"Robusta lokal, seduh klasik.", 
    price:15000, 
    img:"img/kopi tubruk.jpeg"
  },
  {
    cat:"Kopi", 
    name:"V60 Single Origin", 
    desc:"Arabika Tanggamus, rasa buah dan cokelat.", 
    price:28000, 
    img:"img/v60.jpeg"
  },
  {
    cat:"Kopi", 
    name:"Es Kopi Gula Aren", 
    desc:"Espresso, susu, gula aren.", 
    price:22000, 
    img:"img/kopi gula aren.jpeg"
  },
  {
    cat:"Kopi", 
    name:"Flat White", 
    desc:"Dua shot espresso, susu lembut.", 
    price:26000, 
    img:"img/flat white.jpeg"
  },
  {
    cat:"Non-kopi", 
    name:"Matcha Latte", 
    desc:"Matcha dan susu, bisa dingin atau panas.", 
    price:25000, 
    img:"img/bayumatcha.wdp"
  },
  {
    cat:"Non-kopi", 
    name:"Teh Tarik Rempah", 
    desc:"Teh hitam, jahe, kayu manis.", 
    price:18000, 
    img:"img/teh tarek.jpeg"
  },
  {
    cat:"Makanan", 
    name:"Roti Bakar Cokelat Keju", 
    desc:"Roti tebal, cokelat, keju parut.", 
    price:20000, 
    img:"img/roti baoa.jpeg"
  },
  {
    cat:"Makanan", 
    name:"Jamur Enoki Khas Ngawi", 
    desc:"Mie berkedok jamur.", 
    price:1000000, 
    img:"img/jamur enoki.jpeg"
  },
  {
    cat:"Makanan", 
    name:"Dimsum Mentai", 
    desc:"Mentainya gurih, enak, mantap, kenapa hebat.", 
    price:20000, 
    img:"img/dimsum_mentai.jpg"
  },
  {
    cat:"Makanan", 
    name:"Nasi Ayam Sambal Matah", 
    desc:"Ayam suwir dan sambal segar.", 
    price:30000, 
    img:"img/nasi ayam.jpeg"
  }
];
