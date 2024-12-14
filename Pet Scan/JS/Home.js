document.addEventListener('DOMContentLoaded', function() { 
    var pets = JSON.parse(localStorage.getItem('pets')) || []; 
    console.log('Pets from localStorage:', pets);

    var profileSelection = document.getElementById("profile-selection");
        profileSelection.innerHTML = '';

        pets.forEach(function(pet) { // Use 'pet' to reference each pet object
            console.log('Processing pet:', pet); // Add logging to check each pet object
            
            var petProfile = document.createElement('div');
            petProfile.className = 'pet-profile';
            petProfile.style.backgroundImage = `url('${pet.image}')`;
            petProfile.style.backgroundSize = 'cover'; // Ensure the background image covers the element
            
            // Assigning click event using addEventListener for better practice
            petProfile.addEventListener('click', function() {
                window.location.href = `Diet.html?id=${pet.id}`;
            });

            petProfile.innerHTML = `
                <div class="pet-name"><h5>${pet.name}</h5></div>`;
            
            profileSelection.appendChild(petProfile);
        });
    
});


