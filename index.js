window.onload = function() {
  document.getElementById("splash").style.opacity = 0;
  setTimeout(function() {
    document.getElementById("splash").style.display = "none";
  }, 1000); 
};


// Ambil semua section dan nav links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

// Buat observer
// Pilih section yang paling terlihat (intersectionRatio terbesar) supaya penandaan lebih stabil
const observer = new IntersectionObserver((entries) => {
  let maxEntry = null;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!maxEntry || entry.intersectionRatio > maxEntry.intersectionRatio) {
        maxEntry = entry;
      }
    }
  });

  if (maxEntry) {
    // Hapus class active dari semua link
    navLinks.forEach(link => link.classList.remove('butts'));

    // Tambah class active ke link yang sesuai
    const activeLink = document.querySelector(`.nav-link[href="#${maxEntry.target.id}"]`);
    if (activeLink) {
      activeLink.classList.add('butts');
    }
  }
}, {
  threshold: [0.1, 0.5, 0.75], // deteksi pada beberapa level
  rootMargin: '0px 0px -50% 0px' // offset dari viewport; sesuaikan jika perlu
});

// Observe setiap section
sections.forEach(section => observer.observe(section));

const komponen = [
    {"name" : "Sensor Infrared", "desk": "Mendeteksi keberadaan tangan untuk mengaktifkan aliran air secara otomatis.", "category": "Sensor", "img": "infared.jpg"},
    {"name" : "Pompa Air Mini 6V", "desk": "Mengalirkan air atau sabun cair secara otomatis.", "category": "Pompa", "img": "pompa.jpg"},
    {"name" : "Transistor BD140 (PNP)", "desk": "Menghubungkan arus dari sumber daya ke pompa ketika mendapat sinyal dari sensor.", "category": "Transistor", "img": "transistor.jpg"},
    {"name" : "Resistor 330 Ω", "desk": "Membatasi arus ke basis transistor agar tidak terlalu besar.", "category": "Resistor", "img": "resistor.jpg"},
    {"name" : "Selang Waterpass", "desk": "Menyalurkan air atau sabun dari pompa ke tangan pengguna.", "category": "Selang", "img": "selang.jpg"},
    {"name" : "Kabel Charger", "desk": "Menjadi sumber daya 5V dari port USB.", "category": "Kabel", "img": "kabelc.jpg"},
    {"name" : "Kabel", "desk": "Menghubungkan sensor, transistor, pompa, dan sumber daya dalam rangkaian.", "category": "Kabel", "img": "wire.jpg"},
]

const kompo_sect = document.getElementsByClassName('kompo_sect')[0];
let kompo_content = '';

komponen.forEach(kompo => {
    kompo_content += `
    <div class="card">
                <div class="img_bx">
                    <img src="img/${kompo.img}" alt="${kompo.name}">
                    <div class="over">
                        <p>${kompo.category}</p>
                    </div>
                </div>
                    <p class="nama_kompo">${kompo.name}</p>
                    <p class="desk_kompo">${kompo.desk}</p>
            </div>
    `
})

if (kompo_sect) {
    kompo_sect.innerHTML = kompo_content;
}

const fitur = [
    {"name" : "Higenis", "desk": "Mengurangi kontak langsung dengan keran.", "icon": "fa-solid fa-hand-sparkles"},
    {"name" : "Praktis", "desk": "Mudah di gunakan semua orang.", "icon": "fa-solid fa-burst"},
    {"name" : "Hemat", "desk": "Menghemat penggunaan air dan sabun", "icon": "fa-solid fa-droplet"},
    {"name" : "Scaleable", "desk": "Bisa di kembangkan lebih lanjut.", "icon": "fa-solid fa-maximize"},
]

const fitur_sect = document.getElementsByClassName('fitur_sect')[0];
let fitur_content = '';

fitur.forEach(fit => {
    fitur_content += `
    <div class="card">
                <p class="icon"><i class="${fit.icon}"></i></p>
                <p class="fitur_titel">${fit.name}</p>
                <p class="fitur_desk">${fit.desk}</p>
            </div>
    `
})

if (fitur_sect) {
    fitur_sect.innerHTML = fitur_content;
}