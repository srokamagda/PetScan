document.getElementById('returnBack').addEventListener('click', function() { 
    window.history.back(); // This will navigate to the previous page in the browsing history 
});




document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#Birthday", {
        dateFormat: "F j, Y",
    });
});


var saveProfile = document.getElementById('saveProfile');
const profileSection = document.getElementById('editProfileSection');
const loadingScreen = document.getElementById('loadingScreen');

saveProfile.addEventListener('click', function() {
    var pets = JSON.parse(localStorage.getItem('pets')) || []; 

    function getNextId(pets) { 
        if (pets.length === 0) return 1; // If no pets, start with ID 1 
        var ids = pets.map(p => Number(p.id)); 
        console.log('Extracted IDs:', ids);
        return Math.max(...ids) + 1; 
    }


    var id = getNextId(pets); 
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("Birthday").value; // Ensure this ID is correct
    var species = document.getElementById("species").value;
    var breed = document.getElementById("breed").value;
    var weight = document.getElementById("weightInput").value;
    var unit = document.getElementById("unit").value;
    var height = document.getElementById("heightInput").value;
    var measure = document.getElementById("measure").value;
    

    var recordedAtDate = new Date(); 
        var formattedDate = recordedAtDate.toLocaleDateString('en-GB', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
 
        });
    
    var newPet = {
        id: id,
        name: name,
        image: "Images/Sirius.png",
        details: { // Corrected "detail" to "details"
            joined: formattedDate,
            birthday: birthday,
            species: species,
            breed: breed,
            weight: weight,
            weightUnit: unit,
            height: height,
            heightUnit: measure
        },
        diet: {
            meals: []
        },
        fitness: {
            real: "0",
            number: "",
            unit: ""
        },
        health: {
            medications: [],
            vaccinations: [],
            allergies: [],
            conditions: [],
            vets: [],
            appointments: []
        },
        map: 'Location 1'
    }

    console.log('New pet object:', newPet);
    pets.push(newPet);

    localStorage.setItem('pets', JSON.stringify(pets));
    console.log('Pets array saved to localStorage.');

    var savedPets = JSON.parse(localStorage.getItem('pets')) || []; 
    console.log('Pets from localStorage after saving:', savedPets);

    profileSection.style.display = 'none';
    loadingScreen.style.display = 'flex';

    setTimeout(() => {
        window.location.href = `Diet.html?id=${newPet.id}`;
    }, 2000);
});















