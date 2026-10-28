/* ===================================
VEILORA BOUQUET
JAVASCRIPT UTAMA
=================================== */

/* NOMOR WHATSAPP TOKO */
const nomorWhatsApp = "628135600319";

/* DATA PRODUK */
const produk = [
{
id: 1,
nama: "Buket Mawar Mini",
harga: 25000,
kategori: "Artificial",
deskripsi: "Buket mawar mini yang manis dan cantik.",
foto: "assets/images/buket25k1.jpeg",
emoji: "🌹"
},
{
id: 2,
nama: "Buket Pink Mini",
harga: 25000,
kategori: "Artificial",
deskripsi: "Buket pink sederhana untuk hadiah kecil.",
foto: "assets/images/buket25k2.jpeg",
emoji: "🌸"
},
{
id: 3,
nama: "Buket Sweet Flower",
harga: 25000,
kategori: "Artificial",
deskripsi: "Buket cantik untuk orang tersayang.",
foto: "assets/images/buket25k3.jpeg",
emoji: "💐"
},
{
id: 4,
nama: "Buket Mawar Cantik",
harga: 25000,
kategori: "Artificial",
deskripsi: "Rangkaian mawar yang menarik dan elegan.",
foto: "assets/images/buket25k4.jpeg",
emoji: "🌷"
},
{
id: 5,
nama: "Buket Wisuda Mini",
harga: 25000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket25k5.jpeg",
emoji: "🎓"
},
{
id: 6,
nama: "Buket Wisuda Mini",
harga: 25000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket25k6.jpeg",
emoji: "🎓"
},
{
id: 7,
nama: "Buket Wisuda Mini",
harga: 25000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket25k7.jpeg",
emoji: "🎓"
},
{
id: 8,
nama: "Buket Wisuda Mini",
harga: 25000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket25k8.jpeg",
emoji: "🎓"
},
{
id: 9,
nama: "Buket Wisuda Mini",
harga: 30000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket30k1.jpeg",
emoji: "🎓"
},
{
id: 10,
nama: "Buket Wisuda Mini",
harga: 30000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket30k2.jpeg",
emoji: "🎓"
},
{
id: 11,
nama: "Buket Wisuda Mini",
harga: 45000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket45k1.jpeg",
emoji: "🎓"
},
{
id: 12,
nama: "Buket Wisuda Mini",
harga: 45000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket45k2.jpeg",
emoji: "🎓"
},
{
id: 13,
nama: "Buket Wisuda Mini",
harga: 45000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket45k3.jpeg",
emoji: "🎓"
},
{
id: 14,
nama: "Buket Wisuda Mini",
harga: 59000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket59k1.jpeg",
emoji: "🎓"
},
{
id: 15,
nama: "Buket Wisuda Mini",
harga: 59000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket59k2.jpeg",
emoji: "🎓"
},
{
id: 16,
nama: "Buket Wisuda Mini",
harga: 59000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket59k3.jpeg",
emoji: "🎓"
},
{
id: 17,
nama: "Buket Wisuda Mini",
harga: 59000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket59k4.jpeg",
emoji: "🎓"
},
{
id: 18,
nama: "Buket Wisuda Mini",
harga: 59000,
kategori: "Wisuda",
deskripsi: "Buket mini untuk merayakan kelulusan.",
foto: "assets/images/buket59k5.jpeg",
emoji: "🎓"
},
{
id: 19,
nama: "Buket Graduation",
harga: 59000,
kategori: "Wisuda",
deskripsi: "Buket wisuda cantik dan berkesan.",
foto: "assets/images/buket59k6.jpeg",
emoji: "🎁"
},
{
id: 20,
nama: "Buket Pink Romance",
harga: 59000,
kategori: "Hadiah",
deskripsi: "Buket romantis untuk orang tersayang.",
foto: "assets/images/buket59k7.jpeg",
emoji: "💕"
},
{
id: 21,
nama: "Buket Special Gift",
harga: 59000,
kategori: "Hadiah",
deskripsi: "Hadiah spesial untuk momen berharga.",
foto: "assets/images/buket59k8.jpeg",
emoji: "💝"
},
{
id: 22,
nama: "Buket Luxury",
harga: 85000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket85k1.jpeg",
emoji: "🌺"
},
{
id: 23,
nama: "Buket Luxury",
harga: 85000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket85k2.jpeg",
emoji: "🌺"
},
{
id: 24,
nama: "Buket Luxury",
harga: 85000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket85k3.jpeg",
emoji: "🌺"
},
{
id: 25,
nama: "Buket Luxury",
harga: 85000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket85k4.jpeg",
emoji: "🌺"
},
{
id: 26,
nama: "Buket Luxury",
harga: 119000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket119k1.jpeg",
emoji: "🌺"
},
{
id: 27,
nama: "Buket Luxury",
harga: 119000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket119k2.jpeg",
emoji: "🌺"
},
{
id: 28,
nama: "Buket Luxury",
harga: 119000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket119k3.jpeg",
emoji: "🌺"
},
{
id: 29,
nama: "Buket Luxury",
harga: 119000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket119k4.jpeg",
emoji: "🌺"
},
{
id: 30,
nama: "Buket Luxury",
harga: 150000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket150k1.jpeg",
emoji: "🌺"
},
{
id: 31,
nama: "Buket Luxury",
harga: 150000,
kategori: "Hadiah",
deskripsi: "Buket mewah dengan tampilan elegan.",
foto: "assets/images/buket150k2.jpeg",
emoji: "🌺"
}
];

