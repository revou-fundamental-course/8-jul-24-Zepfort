function Kalkulasi(event) {
    event.preventDefault();

    // Mendapatkan nilai dari Form
    const beratBadan = parseFloat(document.querySelector('#weight').value);
    const tinggi = parseFloat(document.querySelector('#height').value) / 100; // input tinggi dikonversi ke meter
    const hasilBmi = document.getElementById('kategori-bmi');
    const nilaiBmi = document.getElementById('nilai-bmi');
    const keteranganBmi = document.getElementById('keterangan-bmi');
    const penjelasan = document.getElementById('penjelasan');
    const solusi = document.getElementById('solusi');
    const kategoriBMI = document.getElementById('penyakit-kategori');
    const penyakitUmum = document.getElementById('penyakit-umum');

    // Kalkulasi BMI
    let BMI = beratBadan / (tinggi * tinggi);
    nilaiBmi.innerHTML = BMI.toFixed(2); // Menampilkan BMI dengan 2 angka di belakang koma

    // Kategori BMI
    if (BMI < 18.5) {
        hasilBmi.innerHTML = "Kekurangan berat badan";
        keteranganBmi.innerHTML = "Anda memiliki berat badan kurang dari normal";
        penjelasan.innerHTML = "Hasil BMI diantara 17.0 - 18.4. Anda berada dalam kategori kekurangan berat badan.";
        solusi.innerHTML = "Solusi untuk kekurangan berat badan adalah dengan meningkatkan asupan kalori, protein, dan karbohidrat. Hindari mengonsumsi junk food dan minuman soda.";
        penyakitUmum.innerHTML = "<li>Infertilitas</li> <li>Anemia</li> <li>Osteoporosis</li> <li>Sistem Imun Lemah</li>"
    } else if (BMI >= 18.5 && BMI <= 22.9) {
        hasilBmi.innerHTML = "Normal";
        keteranganBmi.innerHTML = "Anda memiliki berat badan normal";
        penjelasan.innerHTML = "Hasil BMI di antara 18.5 sampai 22.9. Anda berada dalam kategori berat badan normal.";
        solusi.innerHTML = "Konsumsi makanan bergizi dan olahraga secara teratur untuk menjaga berat badan.";
        kategoriBMI.innerHTML = "Jaga berat badan Anda agar terhindar dari berbagai penyakit"
    } else if (BMI >= 23 && BMI <= 24.9) {
        hasilBmi.innerHTML = "Anda memiliki berat badan berlebih";
        keteranganBmi.innerHTML = "Anda memiliki berat badan berlebih";
        penjelasan.innerHTML = "Hasil BMI di antara 23 sampai 24.9. Anda berada dalam kategori berat badan berlebih.";
        solusi.innerHTML = "Konsumsi makanan bergizi dan olahraga secara teratur untuk menurunkan berat badan Anda.";
        kategoriBMI.innerHTML = "Berat badan berleboh dapat menyebabkan berbagai masalah penyakit"
        penyakitUmum.innerHTML = "<li>Diabetes</li> <li>Hipertensi</li> <li>Sakit jantung</li> <li>Osteoathritis</li>"
    } else if (BMI >= 25 && BMI <= 29.9) {
        hasilBmi.innerHTML = "Obesitas I";
        keteranganBmi.innerHTML = "Anda memiliki berat badan obesitas I";
        penjelasan.innerHTML = "Hasil BMI lebih dari 25. Anda berada dalam kategori obesitas I.";
        solusi.innerHTML = "Solusi paling umum adalah dengan meningkatkan aktivitas fisik dan mengatur pola makan. Pilih makanan sehat dan hindari junk food serta minuman bersoda.";
        kategoriBMI.innerHTML = "Obesitas dapat menyebabkan berbagai masalah penyakit"
        penyakitUmum.innerHTML = "<li>Diabetes</li> <li>Hipertensi</li> <li>Sakit jantung</li> <li>Osteoathritis</li>"
    } else {
        hasilBmi.innerHTML = "Obesitas II";
        keteranganBmi.innerHTML = "Anda memiliki berat badan obesitas II";
        penjelasan.innerHTML = "Hasil BMI lebih dari 30. Anda berada dalam kategori obesitas.";
        solusi.innerHTML = "Segera konsultasikan dengan dokter atau ahli gizi untuk penanganan lebih lanjut.";
        kategoriBMI.innerHTML = "Obesitas dapat menyebabkan berbagai masalah penyakit"
        penyakitUmum.innerHTML = "<li>Diabetes</li> <li>Hipertensi</li> <li>Sakit jantung</li> <li>Osteoathritis</li>"
    }

    // Menampilkan hasil BMI
    const formResult = document.querySelector('.form-general');
    formResult.classList.remove('hidden');

}



