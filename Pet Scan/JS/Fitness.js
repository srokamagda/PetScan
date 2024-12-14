var fitnessPopup = document.getElementById('fitnessPopup');
var openFitnessPopup = document.getElementById('openSetGoal');
var closeFitnessPopup = document.getElementById('closeFitnessModal');
var addGoalBtn = document.getElementById('setGoal');
var cancelGoalBtn = document.getElementById('cancelGoal');

openFitnessPopup.addEventListener('click', function() {
    fitnessPopup.style.display = 'block';
});

// Close modal
closeFitnessPopup.addEventListener('click', function() {
    fitnessPopup.style.display = 'none';
});

// Close modal on cancel
cancelGoalBtn.addEventListener('click', function() {
    fitnessPopup.style.display = 'none';
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





addGoalBtn.addEventListener('click', function() {
    var goalNumber = document.getElementById('goalNumber').value;
    var unit = document.getElementById('measureUnit').value;
    
    var pets = JSON.parse(localStorage.getItem('pets')) || []; // Define a variable for the petId you are interested in 
    var petId = localStorage.getItem('currentPetId'); // Find the specific pet 
    var pet = pets.find(p => p.id == petId); 
    
    if (pet && pet.fitness && pet.fitness.real !== undefined) { // Assign the 'fitness.real' value to a variable 
        var fitnessReal = pet.fitness.real; 
        console.log('Fitness Real:', fitnessReal); 
    } else { 
        console.error('Fitness real property not found.');
    }

    if (goalNumber && unit) {
        var goal = {
            real: fitnessReal,
            number: goalNumber,
            unit: unit
        };

        // Retrieve petId from local storage
        var petId = localStorage.getItem('currentPetId');
        // Retrieve pets from local storage
        var pets = JSON.parse(localStorage.getItem('pets')) || [];
        // Find the specific pet
        var pet = pets.find(p => p.id == petId);

        if (pet) {
            // Set the goal in the pet's fitness object
            pet.fitness = goal;

            // Update the pets in local storage
            localStorage.setItem('pets', JSON.stringify(pets));

            // Display goal on page
            displayGoal(pet);

            // Close modal
            fitnessPopup.style.display = 'none';
        } else {
            console.error('Pet not found for id:', petId);
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var petId = localStorage.getItem('currentPetId');
    var pets = JSON.parse(localStorage.getItem('pets')) || [];
    var pet = pets.find(p => p.id == petId);

    if (pet) {
        displayGoal(pet);
    } else {
        console.error('Pet not found for id:', petId);
    }
});


function displayGoal(pet) { 


    var fitnessList = document.getElementById('progressCircle');
    
    fitnessList.innerHTML = ''; 
    
    if (pet.fitness) { 
        var unit =pet.fitness.unit.charAt(0).toUpperCase() + pet.fitness.unit.slice(1);
        var goalItem = document.createElement('div'); 
        goalItem.innerHTML = ` 
        <div class="goal"> 
            <h1>${pet.fitness.real}</h1>
            <p class = "unit" id = "unit"> ${unit}</p>
            <h4>Goal ${pet.fitness.number}</h4>
        </div>`; 
        fitnessList.appendChild(goalItem); 
    } } 














