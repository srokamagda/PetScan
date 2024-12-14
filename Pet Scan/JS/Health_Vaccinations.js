document.getElementById('returnBack').addEventListener('click', function() { 
    window.history.back(); // This will navigate to the previous page in the browsing history 
});


var vaccinePopup = document.getElementById('vaccinationModal');
var openVaccinePopup = document.getElementById('openVaccinationPopup');
var closeVaccinePopup = document.getElementById('closeVaccinationModal');
var addVaccineBtn = document.getElementById('addVaccination');
var cancelVaccineBtn = document.getElementById('cancelVaccination');

openVaccinePopup.addEventListener('click', function() {
    vaccinePopup.style.display = 'block';
});

// Close modal
closeVaccinePopup.addEventListener('click', function() {
    vaccinePopup.style.display = 'none';
});

// Close modal on cancel
cancelVaccineBtn.addEventListener('click', function() {
    vaccinePopup.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#appointmentDate", {
        dateFormat: "F j, Y",
    });
});


// Add vaccination and save to local storage
addVaccineBtn.addEventListener('click', function() {
    var vaccinationName = document.getElementById('vaccinationName').value;
    var vaccinationAppointmentDate = document.getElementById('appointmentDate').value;
    var vaccinationVet = document.getElementById('vaccinationVet').value;
    var vaccinationAddress = document.getElementById('vaccinationAddress').value;

    if (vaccinationName && vaccinationAppointmentDate && vaccinationVet && vaccinationAddress) {
        var vaccination = {
            name: vaccinationName,
            date: vaccinationAppointmentDate,
            vet: vaccinationVet,
            address: vaccinationAddress
        };

        // Retrieve petId from local storage 
        var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
        var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
        var pet = pets.find(p => p.id == petId); 

        if (pet) { // Add the medication to the pet's medications array 
            pet.health.vaccinations.push(vaccination); // Update the pets in local storage 

            localStorage.setItem('pets', JSON.stringify(pets)); // Display condition on page 

            displayVaccines(pet); // Close popup

            vaccinePopup.style.display = 'none'; 
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
            displayVaccines(pet); 
        } else { 
            console.error('Pet not found for id:', petId); 
        } 
    } else { 
        console.error('No pets found in local storage.'); 
    }
});

// Function to display vaccinations on page
function displayVaccines(pet) {

    if (!pet.health.vaccinations ) { 
        console.log('No vaccination data available.'); 
        return; 
    }
    var vaccinationList = document.getElementById('vaccinationList');
    vaccinationList.innerHTML = '';

    pet.health.vaccinations.forEach(function(vaccination) {
        var vaccinationItem = document.createElement('div');
        vaccinationItem.innerHTML = `
            <h2 style = "margin-bottom: 10px;"> ⚬ ${vaccination.name} </h2>
            <p style = "margin-left: 50px;"><b>Recorded:</b> ${vaccination.date}</p>
            <p style = "margin-left: 50px;"><b>Clinic: </b>${vaccination.vet} </p> 
            <p style = "margin-left: 50px;"><b>Address: </b>${vaccination.address} </p> `;

        vaccinationList.appendChild(vaccinationItem);
    });
}


