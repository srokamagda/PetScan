document.getElementById('returnBack').addEventListener('click', function() { 
    window.history.back(); // This will navigate to the previous page in the browsing history 
});

var modal = document.getElementById('medicationModal');
var openModalBtn = document.getElementById('openMedicationModal');
var closeModalBtn = document.getElementById('closeMedicationModal');
var addMedicationBtn = document.getElementById('addMedication');
var cancelMedicationBtn = document.getElementById('cancelMedication');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Close modal
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal on cancel
cancelMedicationBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Add medication and save to local storage
addMedicationBtn.addEventListener('click', function() {
    var medicationName = document.getElementById('medicationName').value;
    var medicationDose = document.getElementById('medicationDose').value;
    var medicationTime = document.getElementById('medicationTime').value;
    var medicationDoseUnit = document.getElementById('doseUnit').value;

    if (medicationName && medicationDose && medicationTime && medicationDoseUnit) {
        var medication = {
            name: medicationName,
            dose: medicationDose,
            unit: medicationDoseUnit,
            time: medicationTime
        };

      // Retrieve petId from local storage 
      var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
      var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
      var pet = pets.find(p => p.id == petId); 

      if (pet) { // Add the medication to the pet's medications array 
        pet.health.medications.push(medication); // Update the pets in local storage 
        localStorage.setItem('pets', JSON.stringify(pets)); // Display medication on page 
        displayMedications(pet); // Close modal 
        modal.style.display = 'none'; 
    } else { 
        console.error('Pet not found for id:', petId); 
    }
    }
});

// Function to display medications on page

    // var medications = JSON.parse(localStorage.getItem('medications')) || [];

document.addEventListener('DOMContentLoaded', function() {   
        const petId = localStorage.getItem('currentPetId'); 
        console.log('petId:', petId); // Debugging statement

        const pets = JSON.parse(localStorage.getItem('pets')) || []; 
        console.log('pets:', pets); // Debugging statement to check pets array 

        if (pets.length > 0) { 
            const pet = pets.find(p => p.id == petId); 
            console.log('pet:', pet); // Debugging statement to check if the correct pet is found 
            if (pet) { 
                displayMedications(pet); 
            } else { 
                console.error('Pet not found for id:', petId); 
            } 
        } else { 
            console.error('No pets found in local storage.'); 
        }
    });
    
    function displayMedications(pet) {

        if (!pet.health.medications) { 
            console.log('No medication data available.'); 
            return; 
        }


        var medicationList = document.getElementById('medicationList');
        if (medicationList) { // Ensure the element exists
            medicationList.innerHTML = '';
    
            pet.health.medications.forEach(function(medication) {
                var medicationItem = document.createElement('div');
                medicationItem.innerHTML = `
                    <h2 style="margin-bottom: 10px;">⚬ ${medication.name}</h2>
                    <p style="margin-left: 50px;"><b>Serving:</b> ${medication.dose} ${medication.unit}</p>
                    <p style="margin-left: 50px;"><b>Time:</b> ${medication.time}</p>`;
                
                medicationList.appendChild(medicationItem);
            });
        }
    }
    
    // function getQueryParam(name) { 
    //     const urlParams = new URLSearchParams(window.location.search); 
    //     return urlParams.get(name); 
    // }
    
// Call displayMedications on page load
// document.addEventListener('DOMContentLoaded', displayMedications);









