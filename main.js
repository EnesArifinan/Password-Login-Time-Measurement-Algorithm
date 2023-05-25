// ! Taban Veri tabanının yapılması, ileride değistirilebilmesi için
const a1 = 6; // a1konum=[1,1]
const a2 = 4; // 21konum=[1,2]
const a3 = 3; // a3konum=[1,3]
const a4 = 9; // a4konum=[2,1]
const a5 = 8; // a5konum=[2,2]
const a6 = 2; // a6konum=[2,3]
const a7 = 5; // a7konum=[3,1]
const a8 = 7; // a8konum=[3,2]
const a9 = 1; // a9konum=[3,3]

// ! Verinin alınması
const giriş = document.querySelector("#giriş");
const button = document.querySelector("#button");
button.addEventListener("click", () => {
  // const newGiriş = giriş.value;

  // ! Algoritma

  // const array = Array.from(String(newGiriş), Number);

  // var count = 0;

  // console.log(array);
  const giriş =
    "761141865941146969327988346994927175873968352352659892266262259949385846865694382517121447281482434324139629538884575973722472542877646228692182869138667762335939482678251872219788479124698833869973427639778492735262663244696158618476487789371635324721733898953965685656654852318423378584793927458623513727125944345568362713349628781171581257893743956957751736518245443421675756452464121627425687974556424653729454284123924375698756232974245938135819151685576648544582849981916429686781218497841343833987773658945383696161167333275623652589755464853183315651375176129414757887695358623622828533955918454844531539776975217449985632313859348273931127885267513243781685268823312989799638438495964462519179645638983132724261188165423751859986167531621479887634265592512763793439736286879186865978536861666441243455533969684826";
  const array = giriş.split("").map(Number);
  console.log(array);

  var count = 0;

  // Geri kalan algoritma işlemleri...

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
  // ! consolda ciktının doğrulaması
  console.log(count);

  // ! sonucun ekrana yazılması

  const ekranCitisi = document.querySelector("#sonuc");

  ekranCitisi.innerHTML = `Şifreniz ${count} Saniye Sürecek !`;
});
