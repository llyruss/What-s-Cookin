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
ingredientText.setAttribute('class', 'form-control ingredient')
ingredientText.setAttribute('placeholder', 'Ingredient')

formRow.appendChild(miBtn)
formRow.appendChild(plBtn)
ingredientInput.appendChild(ingredientText)
formRow.appendChild(ingredientInput)
ingContainer.appendChild(formRow)
};

async function newFormHandler(event) {
    event.preventDefault();

    const recipeName = document.querySelector('input[name="recipe-name"]').value;
    const has_nuts = document.querySelector('#contains-nuts-box').checked;
    const vegan = document.querySelector('#vegan-box').checked;
    const gluten_free = document.querySelector('#gluten-free-box').checked;
    const ingredientName = document.querySelectorAll('.ingredient')
    const recipeDirection = document.querySelector('#directions-text').value

    const response = await fetch(`/api/recipes/create`, {
        method: 'POST',
        body: JSON.stringify({
            recipeName,
            has_nuts,
            vegan,
            gluten_free
            

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const responseJSON = await response.json()
    recipeId = responseJSON['id']
    
   
   console.log(ingredientName)
  
   ingredientName.forEach( ingredient => {
    x = {ingredientName : ingredient.value,
        recipe_id : recipeId
    }
    fetch("/api/ingredients", {
      method: 'POST',
      headers: {
    'Content-Type': 'application/json',
      },
      body: JSON.stringify(x),
      
    }).then(r => {})
    console.log(x)
  })

   const dirResponse = await fetch(`/api/directions`, {
    method: 'POST',
    body: JSON.stringify({
        recipeDirection,
        recipe_id : recipeId
    }),
    headers: {
        'Content-Type': 'application/json'
    }
   });
const dirResponseJSON = await dirResponse.json()
console.log(dirResponseJSON)


  

    if (response.ok) {
        document.location.replace('/recipes');
    } else {
        alert(response.statusText);
    }
}

plusBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('plus it up')
    addIngredientElement()
});

minusBtn.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('minus it down')
});

document.querySelector('#new-recipe-form').addEventListener('submit', newFormHandler);