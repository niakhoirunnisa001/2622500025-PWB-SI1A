-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 17 Nov 2026 pada 05.13
-- Versi server: 8.0.30
-- Versi PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `tbl_kontak_2622500025` (
  `id` int NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(225) NOT NULL,
  `semester` tinyint NOT NULL,
  `tanggal` date NOT NULL,
  `jenis_pesan` varchar(20) NOT NULL,
  `minat` varchar(50) NOT NULL,
  `prodi` varchar(2) NOT NULL,
  `pesan` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `tbl_kontak_2622500025`
--

INSERT INTO `tbl_kontak_2622500025` (`id`, `nama`, `email`, `semester`, `tanggal`, `jenis_pesan`, `minat`, `prodi`, `pesan`) VALUES
(1, 'Nia Khoirunnisa (Nuria)', 'nia01808@gmail.com', 2, '2026-11-15', 'saran', 'HTML, CSS', 'TI', 'rajin2 belajar, jangan sampai menyesal kemudian atau ngeribetin dosen');


ALTER TABLE `tbl_kontak_2622500025`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `tbl_kontak_2622500025`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

