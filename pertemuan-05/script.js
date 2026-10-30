const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const isOpen = navMenu.classList.toggle("nav-open");
navMenu.classList.contains("nav-open");
navMenu.classList.toggle("nav-open");

const nama = namaInput.value.trim();
const email = emailInput.value.trim();
const semester = Number(semesterInput.value);
const tanggal = tanggalInput.value;

const jenisPesan = document.querySelector('input[name="jenis_pesan"]:checked');
const topikDipilih = document.querySelectorAll('input[name="minat"]:checked');

const prodi = prodiInput.value;
const pesan = pesanInput.value.trim();
elemen.textContent = "teks baru";

const formFeedback = document.getElementById("formFeedback");
formFeedback.textContent = "Form berhasil divalidasi.";
formFeedback.textContent = "";

if (!jenisPesan) {
  formFeedback.textContent = "Pilih jenis pesan.";
  return;
}
if (topikDipilih.length === 0) {
  formFeedback.textContent = "Pilih minimal satu topik yang diminati.";
  return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  formFeedback.textContent = "Masukkan alamat email yang valid.";
  return;
}

if (semesterInput.value === "" || semester < 1 || semester > 14) {
  formFeedback.textContent = "Semester harus diisi dengan angka 1 sampai 14.";
  return;
}

if (nama.length < 3 || nama.length > 50) {
  formFeedback.textContent = "Nama lengkap harus diisi 3 sampai 50 karakter.";
  return;
}

if (tanggal === "") {
  formFeedback.textContent = "Tanggal kunjungan harus diisi.";
  return;
}

if (prodi === "") {
  formFeedback.textContent = "Pilih program studi.";
  return;
}

if (pesan.length === 0) {
  formFeedback.textContent = "Pesan harus diisi.";
  return;
}
if (pesan.length > 300) {
  formFeedback.textContent = "Pesan maksimal 300 karakter.";
  return;
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form berhasil dikirim!");
});

contactForm.addEventListener("input", () => {
  formFeedback.textContent = "";
});

contactForm.addEventListener("reset", () => {
  formFeedback.textContent = "";
});

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", isOpen);
  if (isOpen) {
    navToggle.setAttribute("aria-label", "Tutup navigasi");
  } else {
    navToggle.setAttribute("aria-label", "Buka navigasi");
  }
});
