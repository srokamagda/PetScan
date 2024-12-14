document.getElementById('returnBack').addEventListener('click', function() { 
    window.history.back(); // This will navigate to the previous page in the browsing history 
});

var modal = document.getElementById('medicationModal');
var openModalBtn = document.getElementById('openMedicationModal');
var closeModalBtn = document.getElementById('closeMedicationModal');
var addConditionBtn = document.getElementById('addMedication');
var cancelConditionBtn = document.getElementById('cancelMedication');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal on cancel
cancelConditionBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});


addConditionBtn.addEventListener('click', function() {
    var conditionName = document.getElementById('conditionName').value;
    var clinicalStatus = document.getElementById('clinicalStatus').value;
    var verificationStatus = document.getElementById('verificationStatus').value;
    var dateRecorded = new Date();


    if (conditionName && clinicalStatus && verificationStatus) {
        var formattedDate = dateRecorded.toISOString();
        var condition = {
            name: conditionName,
            clinical:clinicalStatus,
            verification: verificationStatus,
            date: formattedDate
        };

         // Retrieve petId from local storage 
         var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
         var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
         var pet = pets.find(p => p.id == petId); 
 
         if (pet) { // Add the medication to the pet's medications array 
             pet.health.conditions.push(condition); // Update the pets in local storage 
 
             localStorage.setItem('pets', JSON.stringify(pets)); // Display condition on page 
 
             displayConditions(pet); // Close popup
 
             modal.style.display = 'none'; 
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
            displayConditions(pet); 
        } else { 
            console.error('Pet not found for id:', petId); 
        } 
    } else { 
        console.error('No pets found in local storage.'); 
    }
});

// Function to display medications on page
function displayConditions(pet) {

    if (!pet.health.conditions ) { 
        console.log('No condition data available.'); 
        return; 
    }

    var conditionList = document.getElementById('medicationList');
    conditionList.innerHTML = '';

    pet.health.conditions.forEach(function(condition) { 
        var recordedAtDate = new Date(condition.date); 
        var formattedDate = recordedAtDate.toLocaleDateString('en-GB', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
 
        });
    
        var conditionItem = document.createElement('div');
        var nameCapitalized = condition.name.charAt(0).toUpperCase() + condition.name.slice(1);
        var clinicalCapitalized = condition.clinical.charAt(0).toUpperCase() + condition.clinical.slice(1);
        var confirmationCapitalized = condition.verification.charAt(0).toUpperCase() + condition.verification.slice(1);

        conditionItem.innerHTML = `
            <h2 style = "margin-bottom: 10px;"> ⚬ ${nameCapitalized} </h2>
            <p style = "margin-left: 50px;"><b>Clinical Status: </b>${clinicalCapitalized} </p> 
            <p style = "margin-left: 50px;"><b>Confirmation Status: </b>${confirmationCapitalized} </p> 
            <p style = "margin-left: 50px;"><b>Recorded:</b> ${formattedDate}</p> `;

        conditionList.appendChild(conditionItem);
    });
}











