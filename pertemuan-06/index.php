<p>Konten HTML statis.</p>

<?php

const NAMA_MATA_KULIAH = "Pemrograman Web Dasar";
const PROFIL_GITHUB    = "satpamal";

// P6: PHP dasar dan pemrograman sisi peladen

// Bagian 1: Variabel dan konstanta
$nim            = "0344300002";
$namaMahasiswa  = "Yohanes Setiawan Japriadi";
$programStudi   = "SI";
$tahunAkademik  = "2026/2027";
$semester       = 2;
$ipk            = 3.75;
$statusAktif    = true;
$catatanTambahan = null;

// Bagian 2: Operator
$batasSemester  = 8;
$sisaSemester   = $batasSemester - $semester;
$semesterValid  = $semester >= 1 && $semester <= $batasSemester;
$statusSemester = ($semesterValid && $statusAktif) ? "Sesuai rentang" : "Perlu diperiksa";

// Bagian 3: Percabangan if-elseif-else
if ($semester < 3) {
    $keteranganSemester = "Semester awal";
} elseif ($semester <= 6) {
    $keteranganSemester = "Semester menengah";
} else {
    $keteranganSemester = "Semester akhir";
}

?>