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

    // Kalkulasi BMI
    let BMI = beratBadan / (tinggi * tinggi);
    nilaiBmi.innerHTML = BMI.toFixed(2); // Menampilkan BMI dengan 2 angka di belakang koma

    // Kategori BMI
    if (BMI < 18.5) {
        hasilBmi.innerHTML = "Kekurangan berat badan";
        keteranganBmi.innerHTML = "Anda memiliki berat badan kurang dari normal";
        penjelasan.innerHTML = "Hasil BMI diantara 17.0 - 18.4. Anda berada dalam kategori kekurangan berat badan.";
        solusi.innerHTML = "Solusi untuk kekurangan berat badan adalah dengan meningkatkan asupan kalori, protein, dan karbohidrat. Hindari mengonsumsi junk food dan minuman soda.";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        hasilBmi.innerHTML = "Normal";
        keteranganBmi.innerHTML = "Anda memiliki berat badan normal";
        penjelasan.innerHTML = "Hasil BMI di antara 18.5 sampai 24.9. Anda berada dalam kategori berat badan normal.";
        solusi.innerHTML = "Konsumsi makanan bergizi dan olahraga secara teratur untuk menjaga berat badan.";
    } else if (BMI >= 25 && BMI <= 29.9) {
        hasilBmi.innerHTML = "Kelebihan berat badan";
        keteranganBmi.innerHTML = "Anda memiliki berat badan lebih dari normal";
        penjelasan.innerHTML = "Hasil BMI lebih dari 25. Anda berada dalam kategori kelebihan berat badan.";
        solusi.innerHTML = "Solusi paling umum adalah dengan meningkatkan aktivitas fisik dan mengatur pola makan. Pilih makanan sehat dan hindari junk food serta minuman bersoda.";
    } else {
        hasilBmi.innerHTML = "Obesitas";
        keteranganBmi.innerHTML = "Anda memiliki berat badan dalam kategori obesitas";
        penjelasan.innerHTML = "Hasil BMI lebih dari 30. Anda berada dalam kategori obesitas.";
        solusi.innerHTML = "Segera konsultasikan dengan dokter atau ahli gizi untuk penanganan lebih lanjut.";
    }

    // Menampilkan hasil BMI
    const formResult = document.querySelector('.result');
    formResult.classList.remove('hidden');
}
    
