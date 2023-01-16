tray = document.querySelector(".app__tray");
foods = document.querySelectorAll(".app__food-item");

foods.forEach(food => {
  /*Додаєм клас елементу, якого перетягуєм, для його ідентифікації*/
  food.addEventListener("dragstart", () => {
    food.classList.add("drag");
  });
  /*Забираєм клас елементу, якого перетягуєм*/
  food.addEventListener("dragend", () => {
    food.classList.remove("drag");
  });
});
/*Якась важлива штука, без якої не працює драг */
tray.addEventListener("dragover", function (event) {
  event.preventDefault();
});

/*Логіка додавання в корзину */
tray.addEventListener('drop',(e)=>{
  e.preventDefault();
  const dragEl = document.querySelector(".drag");
  const img =  dragEl.querySelector('img');
  console.log(img);
  let clone = img.cloneNode(true);
  tray.appendChild(clone);
})

/*Масив товарів */
let goods = [
  {
    id: 0,
    name: 'Hot dog',
    price: 30,
    imgUrl: '../images/',
  },
  {
    id: 1,
    name: 'Donut',
    price: 20,
    imgUrl: '../images/',
  },
  {
    id: 2,
    name: 'Sauces',
    price: 10,
    imgUrl: '../images/',
  },
  {
    id: 3,
    name: 'Pizza',
    price: 30,
    imgUrl: '../images/',
  },
  {
    id: 4,
    name: 'Burger',
    price: 30,
    imgUrl: '../images/',
  }
];
