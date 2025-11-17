// Countdown Timer
const weddingDate = new Date("January 24, 2026 00:00:00").getTime(); // Ganti tanggal nikah kamu

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById('days').innerText = "00";
    document.getElementById('hours').innerText = "00";
    document.getElementById('minutes').innerText = "00";
    document.getElementById('seconds').innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);

// Fungsi Modal Formulir
function openForm() {
  document.getElementById('formModal').style.display = 'block';
}

function closeForm() {
  document.getElementById('formModal').style.display = 'none';
}

// Fungsi Tombol "Petunjuk Ke Lokasi" (Sudah Benar)
function openMap() {
  const location = 'Gedung Sasana Krida.1, RT.1/RW.5, Jatinegara Kaum, Kec. Pulo Gadung, Kota Jakarta Timur';
  const encodedLocation = encodeURIComponent(location);
  window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank');
}

// Musik Latar Otomatis Saat Halaman Dibuka
window.addEventListener('load', function () {
  const audio = document.getElementById('bg-music');

  // Coba mainkan otomatis saat halaman dimuat
  const playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Berhasil otomatis → ubah tombol jadi pause
        document.getElementById('play-music').textContent = '⏸️';
        console.log("Musik otomatis jalan!");
      })
      .catch(error => {
        // Gagal otomatis → tombol tetap muncul
        console.log("Autoplay diblokir — tombol play muncul");
        document.getElementById('play-music').textContent = '🎵';

        // Saat tombol diklik → coba mainkan lagi
        document.getElementById('play-music').addEventListener('click', function () {
          audio.play().then(() => {
            this.textContent = '⏸️';
          }).catch(e => {
            alert("Silakan klik tombol musik lagi untuk memainkan lagu.");
          });
        });
      });
  }
});

// Fungsi tombol play/pause manual
document.getElementById('play-music').addEventListener('click', function () {
  const audio = document.getElementById('bg-music');
  if (audio.paused) {
    audio.play();
    this.textContent = '⏸️';
  } else {
    audio.pause();
    this.textContent = '🎵';
  }
});

// Animasi Scroll
AOS.init({
  duration: 1000,
  once: true,
});

// Fungsi Navigasi Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}