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
    var vetName = document.getElementById('vetName').value;
    var vetMobile = document.getElementById('mobile').value;
    var vetAddress = document.getElementById('vetAddress').value;


    if (vetName && vetMobile && vetAddress) {
        var vet = {
            name: vetName,
            mobile: vetMobile,
            address: vetAddress
        };

        // Retrieve petId from local storage 
        var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
        var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
        var pet = pets.find(p => p.id == petId); 

        if (pet) { // Add the medication to the pet's medications array 
            pet.health.vets.push(vet); // Update the pets in local storage 

            localStorage.setItem('pets', JSON.stringify(pets)); // Display condition on page 

            displayVets(pet); // Close popup

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
            displayVets(pet); 
        } else { 
            console.error('Pet not found for id:', petId); 
        } 
    } else { 
        console.error('No pets found in local storage.'); 
    }
});

// Function to display vaccinations on page
function displayVets(pet) {

    if (!pet.health.vets ) { 
        console.log('No vet data available.'); 
        return; 
    }
    var vetList = document.getElementById('vaccinationList');
    vetList.innerHTML = ''; // Clear existing content

    pet.health.vets.forEach(function(vet) {
        var phone = vet.mobile.replace(/\D/g, ''); // Remove all non-numeric characters
        var formattedValue = '';

        if (phone.length > 0) {
            formattedValue += '(' + phone.substring(0, 3) + ')'; // Add parentheses around the first three digits
        }
        if (phone.length > 3) {
            formattedValue += ' ' + phone.substring(3, 6); // Add a space after the parentheses and the next three digits
        }
        if (phone.length > 6) {
            formattedValue += ' - ' + phone.substring(6, 10); // Add a dash after the next three digits and the last four digits
        }
        phone = formattedValue; // Set the formatted value back to the input

        var vetItem = document.createElement('div');
        vetItem.innerHTML = `
            <h2 style="margin-bottom: 10px; margin-left: 10px;">⚬ ${vet.name}</h2>
            <p style="margin-left: 30px;"><b>Mobile:</b> ${phone}</p>
            <p style="margin-left: 30px;"><b>Address:</b> ${vet.address}</p>
        `;
        vetList.appendChild(vetItem);
    });
}



