
function Kalkulasi (event) {
    event.preventDefault();
    // variable
    const beratBadan = parseFloat(document.querySelector('#weight').value)/100;
    const tinggi = parseFloat(document.querySelector('#height').value);
    const hasilBmi = document.getElementById('kategori-bmi');
    const penjelasan = document.getElementById('penjelasan');
    const solusi = document.getElementById('solusi');

    let BMI = (beratBadan / (tinggi * tinggi));
    hasil.innerHTML = BMI.toFixed(2);

    if (BMI < 18.5 ) {
        hasilBmi.innerHTML = " Kekurangan berat badan";
        penjelasan.innerHTML = "hasil BMI diantara 17.0 - 18.4 . Anda berada dalam kategori kekurangan berat badan. "
        solusi.innerHTML = "Solusi untuk kekurangan berat badan adalah dengan meeningkatkan asupan kalori, protein, dan karbohidrat. Hindari mengonsumsi junk food dan minuman soda "
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        hasilBmi.innerHTML = " Normal";
        penjelasan.innerHTML = "hasil BMI di antara 18.5 sampao 24.9. Anda berada dalam kategori berat badan normal. "
        solusi.innerHTML = " Konsumsi makanan bergizi dan olahraga secara teratur untuk menjaga berat badan."
    } else if (BMI >= 25 && BMI <= 29.9) {
        hasilBmi.innerHTML = " Kelebihan berat badan";
        penjelasan.innerHTML = " hasil BMI lebih dari 25. Anda berada dalam kategori kelebihan berat badan"
        solusi.innerHTML = " Solusi paling umum adalah dengan meningkatkan aktivitas fisik dan mengatur pola makan. Pilih makanan sehat dan hindari junk food serta cola"
    }
}