// Get the DOM elements

const billCostField = document.getElementById('billCostField');
const tipInputField = document.getElementById('tipInput');
const tipButtons = document.querySelectorAll('.button');
const numberPeopleInput = document.getElementById('numberPeopleInput');
const errorMessagePeopleElement = document.getElementById('errorMessagePeople');
const tipAmountResult = document.getElementById('tipAmountPersonField');
const totalPersonResult = document.getElementById('totalPersonField');
const resetButton = document.getElementById('resetButton');

let billCost = 0;
let tipValue = 0;
let numberPeople = 0;
let tipAmountPerson = 0;
let totalPerson = 0;

// Get the bill cost

const billCostInput = () => {
  billCostField.addEventListener("input", () => {
    billCost = Number(billCostField.value);
  });
};

billCostInput();

// Get the tip value using the buttons

buttonClicked = (e) => {
  tipValue = Number(e.target.value);
  tipInputField.value = '';

  removeActiveTipButton();

  e.target.classList.add('buttonActive');
};

tipButtons.forEach(button => {
  button.addEventListener("click", buttonClicked);
});

const removeActiveTipButton = () => {
  tipButtons.forEach(button => {
    button.classList.remove('buttonActive');
  });
}

// Get the custom tip value

const tipInput = () => {
  tipInputField.addEventListener("input", () => {
    tipValue = Number(tipInputField.value);
    removeActiveTipButton();
  });
};

tipInput();

// Update and Calculate

const calculateAll = () => {
  totalBillCalc();
  totalPersonCalc();
  tipAmountPersonCalc();
  numberPeopleInput.parentElement.classList.remove('errorInput');
  numberPeopleInput.parentElement.classList.add('input-outline');
  errorMessagePeopleElement.innerText = "";
  resetButton.classList.remove('resetInactive');
  resetButton.classList.add('resetActive');
  resetButtonFunction();
}

// Get the number of people

const numberPeopleCalc = () => {
  numberPeople = Number(numberPeopleInput.value);
  errorMessagePeopleFunction();
}

const errorMessagePeopleFunction = () => {
  if (numberPeople > 0) {
    calculateAll();
    } else {
      errorMessagePeopleElement.innerText = "Can't be zero";
      numberPeopleInput.parentElement.classList.add('errorInput');
      numberPeopleInput.parentElement.classList.remove('input-outline');
    };
};

const numberPeopleFunction = () => {
  numberPeopleInput.addEventListener("input", numberPeopleCalc);
};

numberPeopleFunction();

// Calculate total bill

const totalBillCalc = () => {
  tipAmountTotal = billCost / 100 * tipValue
  totalBill = billCost + tipAmountTotal;
};

// Calculate tip amount/person

const tipAmountPersonCalc = () => {
  tipAmountPerson = tipAmountTotal/numberPeople;
  tipAmountResult.innerText = "$" + tipAmountPerson.toFixed(2);
};

// Calculate total/person

const totalPersonCalc = () => {
  totalPerson = totalBill / numberPeople;
  totalPersonResult.innerText = "$" + totalPerson.toFixed(2);
};

// Reset button

const resetButtonFunction = () => {
  resetButton.addEventListener ("click", resetAll);
};

const resetAll = () => {
  billCostField.value = '';
  billCost = 0;
  tipInputField.value = '';
  tipValue = 0;
  numberPeopleInput.value = '';
  numberPeople = 0;
  tipAmountResult.innerText = '$0.00';
  totalPersonResult.innerText = '$0.00';
  resetButton.classList.add('resetInactive');
  resetButton.classList.remove('resetActive');
  resetButton.removeEventListener ("click", resetAll);
  errorMessagePeopleElement.innerText = "";
  numberPeopleInput.parentElement.classList.remove('errorInput');
  numberPeopleInput.parentElement.classList.add('input-outline');
  removeActiveTipButton();
};
