// Menggunakan List (Array) 
let listMahasiswa = ["Dwi", "Putro", "Bagus"];
listMahasiswa.push("Sugianto"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Dwi", "Putro", "Bagus", "Sugianto"]

// Menggunakan Set
let setMahasiswa = new Set(["Dwi", "Putro", "Bagus"]);
setMahasiswa.add("Sugianto");
setMahasiswa.add("Dwi"); // Tidak akan menambahkan karena Dwi sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Dwi", "Putro", "Bagus", "Sugianto"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Dwi", 88);
mapNilai.set("Putro", 92);
mapNilai.set("Bagus", 85);
console.log(mapNilai.get("Dwi")); // Output: 88
