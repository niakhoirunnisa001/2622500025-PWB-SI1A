
<?php

// Fungsi untuk membersihkan teks agar aman ditampilkan di HTML.
function bersihkan($teks)
{
    return htmlspecialchars($teks ?? "", ENT_QUOTES, "UTF-8");
}

// Fungsi untuk menampilkan teks dalam format tebal (bold).
function tebal($teks)
{
    return "<strong>" . bersihkan($teks) . "</strong>";
}
