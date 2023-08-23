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