// Fungsi generik menggunakan pola
function getElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    throw new Error("Indeks di luar jangkauan");
}

let angka = [42, 58, 74]; // Modifikasi angka
let kata = ["satu", "dua", "tiga"]; // Modifikasi kata

console.log(getElementAtIndex(angka, 1)); // Output: 58
console.log(getElementAtIndex(kata, 0)); // Output: "satu"