/* VARIABEL KERANJANG DAN FILTER */
let keranjang = [];
let kategoriAktif = "Semua";

/* FORMAT HARGA RUPIAH */
function formatRupiah(harga) {
return new Intl.NumberFormat("id-ID", {
style: "currency",
currency: "IDR",
maximumFractionDigits: 0
}).format(harga);
}

/* MEMBUAT PLACEHOLDER FOTO */
function tampilkanPlaceholder(areaFoto, emoji, nama) {
const placeholder = document.createElement("div");
placeholder.className = "foto-placeholder";

const ikon = document.createElement("span");
ikon.textContent = emoji || "💐";

const judul = document.createElement("p");
judul.textContent = nama;

const keterangan = document.createElement("small");
keterangan.textContent = "Foto produk bisa diganti sendiri";

placeholder.appendChild(ikon);
placeholder.appendChild(judul);
placeholder.appendChild(keterangan);

areaFoto.appendChild(placeholder);

}

/* MENAMPILKAN SEMUA PRODUK */
function tampilkanProduk(dataProduk = produk) {
const daftar = document.getElementById("daftarProduk");

if (!daftar) {
    console.error('Elemen dengan ID "daftarProduk" tidak ditemukan.');
    return;
}

daftar.innerHTML = "";

if (dataProduk.length === 0) {
    const pesanKosong = document.createElement("div");
    pesanKosong.className = "produk-kosong";

    const judul = document.createElement("h3");
    judul.textContent = "Produk tidak ditemukan 😔";

    const keterangan = document.createElement("p");
    keterangan.textContent =
        "Coba kata pencarian atau rentang harga lainnya.";

    pesanKosong.appendChild(judul);
    pesanKosong.appendChild(keterangan);

    daftar.appendChild(pesanKosong);
    return;
}

dataProduk.forEach(function(item) {
    const kartu = document.createElement("article");
    kartu.className = "kartu-produk";

    /* FOTO PRODUK */
    const areaFoto = document.createElement("div");
    areaFoto.className = "foto-produk";

    /* LABEL PRODUK */
    const label = document.createElement("span");
    label.className = "label-produk";
    label.textContent = item.kategori;

    areaFoto.appendChild(label);

    /* FOTO DARI FOLDER */
    if (item.foto && item.foto.trim() !== "") {
        const gambar = document.createElement("img");

        gambar.src = item.foto;
        gambar.alt = item.nama;
        gambar.loading = "lazy";

        gambar.onerror = function() {
            this.remove();

            if (!areaFoto.querySelector(".foto-placeholder")) {
                tampilkanPlaceholder(
                    areaFoto,
                    item.emoji,
                    item.nama
                );
            }
        };

        areaFoto.appendChild(gambar);
    } else {
        tampilkanPlaceholder(
            areaFoto,
            item.emoji,
            item.nama
        );
    }

    /* INFORMASI PRODUK */
    const informasi = document.createElement("div");
    informasi.className = "info-produk";

    const nama = document.createElement("h3");
    nama.textContent = item.nama;

    const deskripsi = document.createElement("p");
    deskripsi.textContent = item.deskripsi;

    const harga = document.createElement("p");
    harga.className = "harga";
    harga.textContent = formatRupiah(item.harga);

    /* TOMBOL TAMBAH */
    const tombol = document.createElement("button");
    tombol.className = "tombol-tambah";
    tombol.textContent = "+ Tambah ke Keranjang";

    tombol.addEventListener("click", function() {
        tambahKeranjang(item.id);
    });

    informasi.appendChild(nama);
    informasi.appendChild(deskripsi);
    informasi.appendChild(harga);
    informasi.appendChild(tombol);

    kartu.appendChild(areaFoto);
    kartu.appendChild(informasi);

    daftar.appendChild(kartu);
});

}

