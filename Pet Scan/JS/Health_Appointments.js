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
    var appointmentTitle = document.getElementById('appointmentTitle').value;
    var appointmentDate = document.getElementById('appointmentDate').value;
    var appointmentTime = document.getElementById('appointmentTime').value;
    var appointmentVet = document.getElementById('appointmentVet').value;
    var appointmentAddress = document.getElementById('appointmentAddress').value;

    if (appointmentTitle && appointmentDate && appointmentTime && appointmentVet && appointmentAddress) {
        var appointment = {
            title: appointmentTitle,
            date: appointmentDate,
            time: appointmentTime,
            vet: appointmentVet,
            address: appointmentAddress
        };
        

         // Retrieve petId from local storage 
        var petId = localStorage.getItem('currentPetId'); // Retrieve pets from local storage 
        var pets = JSON.parse(localStorage.getItem('pets')) || []; // Find the specific pet 
        var pet = pets.find(p => p.id == petId); 

        if (pet) { // Add the medication to the pet's medications array 
            pet.health.appointments.push(appointment); // Update the pets in local storage 

            localStorage.setItem('pets', JSON.stringify(pets)); // Display medication on page 

            displayAppointments(pet); // Close modal 

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
            displayAppointments(pet); 
        } else { 
            console.error('Pet not found for id:', petId); 
        } 
    } else { 
        console.error('No pets found in local storage.'); 
    }
});

// Function to display vaccinations on page
function displayAppointments(pet) {

    if (!pet.health.appointments ) { 
        console.log('No appointment data available.'); 
        return; 
    }

    var appointmentList = document.getElementById('vaccinationList');
    appointmentList.innerHTML = '';

    pet.health.appointments.forEach(function(appointment) {
        var appointmentItem = document.createElement('div');
        appointmentItem.innerHTML = `
            <h3 style = "margin-bottom: 10px; font-size: 20px;"> ⚬ ${appointment.title} </h3>
            <p style = "margin-left: 50px;"><b>Date:</b> ${appointment.date}</p>
            <p style = "margin-left: 50px;"><b>Time: </b>${appointment.time} </p> 
            <p style = "margin-left: 50px;"><b>Clinic: </b>${appointment.vet} </p> 
            <p style = "margin-left: 50px;"><b>Address: </b>${appointment.address} </p> `;

        appointmentList.appendChild(appointmentItem);
    });
}


