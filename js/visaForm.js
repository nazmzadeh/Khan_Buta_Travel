const steps = Array.from(document.querySelectorAll('.form-step'));
const progressBar = document.querySelector('.indicator');
const buttons = document.querySelectorAll("button");
const circles = document.querySelectorAll('.circle');

let currentStep = 0;
// const valuesArray = [];

function updateProgressBar() {
    circles.forEach((circle, index) => {
        if (index <= currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    progressBar.style.width = `${((currentStep) / (circles.length - 1)) * 100}%`;

    if (currentStep === circles.length) {
        buttons[1].disabled = true;
    } else if (currentStep === 1) {
        buttons[0].disabled = true;
    } else {
        buttons.forEach((button) => (button.disabled = false));
    }
}
updateProgressBar();

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        if (index === stepIndex) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}


const standard = document.querySelector("#multi-step-form #standard");
const urgent = document.querySelector("#multi-step-form #urgent");
const visaValidityDate = document.querySelector("#multi-step-form .visa_validity_date")
const today = new Date();
let issueDate = new Date(today);
standard.addEventListener("change", () => {

    if (standard.checked) {
        issueDate = new Date(today);
        issueDate.setDate(today.getDate() + 4);
        updateDateInput(issueDate);
        visaValidityDate.style.display = "flex"
    }
});

urgent.addEventListener("change", () => {
    if (urgent.checked) {
        issueDate = new Date(today);
        issueDate.setDate(today.getDate());
        updateDateInput(issueDate);
        visaValidityDate.style.display = "flex"
    }
});

function updateDateInput(issueDate) {
    const year = issueDate.getFullYear();
    const month = (issueDate.getMonth() + 1).toString().padStart(2, '0');
    const day = issueDate.getDate().toString().padStart(2, '0');
    const issueDateString = `${year}-${month}-${day}`;

    const dateInput = document.querySelector('.visaValidity');
    dateInput.value = issueDateString;
    dateInput.min = issueDateString;
}



function init() {
    updateProgressBar();
    showStep(currentStep);

    steps.forEach((step, index) => {
        const nextButton = step.querySelector('.next-button');
        const prevButton = step.querySelector('.prev-button');
        const inputs = step.querySelectorAll("input:not([type=radio]");
        const radioInputs = step.querySelectorAll(".radio_input");
        const selects = step.querySelectorAll("select");
        if (nextButton) {
            nextButton.addEventListener('click', (event) => {
                let allFieldsFilled = true;

                inputs.forEach((input) => {
                    if (input.value.trim() === '') {
                        allFieldsFilled = false;
                    }
                    console.log("input:", input.value);
                });
                let isRadioChecked = false;
                radioInputs.forEach((radio) => {
                    if (radio.checked) {
                        isRadioChecked = true;
                    }
                });
                if (!isRadioChecked) {
                    allFieldsFilled = false;
                }
                selects.forEach((select) => {
                    if (select.selectedIndex === 0) {
                        allFieldsFilled = false;
                        console.log("select:", select.selectedIndex);
                    }
                });

                if (!allFieldsFilled) {
                    event.preventDefault();
                } else {
                    currentStep++;
                    updateProgressBar();
                    showStep(currentStep);
                    document.querySelector('.visa-form').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }

            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentStep--;
                updateProgressBar();
                showStep(currentStep);
                document.querySelector('.visa-form').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            });
        }

        const fileInput = step.querySelector('#passport-copy');
        const fileCustom = step.querySelector('.file-custom');

        if (fileInput) {
            fileInput.addEventListener('change', (event) => {
                const fileName = event.target.files[0].name;
                fileCustom.textContent = fileName;
            });
        }

        const yesRadio = document.querySelector("#yesRadio");
        const noRadio = document.querySelector("#noRadio");
        yesRadio.addEventListener("change", () => {
            if (yesRadio.checked) {
                const existingReasonPart = steps[2].querySelector('.reason');
                if (!existingReasonPart) {
                    const reasonPart = document.createElement('div');
                    reasonPart.className = 'part input-part reason';

                    reasonPart.innerHTML = `
                        <label for="reason"> Reason </label>
                        <input type="text" id="reason" name="reason" required />
                    `;

                    const buttonsDiv = steps[2].querySelector('.buttons');

                    steps[2].insertBefore(reasonPart, buttonsDiv);
                }
            }
        })
        noRadio.addEventListener("change", () => {
            if (noRadio.checked) {
                const reasonPart = steps[2].querySelector('.reason');
                if (reasonPart) {
                    reasonPart.remove();
                }
            }
        })

    });
}

init();

// const phoneInputField = document.querySelectorAll(".telephone");
// phoneInputField.forEach((phone) => {
//     const phoneInput = window.intlTelInput(phone, {
//         preferredCountries: ["az", "pk"],
//         utilsScript:
//             "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//     });
// })

// console.log(phoneInputField)
// console.log(phoneInput)