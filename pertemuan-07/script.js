const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", isOpen);
  if (isOpen) {
    navToggle.setAttribute("aria-label", "Tutup navigasi");
  } else {
    navToggle.setAttribute("aria-label", "Buka navigasi");
  }
});
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");
const tanggalInput = document.getElementById("tanggal");
const prodiInput = document.getElementById("prodi");
const pesanInput = document.getElementById("pesan");

formFeedback.textContent = "Form berhasil divalidasi.";
formFeedback.className = "form-feedback-success";
contactForm.submit();

contactForm.addEventListener("reset", () => {
  formFeedback.textContent = "";
});
contactForm.addEventListener("input", () => {
  formFeedback.textContent = "";
});
