// Mil=0.621*km

function hesapla() {
  var sayi = document.getElementById("uzunluk").value;
  sayi = Number(sayi);
  var mil = 0.621 * sayi;
  alert(mil);
}

var hesapBtn = document.getElementById("hesapla");
hesapBtn.onclick = hesapla;
