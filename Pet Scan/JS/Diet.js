const mealModal = document.getElementById('mealModal');
const nutritionModal = document.getElementById('nutritionModal');
const openMealModalBtn = document.getElementById('openMealModal');


var addMealBtn = document.getElementById('addMeal');
var cancelMealBtn = document.getElementById('cancelMeal');


// Open Meal Modal
openMealModalBtn.addEventListener('click', () => {
    mealModal.style.display = 'flex';
});

// Close Meal Modal
cancelMealBtn.addEventListener('click', () => {
    mealModal.style.display = 'none';
});



document.addEventListener('DOMContentLoaded', function() { 
    const petId = getQueryParam('id'); 
    if (petId) { 
        localStorage.setItem('currentPetId', petId); 
    } 
}); 

function getQueryParam(name) { 
    const urlParams = new URLSearchParams(window.location.search); 
    return urlParams.get(name); 
}


document.addEventListener('DOMContentLoaded', function() { 
        var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
        var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
        var pet = pets.find(p => p.id == petId); 

        if (pet) { // Add the medication to the pet's medications array 
        const profileImage = document.getElementById('pet-pic'); 
        profileImage.src = pet.image;
        var petName = document.getElementById("pet-name");
        petName.textContent = pet.name;
        
 } else { 
    console.error('Pet not found for id:', petId); 
}});




addMealBtn.addEventListener('click', function() {
    const mealType = document.getElementById('mealType').value;
    const foodName = document.getElementById('foodName').value;
    const foodQuantity = document.getElementById('foodQuantity').value;
    const foodUnit = document.getElementById('foodUnit').value;
    const foodTime = document.getElementById('foodTime').value;

    if (!foodName || !foodQuantity || !foodUnit || !foodTime) {
        alert('Please fill out all fields!');
        return;
    }

    if (mealType && foodName && foodQuantity && foodUnit && foodTime) {
    var meal = {
            name: foodName,
            quantity: foodQuantity,
            unit: foodUnit,
            type: mealType,
            time:foodTime
        };

        // Retrieve petId from local storage 
        var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
        var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
        var pet = pets.find(p => p.id == petId); 

        if (pet) { // Add the medication to the pet's medications array 
            pet.diet.meals.push(meal); // Update the pets in local storage 

            localStorage.setItem('pets', JSON.stringify(pets)); // Display medication on page 

            displayMeals(pet); // Close modal 

            mealModal.style.display = 'none'; 
        } else { 
            console.error('Pet not found for id:', petId); 
        }

        }
});




function clearNutritionInputs() {
    document.getElementById('calories').value = '';
    document.getElementById('protein').value = '';
    document.getElementById('fat').value = '';
    document.getElementById('carbs').value = '';
}



var addNutritionBtn = document.getElementById('addNutrition');
var cancelNutritionBtn = document.getElementById('cancelNutrition');

