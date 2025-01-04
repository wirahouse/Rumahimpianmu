window.addEventListener("resize", () => {
  // Pastikan slider tetap berfungsi dengan baik di layar kecil
  reloadSlider();
});


// Navigasi card ke bagian tertentu
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target"); // Mendapatkan ID tujuan
    const targetElement = document.getElementById(targetId); // Elemen target
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Gulir halus
    }
  });
});

// Navigasi link header
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah aksi default
    const targetId = this.getAttribute("href").substring(1); // Mendapatkan ID tujuan
    const targetElement = document.getElementById(targetId); // Elemen target
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Gulir halus
    }
  });
});

// Menangani scroll untuk menampilkan header
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const section2 = document.getElementById("section-2").offsetTop;
  const section5 = document.getElementById("section-5").offsetTop;
  const scrollPosition = window.scrollY;

  // Tampilkan header jika posisi scroll di halaman 2, 3, atau 4
  if (
    scrollPosition >= section2 - 50 &&
    scrollPosition < section5 + window.innerHeight
  ) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");
  }
});

// Menambahkan event listener pada gambar dengan id 'logo-img'
document.getElementById("logo-img").addEventListener("click", function () {
  // Mendapatkan elemen dengan id 'section-1'
  const section1 = document.getElementById("section-1");
  if (section1) {
    // Menggulir ke 'section-1' dengan efek gulir halus
    section1.scrollIntoView({ behavior: "smooth" });
  }
});

document.getElementById("myImage").addEventListener("click", function () {
  // Mendapatkan elemen-elemen yang teksnya akan diubah
  var heading = document.getElementById("myHeading");
  var paragraph1 = document.getElementById("myParagraph1");
  var paragraph2 = document.getElementById("myParagraph2");

  // Menambahkan kelas "changing" untuk memulai transisi
  heading.classList.add("changing");
  paragraph1.classList.add("changing");
  paragraph2.classList.add("changing");

  // Tunggu beberapa waktu untuk memungkinkan animasi transisi selesai
  setTimeout(function () {
    // Mengubah teks dari elemen-elemen tersebut
    if (heading.textContent === "Apa itu WiraHouse?") {
      heading.textContent = "Visi - Misi";
    } else {
      heading.textContent = "Apa itu WiraHouse?";
    }

    // Memeriksa dan mengubah konten paragraf dengan innerHTML agar dapat memasukkan <br>
    if (
      paragraph1.innerHTML.includes(
        "Wirahouse adalah perusahaan desain dan konstruksi"
      )
    ) {
      // Jika teks paragraph1 mengandung bagian dari teks awal, ubah menjadi "Hello"
      paragraph1.innerHTML =
        "<b>Visi</b><br>Menjadi usaha desain rumah terpercaya dan dapat diandalkan yang menghadirkan hunian fungsional, estetis, nyaman serta modern sesuai kebutuhan setiap klien. <br /><br> <b>Misi</b> <ol class='custom-margin'><li>Menghasilkan desain rumah yang kreatif, inovatif, sesuai kebutuhan serta gaya hidup klien.</li><li>Memberikan pelayanan yang profesional pada kepuasan pelanggan dalam tahap perencanaan.</li><li>Mengutamakan efisiensi, kualitas, serta ketepatan waktu dalam setiap penyelesaian proyek desain.</li><li>Selalu mengikuti tren dan perkembangan zaman dan memberikan solusi terbaik bagi klien.</li></ol>";
    } else {
      paragraph1.innerHTML =
        'Wirahouse adalah perusahaan desain dan konstruksi yang hadir untuk mewujudkan impian Anda. Dengan semangat inovasi dan keberanian, kami menawarkan layanan desain rumah hingga gedung, kontraktor, renovasi, dan visualisasi 3D realistis. <br /><br> Nama Wirahouse diambil dari kata "Wira" yang berarti keberanian, dan "House" yang melambangkan fokus kami pada properti. Kami percaya bahwa setiap rumah adalah tempat di mana impian dimulai, dan bersama Wirahouse, rumah impian Anda akan menjadi kenyataan.';
    }

    // Mengatur margin di <ol>
    const olElement = paragraph1.querySelector("ol");
    if (olElement) {
      // Pastikan elemen <ol> ada
      olElement.style.marginTop = "0px";
      olElement.style.marginBottom = "0px";
      olElement.style.marginLeft = "-15px"; // Sesuaikan margin kiri jika perlu
    }

    if (
      paragraph2.innerHTML === "<b>Kreativitas Tanpa Batas di Wirahouse</b>"
    ) {
      paragraph2.innerHTML = "<b>Wirahouse – Rumah Impianmu</b>";
    } else {
      paragraph2.innerHTML = "<b>Kreativitas Tanpa Batas di Wirahouse</b>";
    }

    // Hapus kelas "changing" setelah animasi selesai
    heading.classList.remove("changing");
    paragraph1.classList.remove("changing");
    paragraph2.classList.remove("changing");
  }, 500); // Waktu yang sesuai dengan durasi transisi (0.5s)
});

let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 4000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 4000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};

