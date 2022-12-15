

const search = () => {


    
    
    const inputField = document.getElementById('search_value');
    const inputFieldValue = inputField.value;

    if(inputFieldValue == ""){
        alert("Please enter your Dish")
    }
    else{

    

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayFoods(data.meals))
    .catch(err=> {alert('failed to fetch') })
    inputField.value = '';
}
}

const displayFoods = foods => {
    // console.log(foods);
    const divContainer = document.getElementById('search_result');
    divContainer.textContent = '';
    foods.forEach(food => {
        console.log(food);
        const div = document.createElement('div');
        div.className = 'foods';
        div.innerHTML = `
        
        <div class="container">
        

        <div class="card" onclick="loadFoodDetails('${food.idMeal}')">
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${food.strMeal}</h5>
          <p>${food.strInstructions}</p>
          <a class="youtube_link btn btn-primary" href="${food.strYoutube}">Youtube Link</a>
      
          
      

        
        </div>
        </div>
       

</div>


        `
        divContainer.appendChild(div);
        console.log(food);
    })
    
}

//lookup meal detials by ID
const loadFoodDetails = foodId => {
    // console.log(foods);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayFoodDetails(data.meals[0]))

}

const displayFoodDetails = food => {
    const divContainer = document.getElementById('food_details');
    divContainer.innerHTML = `
    <div class="food-details">
    <img width="350px" src="${food.strMealThumb}" />
        <h5>${food.strMeal}</h5>
        <p>${food.strInstructions.slice(0,80)}</p>
    </div>
         
    `
    console.log(food);
}


// function recipe(){

    
    
//   let recipe_details=`
//   <div class="card" style="width: 18rem;">
//   <div class="card-body">
    
//   <h5 class="card-title">${food.strMeal}</h5>
//     <p class="card-text">${food.strInstructions.slice(0,80)}</p>
    
    
//   </div>
// </div>
// `

// search_result.innerHTML=recipe_details;

// }