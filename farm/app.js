let buyAnimalBtn = document.querySelector(".buyAnimalBtn");
let buyAnimalModal = document.querySelector(".buyAnimalModal");
let closeAnimalModalBtn = document.querySelector(".closeAnimalModal");
let coinCount = document.querySelector(".coinCount");
let buyTheAnimal = document.querySelectorAll(".buyTheAnimal");
let chickenHeading = document.querySelector(".chickenHeading");
let sheepHeading = document.querySelector(".sheepHeading");
let cowHeading = document.querySelector(".cowHeading");
let mainContainer = document.querySelector(".mainContainer");

console.log(buyTheAnimal);

let animalsArr = [
  {
    name: "sheep",
    price: 20,
    count: 1,
    value: 2,
    img: "https://cdn-icons-png.flaticon.com/128/2931/2931515.png",
  },
  {
    name: "chicken",
    price: 10,
    count: 0,
    value: 1,
    img: "https://cdn-icons-png.flaticon.com/128/1886/1886890.png",
  },
  {
    name: "cow",
    price: 40,
    count: 0,
    value: 5,
    img: "https://cdn-icons-png.flaticon.com/128/2395/2395796.png",
  },
];

let coinCountValue = 0;
buyAnimalBtn.addEventListener("click", function () {
  buyAnimalModal.style.opacity = "1";
  buyAnimalModal.style.visibility = "visible";
});
closeAnimalModalBtn.addEventListener("click", closeModal);
function closeModal() {
  buyAnimalModal.style.opacity = "0";
  buyAnimalModal.style.visibility = "hidden";
}
setInterval(() => {
  animalsArr.forEach((animal) => {
    coinCountValue += animal.value * +animal.count;
  });

  coinCount.innerHTML = coinCountValue;
}, 1000);

buyTheAnimal.forEach((btn) => {
  btn.addEventListener("click", function () {
    animalsArr.forEach((animal) => {
      if (btn.id == animal.name) {
        if (animal.price < coinCountValue) {
          coinCountValue = coinCountValue - animal.price;
          animal.count++;
          coinCount.innerHTML = coinCountValue;

          switch (animal.name) {
            case "chicken":
              chickenHeading.children[1].textContent = animal.count;
              chickenHeading.style.display = "flex";
              break;
            case "sheep":
              sheepHeading.children[1].textContent = animal.count;
              sheepHeading.style.display = "flex";

              break;
            case "cow":
              cowHeading.children[1].textContent = animal.count;
              cowHeading.style.display = "flex";

              break;
            default:
              break;
          }
          let image = document.createElement("img");
          mainContainer.appendChild(image);
          image.src = animal.img;
          image.classList.add("animalImg");
          image.style.top = `${70 + Math.floor(Math.random() * 30)}`;
          image.style.left = `${Math.floor(Math.random() * 100)}`;
        }
      }
    });
  });
});
