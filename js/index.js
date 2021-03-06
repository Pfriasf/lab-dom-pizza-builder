// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
  // Iteration 1: set the visibility of `<section class="mushroom">`
}

function renderGreenPeppers() {
    document.querySelectorAll(".green-pepper").forEach((oneGreenPep) => {
      if (state.greenPeppers) {
        oneGreenPep.style.visibility = "visible";
      } else {
        oneGreenPep.style.visibility = "hidden";
      }
    });
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}

function renderWhiteSauce() {
   //Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector(".sauce") 
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white")
    } else {
      sauce.classList.remove("sauce-white")
    }
  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const sauce = document.querySelector(".crust") 
    if (state.glutenFreeCrust) {
      sauce.classList.add("crust-gluten-free")
    } else {
      sauce.classList.remove("crust-gluten-free")
}
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btn = document.querySelector(".btn-pepperoni")
    if(state.pepperoni){
      btn.classList.add("active")
    }else{
      btn.classList.remove("active")
    }

    btn = document.querySelector(".btn-mushrooms")
    if (state.mushrooms) {
      btn.classList.add("active")
    } else {
      btn.classList.remove("active")
    }

    btn = document.querySelector(".btn-green-peppers ")
    if (state.greenPeppers) {
      btn.classList.add("active")
    } else {
      btn.classList.remove("active")
    }

   btn = document.querySelector(".btn-sauce")
   if (state.whiteSauce) {
    btn.classList.add("active")
   } else {
    btn.classList.remove("active")
   }

  btn = document.querySelector(".btn-crust")
  if (state.glutenFreeCrust) {
    btn.classList.add("active")
  } else {
    btn.classList.remove("active")
  }
}

function renderPrice() {
  //Iteration 4: change the HTML of `<aside class="panel price">`
  let list = document.querySelector(".panel.price ul")
  let totalprice = document.querySelector(".panel.price strong")
  let total= 10;

  list.innerHTML = ''
  for (let ingredient in ingredients) {
    if (state[ingredient]) {
      list.insertAdjacentHTML("beforeend",`<li>$ ${ingredients[ingredient].price} ${ingredient}</li>`)
      total+= ingredients[ingredient].price
    }
    totalprice.innerHTML= `$${total}`
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
  renderButtons();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
  renderButtons();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
    renderButtons();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
    renderButtons();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
    renderButtons();
  });
