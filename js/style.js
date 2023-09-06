
/*------------Menu---------------*/

const navbar = () => {

    const toggler = document.querySelector('.js-navbar-tog');
    const menu = document.querySelector('.js-menu-table');
    const close = document.querySelector('.js-menu-table-close');

    toggler.addEventListener('click', () => {
        menu.classList.toggle('show');
    })

    close.addEventListener('click', () => {
        menu.classList.remove('show');
    })

}

// navbar();




$(document).ready(function () {

    $('.slick_lightbox').slick({
        dots: false,
        slidesToShow: 1,
        arrows: true,

    });

});


$('.slick_lightbox').slickLightbox({
    itemSelector: 'a',
    arrows: true,
    navigateByKeyboard: true,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                arrows: false
            }
        }
    ]
});

// Slick lightbox end

var rootElement = document.documentElement;
let toTopBtn = document.querySelector("#toTop");
function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.classList.add("showBtn");
    } else {
        toTopBtn.classList.remove("showBtn");
    }
}
function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function () { handleScroll() };
toTopBtn.addEventListener("click", topFunction);

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const values = {};
        for (const [key, value] of formData.entries()) {
            values[key] = value;
        }
        console.log('Form data:', values);
        form.submit()
    }
    form.addEventListener('submit', handleSubmit);
})




const phoneInputField = document.querySelectorAll(".telephone");
phoneInputField.forEach((phone) => {
    const phoneInput = window.intlTelInput(phone, {
        preferredCountries: ["az", "pk"],
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
})


const sortByOthers = document.querySelector(".sort_by_others ");
const otherOptions = document.querySelector(".sort_part ul");



if (sortByOthers) sortByOthers.onclick = () => {
    otherOptions.classList.toggle("visible")

}


document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.querySelector('.openSortModalBtn');
    const closeModalButton = document.getElementById('closeModalButton');
    const overlay = document.getElementById('overlay');
    const sortingModal = document.getElementById('sortingModal');
    const sortingRadios = document.querySelectorAll('input[name="sorting"]');
    const sortTitles = document.querySelectorAll('.sort_title');

    if (openModalButton) {
        openModalButton.addEventListener('click', function () {
            sortingModal.classList.toggle('show');
            overlay.classList.toggle('show');
        })
    };
    if (closeModalButton) {
        closeModalButton.addEventListener('click', function () {
            sortingModal.classList.remove('show');
            overlay.classList.remove('show');
        })
    };
    if (overlay) {
        overlay.addEventListener('click', function () {
            sortingModal.classList.remove('show');
            overlay.classList.remove('show');
        })
    };
    sortingRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            const selectedText = radio.previousElementSibling.firstElementChild.textContent;
            openModalButton.querySelector('span').textContent = selectedText;
        });
    });

    const defaultRadio = document.querySelector('input[name="sorting"][value="best"]');
    if (defaultRadio) {
        defaultRadio.checked = true;
        const defaultText = defaultRadio.nextElementSibling.previousElementSibling.firstElementChild.textContent;
        if (defaultText) { openModalButton.querySelector('span').textContent = defaultText; }
    }

});

const toggleButton = document.getElementById('toggleButton');
const customBox = document.getElementById('customBox');
const cancelButton = document.getElementById('cancelButton');
const doneButton = document.getElementById('doneButton');
const countSpans = document.querySelectorAll('.count');

let tempCounts = [1, 0, 0];

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        customBox.classList.toggle('hidden');
    })
};

if (cancelButton) {
    cancelButton.addEventListener('click', () => {
        customBox.classList.add('hidden');
    })
};

if (doneButton) {
    doneButton.addEventListener('click', () => {
        customBox.classList.add('hidden');
        for (let i = 0; i < countSpans.length; i++) {
            const totalPeopleCount = parseInt(tempCounts[0]) + parseInt(tempCounts[1]);
            countSpans[0].textContent = totalPeopleCount;
            countSpans[1].textContent = tempCounts[2]
        }
    })
};

const decreaseButtons = document.querySelectorAll('.decrease');
const adultDecreaseButton = document.querySelector('.adult_decrease');
const increaseButtons = document.querySelectorAll('.increase');
const countInputs = document.querySelectorAll('.count_input');
const adultCountInp = document.querySelector('.count_input_adult');
const childrenRow = document.querySelector('.row-children');



for (let i = 0; i < decreaseButtons.length; i++) {


    increaseButtons[i].addEventListener('click', () => {
        countInputs[i].value++;
        tempCounts[i] = countInputs[i].value;

        decreaseButtons[i].classList.remove("disabled")
        decreaseButtons[i].removeAttribute("disabled")

    });
    decreaseButtons[i].addEventListener('click', () => {
        if (countInputs[i].value > 0) {
            countInputs[i].value--;
            tempCounts[i] = countInputs[i].value;

        }
        console.log(tempCounts[0])
        if (parseInt(countInputs[0].value) <= 1) {
            adultDecreaseButton.classList.add("disabled")
            adultDecreaseButton.setAttribute("disabled", "")

        }
    });

}


const noExpiration = document.querySelector("#no-expiration");
const expirationDate = document.querySelector("#expiration_date");

if (noExpiration && expirationDate) {
    noExpiration.addEventListener("change", () => {
        if (noExpiration.checked) {
            expirationDate.disabled = true;
            expirationDate.style.cursor = "not-allowed";
        } else {
            expirationDate.disabled = false;
            expirationDate.style.cursor = "pointer";
        }
    })
};