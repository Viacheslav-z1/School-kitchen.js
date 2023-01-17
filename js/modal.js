let modal = document.querySelector(".modal");
let openModalBtn = document.querySelector(".app__btn");
let closeBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener('click', () => {
  modal.classList.add('show');
})

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

modal.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("modal__inner")) {
    modal.classList.remove("show");
  } else if(event.target === closeBtn){
    modal.classList.remove("show");
  }
});


