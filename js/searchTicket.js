const myModal = () => {

    const modals = document.querySelectorAll('.my-modal');

    const modal = (el) => {

        const toggler = document.querySelectorAll(`*[target="#${el.id}"]`);
        const closer = el.querySelector('.my-modal-closer');
        const content = el.querySelector('.my-modal-content');
        const ignoreBg = el.hasAttribute('ignore-bg');

        const toggle = () => { el.classList.toggle('show'); }
        const hide = () => { el.classList.remove('show'); }
        function hideOnBgClick(event) { if (!content.contains(event.target)) hide(); }

        if (toggler) toggler?.forEach((tog) => { tog.addEventListener('click', toggle); })
        if (closer) closer.addEventListener('click', hide);
        if (!ignoreBg) el.addEventListener('click', hideOnBgClick);

    }

    modals.forEach((m) => { modal(m) })

}

myModal();
// city-container

const cityContainer = () => {

    const input = document.querySelector('.js-city-select');
    const dropdown = document.querySelector('.js-select-dropdown');
    const reset = document.querySelector('.js-city-select-reset');
    const buttons = document.querySelectorAll('.js-select-dropdown-btn');
    const notFound = document.querySelector('.js-select-dropdown-not-found');

    const show = () => dropdown.classList.add('show');
    const hide = () => dropdown.classList.remove('show');

    const resetAll = () => {
        input.value = "";
        buttons.forEach((btn) => { btn.classList.remove('d-none') })
        reset.classList.add('d-none');
        notFound.classList.remove('show');
    }

    const search = (e) => {

        const val = e.target.value.trim().toLowerCase();

        if (val != "") {

            reset.classList.remove('d-none');
            let notFounded = true;
            buttons.forEach((btn) => {
                if (btn.getAttribute('data-title').toLowerCase().includes(val)) { btn.classList.remove('d-none'); notFounded = false; }
                else { btn.classList.add('d-none') }
            })

            notFounded ? notFound.classList.add('show') : notFound.classList.remove('show');

        } else {
            reset.classList.add('d-none');
            buttons.forEach((btn) => { btn.classList.remove('d-none') })
            notFound.classList.remove('show');
        }

    }

    const selectCity = (e) => {
        input.value = e.target.getAttribute('data-title');
        reset.classList.remove('d-none');
        dropdown.classList.remove('show')
    }

    input.addEventListener('focusin', show);
    input.addEventListener('input', search);
    reset.addEventListener('click', resetAll);
    buttons.forEach((btn) => { btn.addEventListener('click', selectCity) });

    // hide - dropdown - on - click - of - page
    document.addEventListener('click', function (event) {
        const innerClick = dropdown.contains(event.target) || input.contains(event.target);
        if (!innerClick) hide();
    });

}

cityContainer();


// my-tabs

const myTabs = () => {

    const tabs = document.querySelectorAll('.my-tabs');

    const tabFunc = (el) => {

        const items = el.querySelectorAll('.my-tabs-btn');
        const tabs = el.querySelectorAll('.my-tabs-tab');

        function show() {

            const x = this.getAttribute('data-index');

            for (let i = 0; i < items.length; i++) {
                if (i == x) {
                    items[i].classList.add('active');
                    tabs[i].classList.add('show');
                } else {
                    items[i].classList.remove('active');
                    tabs[i].classList.remove('show');
                }
            }

        }

        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute('data-index', i)
            items[i].addEventListener('click', show);
        }

    }

    tabs.forEach((tab) => { tabFunc(tab) })
}

myTabs();

// the-end-of-my-tabs


// my-dropdown

const myDropdown = () => {

    const dropdowns = document.querySelectorAll('.my-dropdown');

    const dropdown = (el) => {

        const box = el.querySelector('.my-dropdown-box');
        const toggler = el.querySelector('.my-dropdown-toggler');
        const closer = el.querySelector('.my-dropdown-closer');
        const closeOnOuterClick = el.hasAttribute('close-on-outer-click');
        const elToHide = document.querySelector(toggler?.getAttribute('el-to-hide'))

        const toggle = (e) => {
            box.classList.toggle('show');
            toggler.classList.toggle('active');
            if (elToHide) elToHide.classList.remove('show');
        }

        const hide = () => {
            box.classList.remove('show');
            toggler.classList.remove('active');
        }

        toggler.addEventListener('click', toggle);

        if (closer) closer.addEventListener('click', hide);


        if (closeOnOuterClick) {
            document.addEventListener('click', function (event) {
                const innerClick = box.contains(event.target) || toggler.contains(event.target);
                if (!innerClick) hide();
            });
        }

    }

    dropdowns.forEach((d) => { dropdown(d) })

}

