//alert("belajar java script");
function kirim() {
//ambil value nama
let nama = document.getElementById("nama").value;
console.log("nama :" + nama);

let saran = document.getElementById("saran").value;
console.log("saran :" + saran);

//tampilkan nama  ke ul
//document.getElementById('list-pesan').innerHTML += "<li>" + nama  +" "+  saran + "</li>";

//tampilkan nama dan saran ke ul
document.getElementById('list-pesan').innerHTML += `<tr><td>${nama}</td><td>${saran}</td></tr>`;

//document.getElementById('list-pesan').innerHTML += `<li>${nama}</li>`;
}

