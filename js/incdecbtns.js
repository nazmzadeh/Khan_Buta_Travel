let decreases = document.querySelectorAll(".decrease")
let increases = document.querySelectorAll(".increase")
decreases.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const input = button.nextElementSibling;
        if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;

        }
    });
});

increases.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const input = button.previousElementSibling;
        input.value = parseInt(input.value) + 1;

    });
});

const operators = document.querySelector("#tour-booking-form .operators");
const adultDecreaseBtn = operators.firstElementChild.firstElementChild.lastElementChild.firstElementChild
const adultIncreaseBtn = operators.firstElementChild.firstElementChild.lastElementChild.lastElementChild
if (parseInt(adultDecreaseBtn.nextElementSibling.value) === 1) {
    adultDecreaseBtn.setAttribute("disabled", "");
    adultDecreaseBtn.style.opacity = 1

}
adultDecreaseBtn.addEventListener("click", () => {
    if (parseInt(adultDecreaseBtn.nextElementSibling.value) === 1) {
        adultDecreaseBtn.setAttribute("disabled", "");
        adultDecreaseBtn.style.opacity = 1
    }
})
adultIncreaseBtn.addEventListener("click", () => {
    console.log(parseInt(adultDecreaseBtn.nextElementSibling.value))

    adultDecreaseBtn.removeAttribute("disabled");
})
const roomDecreaseBtn = operators.lastElementChild.firstElementChild.lastElementChild.firstElementChild
const roomIncreaseBtn = operators.lastElementChild.firstElementChild.lastElementChild.lastElementChild
if (parseInt(roomDecreaseBtn.nextElementSibling.value) === 1) {
    roomDecreaseBtn.setAttribute("disabled", "");
    roomDecreaseBtn.style.opacity = 1

}
roomDecreaseBtn.addEventListener("click", () => {
    if (parseInt(roomDecreaseBtn.nextElementSibling.value) === 1) {
        roomDecreaseBtn.setAttribute("disabled", "");
        roomDecreaseBtn.style.opacity = 1
    }
})
roomIncreaseBtn.addEventListener("click", () => {
    console.log(parseInt(roomDecreaseBtn.nextElementSibling.value))

    roomDecreaseBtn.removeAttribute("disabled");
})

