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


// Current City






























// city-container

const cityContainer = () => {

    const fields = document.querySelectorAll('.js-city-select-field');

    const field = (container) => {

        const input = container.querySelector('.js-city-select');
        const childrenInput = container.querySelector(".children_input")
        const dropdown = container.querySelector('.js-select-dropdown');
        const reset = container.querySelector('.js-city-select-reset');
        const buttons = container.querySelectorAll('.js-select-dropdown-btn');
        const notFound = container.querySelector('.js-select-dropdown-not-found');

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

    fields.forEach((item) => { field(item) })


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

const adultValueField = document.querySelector('.js-adults-count');
const childrenValueField = document.querySelector('.js-children-count');

const numberInput = () => {
    const inputs = document.querySelectorAll('.js-number-input');

    const input = (el) => {
        const inp = el.querySelector('.js-number-input-input');
        const minusBtn = el.querySelector('.js-number-input-minus');
        const plusBtn = el.querySelector('.js-number-input-plus');
        const minValue = 1;
        const maxValue = inp.hasAttribute('max-value') && inp.getAttribute('max-value') !== "" ? Number(inp.getAttribute('max-value')) : 99999999;
        const valueField = document.querySelector(`${el.getAttribute('value-field')}`);
        const minus = () => {
            const val = inp.value;
            if (val > minValue) {
                inp.value = Number(val) - 1;
                valueField.innerHTML = Number(val) - 1;
                plusBtn.classList.remove('disabled');
            }
            val <= minValue && minusBtn.classList.add('disabled');


        }

        const plus = () => {
            const val = inp.value;
            if (val < maxValue) {
                inp.value = Number(val) + 1;
                valueField.innerHTML = Number(val) + 1;
                minusBtn.classList.remove('disabled');
            }
            val >= maxValue && plusBtn.classList.add('disabled');

        }

        minusBtn.addEventListener('click', minus);
        plusBtn.addEventListener('click', plus);

    }

    inputs.forEach((i) => { input(i) })
}

numberInput();



// the-end-of-number-input


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
                // inp.value = Number(val) - 1;
                if (valueField) valueField.innerHTML = Number(val) - 1;
                decreaseSelect();
                plusBtn.classList.remove('disabled');
            }

            val == minValue + 1 || val == minValue ? minusBtn.classList.add('disabled') : minusBtn.classList.remove('disabled');

        }

        const plus = () => {

            const val = inp.value;

            if (val < maxValue) {
                // inp.value = Number(val) + 1;
                if (valueField) valueField.innerHTML = Number(val) + 1;
                increaseSelect();
                minusBtn.classList.remove('disabled');
            }

            val == maxValue - 1 || val == maxValue ? plusBtn.classList.add('disabled') : plusBtn.classList.remove('disabled');

        }



        const increaseSelect = () => {
            const newSelect = document.createElement('div');
            newSelect.className = 'my-col-5 mt-2 js-number-input-additionals-select';

            newSelect.innerHTML = `
              <select
                name="age_${selectsLength}"
                class="w-100 white-select"
                value="0"
              >
                <option value="0">0 years old</option>
                <option value="1">1 years old</option>
                <option value="2">2 years old</option>
                <option value="3">3 years old</option>
                <option value="4">4 years old</option>
                <option value="5">5 years old</option>
                <option value="6">6 years old</option>
                <option value="7">7 years old</option>
                <option value="8">8 years old</option>
                <option value="9">9 years old</option>
                <option value="10">10 years old</option>
                <option value="11">11 years old</option>
                <option value="12">12 years old</option>
                <option value="13">13 years old</option>
                <option value="14">14 years old</option>
                <option value="15">15 years old</option>
                <option value="16">16 years old</option>
                <option value="17">17 years old</option>
              </select>
            `;

            selectsLength++;
            newSelect.querySelector('select').setAttribute('name', `age_${selectsLength}`);
            par.appendChild(newSelect);

        }

        const decreaseSelect = () => {
            el.querySelector('.js-number-input-additionals-select:last-child').remove();
            if (adultValueField.innerHTML == 0) {
                while (par.firstChild) {
                    par.firstChild.remove()
                }
            }
            console.log(childrenValueField)
            selectsLength--;
        }


        console.log(par.innerHTML)
        console.log(adultValueField.innerHTML)
        minusBtn.addEventListener('click', minus)
        plusBtn.addEventListener('click', plus)

    }

    inputs.forEach((i) => { input(i) })

}

numberInputWithAdditionals();
const b = 7
console.log(b)