/* FILTER HARGA DAN PENCARIAN */
function cariProduk() {
const input = document.getElementById("pencarianProduk");

const kataKunci = input
    ? input.value.trim().toLowerCase()
    : "";

const hasil = produk.filter(function(item) {
    const cocokNama = item.nama
        .toLowerCase()
        .includes(kataKunci);

    const cocokKategori = item.kategori
        .toLowerCase()
        .includes(kataKunci);

    const cocokDeskripsi = item.deskripsi
        .toLowerCase()
        .includes(kataKunci);

    const cocokPencarian =
        cocokNama || cocokKategori || cocokDeskripsi;

    let cocokHarga = true;

    /*
      SEMUA:
      Tidak membatasi harga.
    */
    if (kategoriAktif === "Semua") {
        cocokHarga = true;
    }

    /*
      25K–55K:
      Rp25.000 sampai Rp55.000.
    */
    else if (kategoriAktif === "25-55") {
        cocokHarga =
            item.harga >= 25000 &&
            item.harga <= 55000;
    }

    /*
      55K–100K:
      Di atas Rp55.000 sampai Rp100.000.
    */
    else if (kategoriAktif === "55-100") {
        cocokHarga =
            item.harga > 55000 &&
            item.harga <= 100000;
    }

    /*
      100K–200K:
      Di atas Rp100.000 sampai Rp200.000.
    */
    else if (kategoriAktif === "100-200") {
        cocokHarga =
            item.harga > 100000 &&
            item.harga <= 200000;
    }

    return cocokPencarian && cocokHarga;
});

tampilkanProduk(hasil);

}

/* MENGAKTIFKAN TOMBOL FILTER */
function aturFilterKategori() {
const tombolFilter = document.querySelectorAll(".filter-button");

tombolFilter.forEach(function(tombol) {
    tombol.addEventListener("click", function() {
        tombolFilter.forEach(function(item) {
            item.classList.remove("active");
        });

        tombol.classList.add("active");

        kategoriAktif = tombol.dataset.kategori || "Semua";

        cariProduk();
    });
});

}

/* MENAMBAHKAN PRODUK KE KERANJANG */
function tambahKeranjang(id) {
const item = produk.find(function(p) {
return p.id === id;
});

if (!item) {
    alert("Produk tidak ditemukan.");
    return;
}

keranjang.push(item);

perbaruiJumlahKeranjang();

alert(item.nama + " berhasil ditambahkan ke keranjang!");

}

/* MEMPERBARUI JUMLAH KERANJANG */
function perbaruiJumlahKeranjang() {
const jumlah = document.getElementById("jumlahKeranjang");

if (jumlah) {
    jumlah.textContent = keranjang.length;
}

}

/* MENGHITUNG TOTAL HARGA */
function hitungTotalKeranjang() {
return keranjang.reduce(function(total, item) {
return total + item.harga;
}, 0);
}