myDropdown();

// the-end-of-my-dropdown


// number-input

const numberInput = () => {

    const inputs = document.querySelectorAll('.js-number-input');

    const input = (el) => {

        const inp = el.querySelector('.js-number-input-input');
        const minusBtn = el.querySelector('.js-number-input-minus');
        const plusBtn = el.querySelector('.js-number-input-plus');
        const minValue = 0;
        const maxValue = inp.hasAttribute('max-value') && inp.getAttribute('max-value') != "" ? Number(inp.getAttribute('max-value')) : 99999999;
        const valueField = document.querySelector(`${el.getAttribute('value-field')}`);

        const minus = () => {

            const val = inp.value;

            if (val > minValue) {
                inp.value = Number(val) - 1;
                if (valueField) valueField.innerHTML = Number(val) - 1;
                plusBtn.classList.remove('disabled');
            }

            val == minValue + 1 || val == minValue ? minusBtn.classList.add('disabled') : minusBtn.classList.remove('disabled');

        }

        const plus = () => {

            const val = inp.value;

            if (val < maxValue) {
                inp.value = Number(val) + 1;
                if (valueField) valueField.innerHTML = Number(val) + 1;
                minusBtn.classList.remove('disabled');
            }

            val == maxValue - 1 || val == maxValue ? plusBtn.classList.add('disabled') : plusBtn.classList.remove('disabled');

        }

        minusBtn.addEventListener('click', minus);
        plusBtn.addEventListener('click', plus);

    }

    inputs.forEach((i) => { input(i) })

}

numberInput();

// the-end-of-number-input


document.addEventListener('DOMContentLoaded', function () {

    const adultInput = document.querySelector(".adult_input");
    const childrenBtns = document.querySelectorAll(".children-btn");
    adultInput.value = "0";

    // Function to enable or disable children buttons based on adult input value
    const toggleChildrenButtons = () => {
        const isAdultInputZero = adultInput.value === "0";
        childrenBtns.forEach((btn) => {
            btn.disabled = isAdultInputZero;

            if (isAdultInputZero) {
                btn.classList.add("disabled")
            } else {
                btn.classList.remove("disabled")
            }

        });
    }

    // Attach event listener to adult input
    adultInput.addEventListener('input', toggleChildrenButtons);

    // Initialize the state of children buttons
    toggleChildrenButtons();

    // Rest of your existing code...

    // ... (other code)

});

// number-input-with-additionals

const numberInputWithAdditionals = () => {

    const inputs = document.querySelectorAll('.js-number-input-with-additionals');

    const input = (el) => {

        const par = el.querySelector('.js-number-input-additionals-parent');
        const selects = el.querySelectorAll('.js-number-input-additionals-select');
        let selectsLength = selects.length;
        const inp = el.querySelector('.js-number-input-input');
        const minusBtn = el.querySelector('.js-number-input-minus');
        const plusBtn = el.querySelector('.js-number-input-plus');
        const minValue = 0;
        const maxValue = inp.hasAttribute('max-value') && inp.getAttribute('max-value') != "" ? Number(inp.getAttribute('max-value')) : 99999999;
        const valueField = document.querySelector(`${el.getAttribute('value-field')}`);

        const minus = () => {

            const val = inp.value;

            if (val > minValue) {
                inp.value = Number(val) - 1;
                if (valueField) valueField.innerHTML = Number(val) - 1;
                decreaseSelect();
                plusBtn.classList.remove('disabled');
            }

            val == minValue + 1 || val == minValue ? minusBtn.classList.add('disabled') : minusBtn.classList.remove('disabled');

        }

        const plus = () => {

            const val = inp.value;

            if (val < maxValue) {
                inp.value = Number(val) + 1;
                if (valueField) valueField.innerHTML = Number(val) + 1;
                increaseSelect();
                minusBtn.classList.remove('disabled');
            }

            val == maxValue - 1 || val == maxValue ? plusBtn.classList.add('disabled') : plusBtn.classList.remove('disabled');

        }

        const increaseSelect = () => {
            const newSelect = selects[0].cloneNode(true);
            selectsLength++;
            newSelect.querySelector('select').setAttribute('name', `age_${selectsLength}`);
            par.appendChild(newSelect);
            toggleChildrenButtons()
        }

        const decreaseSelect = () => {
            el.querySelector('.js-number-input-additionals-select:last-child').remove();
            selectsLength--;
        }

        minusBtn.addEventListener('click', minus);
        plusBtn.addEventListener('click', plus);

    }

    inputs.forEach((i) => { input(i) })

}

numberInputWithAdditionals();

