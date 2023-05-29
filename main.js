// * datalar
const a1 = 6; // a1konum=[1,1]
const a2 = 4; // 21konum=[1,2]
const a3 = 3; // a3konum=[1,3]
const a4 = 9; // a4konum=[2,1]
const a5 = 8; // a5konum=[2,2]
const a6 = 2; // a6konum=[2,3]
const a7 = 5; // a7konum=[3,1]
const a8 = 7; // a8konum=[3,2]
const a9 = 1; // a9konum=[3,3]

// * Verinin alınması
const veri = document.querySelector("#giriş");
const button = document.querySelector("#button");
button.addEventListener("click", () => {
  // ! Algoritma

  const giriş = veri.value;
  const array = giriş.split("").map(Number);
  console.log(array);

  var count = 0;

  for (var i = 0; i < array.length - 1; i++) {
    const sayi1 = array[i];
    const sayi2 = array[i + 1];

    if (sayi1 === a1) {
      if (
        sayi2 === a3 ||
        sayi2 === a6 ||
        sayi2 === a7 ||
        sayi2 === a8 ||
        sayi2 === a9
      ) {
        count = count + 2;
      } else if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    } else if (sayi1 === a2) {
      if (sayi2 === a7 || sayi2 === a8 || sayi2 === a9) {
        count = count + 2;
      } else if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    } else if (sayi1 === a3) {
      if (
        sayi2 === a1 ||
        sayi2 === a4 ||
        sayi2 === a7 ||
        sayi2 === a8 ||
        sayi2 === a9
      ) {
        count = count + 2;
      } else if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    }
    if (sayi1 === a4) {
      if (sayi2 === a3 || sayi2 === a6 || sayi2 === a9) {
        count = count + 2;
      } else if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    } else if (sayi1 === a5) {
      if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    } else if (sayi1 === a6) {
      if (sayi2 === a1 || sayi2 === a4 || sayi2 === a7) {
        count = count + 2;
      } else if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    }
    if (sayi1 === a7) {
      if (
        sayi2 === a1 ||
        sayi2 === a2 ||
        sayi2 === a3 ||
        sayi2 === a6 ||
        sayi2 === a9
      ) {
        count = count + 2;
      } else if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    } else if (sayi1 === a8) {
      if (sayi2 === a1 || sayi2 === a2 || sayi2 === a3) {
        count = count + 2;
      } else if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    } else if (sayi1 === a9) {
      if (
        sayi2 === a1 ||
        sayi2 === a2 ||
        sayi2 === a3 ||
        sayi2 === a4 ||
        sayi2 === a7
      ) {
        count = count + 2;
      } else if (sayi1 === sayi2) {
        count = count + 0;
      } else {
        count = count + 1;
      }
    }
  }
  // * consolda ciktının doğrulaması
  console.log(count);

  // * sonucun ekrana yazılması

  const ekranCitisi = document.querySelector("#sonuc");

  ekranCitisi.innerHTML = `Şifreniz ${count} Saniye Sürecek !`;
});
