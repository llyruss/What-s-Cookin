const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const ingContainer = document.querySelector('.ing-container');

function addIngredientElement() {

const formRow = document.createElement('div')
formRow.setAttribute('class', 'form-row')
const miBtn = document.createElement('button')
miBtn.setAttribute('class', "minus-btn")
miBtn.innerHTML = '-'
const plBtn = document.createElement('button')
plBtn.setAttribute('class', "plus-btn")
plBtn.innerHTML = '+'
const ingredientInput = document.createElement('div')
ingredientInput.setAttribute('class', 'col')
const ingredientText = document.createElement('input')
ingredientText.setAttribute('type', 'text')
ingredientText.setAttribute('class', 'form-control')
ingredientText.setAttribute('placeholder', 'Ingredient')

const amountInput = document.createElement('div')
amountInput.setAttribute('class', 'col')
const amountText = document.createElement('input')
amountText.setAttribute('type', 'text')
amountText.setAttribute('class', 'form-control')
amountText.setAttribute('placeholder', 'Amount')

formRow.appendChild(miBtn)
formRow.appendChild(plBtn)
ingredientInput.appendChild(ingredientText)
formRow.appendChild(ingredientInput)
amountInput.appendChild(amountText)
formRow.appendChild(amountInput)
ingContainer.appendChild(formRow)

};

plusBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('plus it up')
    addIngredientElement()
});

minusBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('minus it down')
});