// Close Meal Modal
cancelNutritionBtn.addEventListener('click', () => {
    nutritionModal.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function() { 
    var petId = localStorage.getItem('currentPetId'); 
    var pets = JSON.parse(localStorage.getItem('pets')) || []; 
    var pet = pets.find(p => p.id == petId); if (pet) {
         displayMeals(pet); 
        } 
    else { 
        console.error('Pet not found for id:', petId); 
} });



function displayMeals(pet) {

    if (!pet.diet || !pet.diet.meals) { 
        console.log('No meals data available.'); 
        return; 
    } else {

    var mealList = document.getElementById('mealList'); 
    mealList.innerHTML = ''; 

    pet.diet.meals.forEach(function(meal, index) { 
        var mealItem = document.createElement('div'); 
        mealItem.innerHTML = ` 
            <div class="meal"> 
                <div class="meal-header"> 
                    <h3>${meal.type}</h3> 
                    <input type="checkbox" class="meal-checkbox" data-date="${new Date().toDateString()}" title="Mark as done"> 
                </div> 

                <div class="meal-details"> 
                    <p>Food Name: ${meal.name}</p> 
                    <p>Quantity: ${meal.quantity} ${meal.unit}</p> 
                    <p>Time: ${meal.time}</p> 
                </div> 

                <div class="nutrition-summary"> 
                    <button class="toggle-nutrition-btn" data-index="${index}">
                        <p>Show Nutrition<i class="fa-solid fa-chevron-down" style="font-size: 1em; margin-left: 10px;"></i></p>
                    </button> 
                </div>
            
                <div class="nutrition-details" id="nutrition-details-${index}" style="display: none;"></div> 
            
                <button class="edit-btn" id="openNutritionModal-${index}" data-index="${index}">Edit Nutrition</button> 
                <button class="delete-btn" id="deleteMeal-${index}" data-index="${index}">Delete Meal</button> 
            </div><br><br>`; 
        mealList.appendChild(mealItem);

        // Display existing nutrition details if available 
        if (meal.nutrition) { 
            updateNutritionDetails(index, meal.nutrition); 
        }  

        const openNutritionModalBtn = document.getElementById(`openNutritionModal-${index}`); 
        const deleteMealBtn = document.getElementById(`deleteMeal-${index}`); 
        const toggleNutritionBtn = document.querySelector(`.toggle-nutrition-btn[data-index='${index}']`); 
        const mealCheckbox = mealItem.querySelector('.meal-checkbox');

        // Open Nutrition Modal
        openNutritionModalBtn.addEventListener('click', () => { 
            nutritionModal.style.display = 'flex'; 
            nutritionModal.setAttribute('data-meal-index', index); 
            clearNutritionInputs();
        });

        // Delete Meal
        deleteMealBtn.addEventListener('click', () => {
            // Retrieve the current pet data from local storage
            var petId = localStorage.getItem('currentPetId');
            var pets = JSON.parse(localStorage.getItem('pets')) || [];
            var pet = pets.find(p => p.id == petId);
            
            // Remove the meal from the pet's meals array
            if (pet) {
                pet.diet.meals.splice(index, 1);
                localStorage.setItem('pets', JSON.stringify(pets));
                
                // Refresh the displayed meals
                displayMeals(pet);
                
                // Refresh the calendar
                const date = mealCheckbox.getAttribute('data-date');
                if (activeDays[date] && activeDays[date].length > 0) {
                    activeDays[date].pop(); // Remove last dot (or adjust logic as needed)
                    if (activeDays[date].length === 0) {
                        delete activeDays[date]; // Remove day if no meals remain
                    }
                }
                generateCalendar(new Date(date)); // Refresh calendar
            }
        });

        toggleNutritionBtn.addEventListener('click', function() { 
            updateNutritionDetails(index, meal.nutrition);

            const nutritionDetailsDiv = document.getElementById(`nutrition-details-${index}`); 
            if (nutritionDetailsDiv.style.display === 'none') { 
                nutritionDetailsDiv.style.display = 'block'; 
                this.innerHTML = '<p>Hide Nutrition<i class="fa-solid fa-chevron-up" style="font-size: 1em; margin-left: 10px;"></i></p>'; 
            } else { 
                nutritionDetailsDiv.style.display = 'none'; 
                this.innerHTML = '<p>Show Nutrition<i class="fa-solid fa-chevron-down" style="font-size: 1em; margin-left: 10px;"></i></p>'; 
            } 
        });

        // Mark day on calendar when meal is checked 
        mealCheckbox.addEventListener('change', function() { 
            const date = this.getAttribute('data-date');
             if (this.checked) { 
                if (!activeDays[date]) { 
                    activeDays[date] = []; 
                } 
                activeDays[date].push(meal); // Mark day as active with the meal 
                } else { 
                    const index = activeDays[date].indexOf(meal); 
                      if (index > -1) { 
                        activeDays[date].splice(index, 1); // Unmark meal as active 
                        } if (activeDays[date].length === 0) { 
                            delete activeDays[date]; // Remove day if no meals remain 
                            } } 
                            generateCalendar(new Date(date)); // Refresh calendar
        }); 
    });}
}


addNutritionBtn.addEventListener('click', function() { 
    const calories = document.getElementById('calories').value; 
    const protein = document.getElementById('protein').value; 
    const fat = document.getElementById('fat').value; 
    const carbs = document.getElementById('carbs').value; 
    
    if (calories && protein && fat && carbs) { 
        var nutrition = { 
            calories: calories, 
            protein: protein, 
            fat: fat, 
            carbs: carbs 
        };

        // Retrieve petId from local storage 
        var petId = localStorage.getItem('currentPetId'); 
        console.log('petId:', petId); // Debugging statement 
        
        // Retrieve pets from local storage 
        var pets = JSON.parse(localStorage.getItem('pets')) || []; 
        console.log('pets:', pets); // Debugging statement 
        
        // Find the specific pet 
        var pet = pets.find(p => p.id == petId); 
        console.log('pet:', pet); // Debugging statement 
        
        if (pet) { 
            // Ensure the diet and meals objects exist 
            pet.diet = pet.diet || {}; 
            pet.diet.meals = pet.diet.meals || [];
            
            // Here you should find the specific meal to update. 
            // For example, if you are updating the first meal:
            if (pet.diet.meals.length > 0) {
                pet.diet.meals[0].nutrition = nutrition; 
            } else {
                pet.diet.meals.push({ nutrition: nutrition });
            }

            console.log('Updated nutrition:', pet.diet.meals[0].nutrition); // Debugging statement 

            // Update the pets in local storage 
            localStorage.setItem('pets', JSON.stringify(pets)); 
            
            displayMeals(pet);
            // Display nutrition on page 
            updateNutritionDetails(pet); 
            
            
            // Close modal 
            nutritionModal.style.display = 'none'; 
        } else { 
            console.error('Pet not found for id:', petId); 
        }
    }
});


        

function updateNutritionDetails(index, nutrition) {
    var nutritionDetailsDiv = document.getElementById(`nutrition-details-${index}`);
    if (nutritionDetailsDiv && nutrition) {
        nutritionDetailsDiv.innerHTML = `
            <p><b>Calories:</b> ${nutrition.calories !== undefined ? nutrition.calories : 'N/A'}</p>
            <p><b>Protein:</b> ${nutrition.protein !== undefined ? nutrition.protein : 'N/A'}</p>
            <p><b>Fat:</b> ${nutrition.fat !== undefined ? nutrition.fat : 'N/A'}</p>
            <p><b>Carbs:</b> ${nutrition.carbs !== undefined ? nutrition.carbs : 'N/A'}</p>
        `;
    }
}


document.addEventListener('DOMContentLoaded', function() {   
    const petId = localStorage.getItem('currentPetId'); 
    console.log('petId:', petId); // Debugging statement

    const pets = JSON.parse(localStorage.getItem('pets')) || []; 
    console.log('pets:', pets); // Debugging statement to check pets array 

    if (pets.length > 0) { 
        const pet = pets.find(p => p.id == petId); 
        console.log('pet:', pet); // Debugging statement to check if the correct pet is found 
        if (pet) { 
            displayMeals(pet);
        } else { 
            console.error('Pet not found for id:', petId); 
        } 
    } else { 
        console.error('No pets found in local storage.'); 
    }
});



