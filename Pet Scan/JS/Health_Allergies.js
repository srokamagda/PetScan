document.getElementById('returnBack').addEventListener('click', function() { 
    window.history.back(); // This will navigate to the previous page in the browsing history 
});


var allergyPopup = document.getElementById('allergyModal');
var openAllergyPopup = document.getElementById('openAllergyPopup');
var closeAllergyPopup = document.getElementById('closeAllergyModal');
var addAllergyBtn = document.getElementById('addAllergy');
var cancelAllergyBtn = document.getElementById('cancelAllergy');

openAllergyPopup.addEventListener('click', function() {
    allergyPopup.style.display = 'block';
});

// Close modal
closeAllergyPopup.addEventListener('click', function() {
    allergyPopup.style.display = 'none';
});

// Close modal on cancel
cancelAllergyBtn.addEventListener('click', function() {
    allergyPopup.style.display = 'none';
});




// Add Allergy and save to local storage
addAllergyBtn.addEventListener('click', function() {
    var allergyName = document.getElementById('allergyName').value;
    var allergyCategory = document.getElementById('levelAllergy').value;
    var dateRecorded = new Date();



    if (allergyName && allergyCategory) {
        var formattedDate = dateRecorded.toISOString();
        var allergy = {
            name: allergyName,
            category: allergyCategory,
            date: formattedDate
        };

    // Retrieve petId from local storage 
      var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
      var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
      var pet = pets.find(p => p.id == petId); 

      if (pet) { // Add the medication to the pet's medications array 
        pet.health.allergies.push(allergy); // Update the pets in local storage 

        localStorage.setItem('pets', JSON.stringify(pets)); // Display medication on page 

        displayAllergies(pet); // Close modal 

        allergyPopup.style.display = 'none'; 
       } else { 
        console.error('Pet not found for id:', petId); 
      }
   
    }
});

document.addEventListener('DOMContentLoaded', function() {   
    const petId = localStorage.getItem('currentPetId'); 
    console.log('petId:', petId); // Debugging statement

    const pets = JSON.parse(localStorage.getItem('pets')) || []; 
    console.log('pets:', pets); // Debugging statement to check pets array 

    if (pets.length > 0) { 
        const pet = pets.find(p => p.id == petId); 
        console.log('pet:', pet); // Debugging statement to check if the correct pet is found 
        if (pet) { 
            displayAllergies(pet); 
        } else { 
            console.error('Pet not found for id:', petId); 
        } 
    } else { 
        console.error('No pets found in local storage.'); 
    }
});

// Function to display allergys on page
function displayAllergies(pet) {

    if (!pet.health.allergies ) { 
        console.log('No allergies data available.'); 
        return; 
    }

    
    var allergyList = document.getElementById('allergyList');
    allergyList.innerHTML = '';

    pet.health.allergies.forEach(function(allergy) { 
        var recordedAtDate = new Date(allergy.date); 
        var formattedDate = recordedAtDate.toLocaleDateString('en-GB', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
 
        });
    
        var allergyItem = document.createElement('div');
        var categoryCapitalized = allergy.category.charAt(0).toUpperCase() + allergy.category.slice(1);
        allergyItem.innerHTML = `
            <h2 style = "margin-bottom: 10px;"> ⚬ ${allergy.name} </h2>
            <p style = "margin-left: 50px;"><b>Category: </b>${categoryCapitalized} </p> 
            <p style = "margin-left: 50px;"><b>Recorded:</b> ${formattedDate}</p> `;

        allergyList.appendChild(allergyItem);
    });
}


