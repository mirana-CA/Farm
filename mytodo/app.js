let input = document.querySelector("input");
let addBtn = document.querySelector(".addBtn");
let ul = document.querySelector("ul");
let arr = [];
let itemId = 0;
//eger localda array varsa olani ekrana cixaririq
if (JSON.parse(localStorage.getItem("arr"))) {
  // localdaki arrayi bizim arraye  menimsedirik
  arr = JSON.parse(localStorage.getItem("arr"));
  //her defe IDi artir bizde bi sonraki elementin idsi 1den yox arraydaki sonuncu elementden baslasin deye bele yaziriq
  itemId = arr[arr.length - 1].id;
  // arreyi ekrana cixardiq
  createElement();
}

//her defe elmentin klikini goturur
addBtn.addEventListener("click", function (e) {
  //refresh getmesin deye edirik defaulti sifirlayir
  e.preventDefault();
  //input bos olduqda islemesin deye inputun ici doludusa sertini yoxlayiriq
  if (input.value) {
    // her yeni element ucun idni artiriq
    itemId++;
    // yeni elementi idsi ve valuesi olan obyekte yigiriq
    let obj = {
      id: itemId,
      value: input.value,
    };
    // yeni obyekti arraye push edirik
    arr.push(obj);
    // yeni arrayi ekrana cixardiriq
    createElement();
    // yeni arrayi locala gonderirik
    localStorage.setItem("arr", JSON.stringify(arr));
    // inputu bosladiriq
    input.value = ``;
  } else {
    // input bosdusa return edirik
    return;
  }
});

//elementi silmek funksiyasidi
function deleteElement() {
  // delete butonun secirik
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  // her elemente delete butnu var ve deleteBtn hazirda arraydi ona gore foreache salinib hansi tiklansa onun uzerinde emeliyyat yerine yetirir
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      // arrayi filter eleyirik butonun idsine berbarer olmayan arrayleri arraye  menimsedirik
      arr = arr.filter((elem) => elem.id != btn.id);
      //  yeni arrayi string halinda locala gonderirik
      localStorage.setItem("arr", JSON.stringify(arr));
      // ve hemin an ekranda da deyisiklik olmasi ucun btnin parentini silirik
      btn.parentElement.remove();
    });
  });
}

//elementleri ule yazdirmaq funksiyasidi
function createElement() {
  //ulni evvelce bosaldiriq ki art artda yigilmasin her defe
  ul.innerHTML = ``;
  //arryi foreache salib elementlerini li ile ule yazdiririq
  arr.forEach((elem) => {
    ul.innerHTML += `<li>${elem.value} <button id="${elem.id}" class="deleteBtn">X</button></li>`;
  });
  // delete funlsiyasini cagiririq
  deleteElement();
}
