document.getElementById('returnBack').addEventListener('click', function() { 
    window.history.back(); // This will navigate to the previous page in the browsing history 
});


document.addEventListener('DOMContentLoaded', function() { 
    var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
    var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
    var pet = pets.find(p => p.id == petId); 

    if (pet) { 
    const profileImage = document.getElementById('pet-pic'); 
    profileImage.src = pet.image;

    const profileImage2 = document.getElementById('pet-pic-sub'); 
    profileImage2.src = pet.image;

    var petName = document.getElementById("pet-name");
    petName.textContent = pet.name;
    
    var joinDate = document.getElementById("joinDate");
    joinDate.textContent = pet.details.joined;

    var birthday = document.getElementById("birthday");
    birthday.textContent = pet.details.birthday;

    var speciesName = document.getElementById("speciesName");
    speciesName.textContent = pet.details.species;

    var breedName = document.getElementById("breedName");
    breedName.textContent = pet.details.breed;

    var weightNumber = document.getElementById("weightNumber");
    weightNumber.textContent = pet.details.weight + " " + pet.details.weightUnit;

    var heightNumber = document.getElementById("heightNumber");
    heightNumber.textContent = pet.details.height + " " + pet.details.heightUnit;



    
} else { 
console.error('Pet not found for id:', petId); 
}});




document.addEventListener('DOMContentLoaded', function() { 
    var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
    var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
    var pet = pets.find(p => p.id == petId); 

    if (pet) { 

    var name = document.getElementById("name");
    name.value = pet.name;
    
    var birthday = document.getElementById("Birthday");
    birthday.value = pet.details.birthday;
    
    var species = document.getElementById("species");
    species.value = pet.details.species;

    var breed = document.getElementById("breed");
    breed.value = pet.details.breed;

    var weightInput = document.getElementById("weightInput");
    weightInput.value = pet.details.weight;

    var weightInput = document.getElementById("weightInput");
    weightInput.value = pet.details.weight;


    var unit = document.getElementById("unit");
    unit.value = pet.details.weightUnit;

    var heightInput = document.getElementById("heightInput");
    heightInput.value = pet.details.height;


    var measure = document.getElementById("measure");
    measure.value = pet.details.heightUnit;

    flatpickr("#Birthday", {
        dateFormat: "F j, Y",
    });



    
} else { 
console.error('Pet not found for id:', petId); 
}});



var saveProfile = document.getElementById('saveProfile');

saveProfile.addEventListener('click', function() {
    var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
    var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
    var pet = pets.find(p => p.id == petId); 


    var name = document.getElementById("name").value;
    var birthday = document.getElementById("Birthday").value;
    var species = document.getElementById("species").value;
    var breed = document.getElementById("breed").value;
    var weightInput = document.getElementById("weightInput").value;
    var unit = document.getElementById("unit").value;
    var heightInput = document.getElementById("heightInput").value;
    var measure = document.getElementById("measure").value;
    

    if (pet) { 
       
        pet.name = name;
        pet.details.birthday = birthday;
        pet.details.species = species;
        pet.details.breed = breed;
        pet.details.weight = weightInput;
        pet.details.weightUnit = unit;
        pet.details.height = heightInput;
        pet.details.heightUnit = measure;
        
        localStorage.setItem('pets', JSON.stringify(pets));

        var petName = document.getElementById("pet-name");
    petName.textContent = pet.name;
    
    var joinDate = document.getElementById("joinDate");
    joinDate.textContent = pet.details.joined;

    var birthday = document.getElementById("birthday");
    birthday.textContent = pet.details.birthday;

    var speciesName = document.getElementById("speciesName");
    speciesName.textContent = pet.details.species;

    var breedName = document.getElementById("breedName");
    breedName.textContent = pet.details.breed;

    var weightNumber = document.getElementById("weightNumber");
    weightNumber.textContent = pet.details.weight + " " + pet.details.weightUnit;

    var heightNumber = document.getElementById("heightNumber");
    heightNumber.textContent = pet.details.height + " " + pet.details.heightUnit;
        goBack();
    } else { 
    console.error('Pet not found for id:', petId); 
    }


});












