const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const isOpen = navMenu.classList.toggle("nav-open");
navMenu.classList.contains("nav-open");
navMenu.classList.toggle("nav-open");

const contactForm = document.getElementById("contactForm");

const jenisPesan = document.querySelector('input[name="jenis_pesan"]:checked');
if (!jenisPesan) {
  // Proses validasi ketika jenis pesan belum dipilih.
}
const topikDipilih = document.querySelectorAll('input[name="minat"]:checked');
if (topikDipilih.length === 0) {
  // Proses validasi ketika belum ada topik yang dipilih.
}
const namaInput = document.getElementById("nama");
const nama = namaInput.value;
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");
const email = emailInput.value;
const semester = semesterInput.value;

elemen.textContent = "teks baru";
const formFeedback = document.getElementById("formFeedback");
formFeedback.textContent = "Form berhasil divalidasi.";
formFeedback.textContent = "";

navToggle.addEventListener("click", () => {
  console.log("Tombol navigasi diklik.");
});

// contactForm.addEventListener("submit", (event) => {
//   console.log("Form dikirim.");
// });

contactForm.addEventListener("input", () => {
  formFeedback.textContent = "";
});

contactForm.addEventListener("reset", () => {
  formFeedback.textContent = "";
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
