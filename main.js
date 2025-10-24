let value = 0;
let number = document.querySelector(".num");
number.textContent = value;
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decremetn");

incrementBtn.addEventListener("click" , function()  {
    value += 5;
    number.textContent = value;

    value % 2 === 0 && value > 20  && value !== 0  && value < 100 ? number.classList.add("ali") : number.classList.remove("ali");

}
);

decrementBtn.addEventListener( "click", function()  {
    value -= 5;
    number.textContent = value;
}
);