/* MELIHAT KERANJANG DAN MENGHAPUS PRODUK */
function lihatKeranjang() {
if (keranjang.length === 0) {
alert("Keranjang kamu masih kosong.");
return;
}

let pesan = "KERANJANG VEILORA BOUQUET\n\n";

keranjang.forEach(function(item, index) {
    pesan +=
        (index + 1) + ". " + item.nama + "\n" +
        "Harga: " + formatRupiah(item.harga) + "\n\n";
});

pesan +=
    "TOTAL: " + formatRupiah(hitungTotalKeranjang()) +
    "\n\nKetik 0 untuk memesan melalui WhatsApp." +
    "\nKetik nomor produk untuk menghapusnya." +
    "\nTekan Batal untuk kembali.";

const pilihan = prompt(pesan);

if (pilihan === null) {
    return;
}

const input = pilihan.trim();

if (input === "") {
    alert("Silakan masukkan pilihan.");
    return;
}

const nomor = Number(input);

/* PESAN VIA WHATSAPP */
if (nomor === 0) {
    pesanWhatsApp();
    return;
}

/* VALIDASI NOMOR PRODUK */
if (
    !Number.isInteger(nomor) ||
    nomor < 1 ||
    nomor > keranjang.length
) {
    alert("Nomor produk tidak valid.");
    return;
}

/* HAPUS PRODUK */
const produkDihapus = keranjang.splice(nomor - 1, 1)[0];

perbaruiJumlahKeranjang();

alert(produkDihapus.nama + " berhasil dihapus dari keranjang.");

if (keranjang.length > 0) {
    lihatKeranjang();
} else {
    alert("Keranjang kamu sekarang kosong.");
}

}

/* MEMBUAT PESAN PESANAN WHATSAPP */
function pesanWhatsApp() {
if (keranjang.length === 0) {
alert("Keranjang kamu masih kosong.");
return;
}

const daftarPesanan = keranjang.map(function(item) {
    return "- " + item.nama + " — " + formatRupiah(item.harga);
}).join("\n");

const total = hitungTotalKeranjang();

const pesan =
    "Halo Veilora Bouquet, saya ingin memesan:\n\n" +
    daftarPesanan +
    "\n\nTotal: " + formatRupiah(total) +
    "\n\nMohon informasi lebih lanjut mengenai pesanan saya. Terima kasih.";

const url =
    "https://wa.me/" +
    nomorWhatsApp +
    "?text=" +
    encodeURIComponent(pesan);

window.open(url, "_blank");

}

/* MENGHUBUNGI TOKO */
function hubungiWhatsApp() {
const pesan =
"Halo Veilora Bouquet, saya ingin bertanya tentang buket bunga.";

const url =
    "https://wa.me/" +
    nomorWhatsApp +
    "?text=" +
    encodeURIComponent(pesan);

window.open(url, "_blank");

}

/* MENU NAVIGASI HP */
function aturMenuMobile() {
const tombolMenu = document.getElementById("menuToggle");
const menuNavigasi = document.getElementById("navMenu");

if (!tombolMenu || !menuNavigasi) {
    return;
}

tombolMenu.addEventListener("click", function() {
    const terbuka = menuNavigasi.classList.toggle("open");

    tombolMenu.setAttribute(
        "aria-expanded",
        String(terbuka)
    );

    tombolMenu.textContent = terbuka ? "✕" : "☰";
});

const tautanMenu = menuNavigasi.querySelectorAll("a");

tautanMenu.forEach(function(tautan) {
    tautan.addEventListener("click", function() {
        menuNavigasi.classList.remove("open");
        tombolMenu.setAttribute("aria-expanded", "false");
        tombolMenu.textContent = "☰";
    });
});

}

/* TAHUN OTOMATIS DI FOOTER */
function tampilkanTahun() {
const elemenTahun = document.getElementById("tahunSekarang");

if (elemenTahun) {
    elemenTahun.textContent = new Date().getFullYear();
}

}

/* MENJALANKAN WEBSITE */
document.addEventListener("DOMContentLoaded", function() {
tampilkanProduk();

perbaruiJumlahKeranjang();

aturFilterKategori();

aturMenuMobile();

tampilkanTahun();

const inputPencarian = document.getElementById("pencarianProduk");

if (inputPencarian) {
    inputPencarian.addEventListener("input", cariProduk);
}

const tombolKeranjang = document.getElementById("tombolKeranjang");

if (tombolKeranjang) {
    tombolKeranjang.addEventListener("click", lihatKeranjang);
}

const tombolWhatsApp = document.getElementById("tombolWhatsApp");

if (tombolWhatsApp) {
    tombolWhatsApp.addEventListener("click", hubungiWhatsApp);
}

const tombolWhatsAppFooter =
    document.getElementById("tombolWhatsAppFooter");

if (tombolWhatsAppFooter) {
    tombolWhatsAppFooter.addEventListener(
        "click",
        hubungiWhatsApp
    );
}

console.log("Veilora Bouquet berhasil dimuat!");

});