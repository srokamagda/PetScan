var emailPopup = document.getElementById('emailPopup');
var openEmailPopup = document.getElementById('editEmail');
var addGoalBtn = document.getElementById('setGoal');
var cancelEmailBtn = document.getElementById('cancelGoal');
var closeEmailModal = document.getElementById('closeEmailModal');

openEmailPopup.addEventListener('click', function() {
    emailPopup.style.display = 'block';

});

// Close modal on cancel
cancelEmailBtn.addEventListener('click', function() {
    emailPopup.style.display = 'none';
});

// Close modal on cancel
closeEmailModal.addEventListener('click', function() {
    emailPopup.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    var profileArray = JSON.parse(localStorage.getItem('profile')) || [];
    var profile = profileArray.length > 0 ? profileArray[0] : {};
    var passwordRepresentation = "*";

    if (profile && Object.keys(profile).length > 0) {
        document.getElementById('email').textContent = profile.email || 'N/A';
        document.getElementById('notificationEmail').textContent = profile.email || 'N/A';
        document.getElementById('phone').textContent = profile.phone || 'N/A';
        document.getElementById('notificationPhone').textContent = profile.phone || 'N/A';
        document.getElementById('birthday').textContent = profile.birthday || 'N/A';
        document.getElementById('region').textContent = profile.region || 'N/A';
        document.getElementById('notificationRegion').textContent = profile.region || 'N/A';
        document.getElementById('username').textContent = profile.username || 'N/A';

        for (x = 1; x < profile.password.length; x++) {
            passwordRepresentation+="*";
        }
        document.getElementById('password').textContent = passwordRepresentation || 'N/A';

    } else { 
        console.error('Profile not found:', profile); 
    }
});

var saveEmail = document.getElementById('saveEmail');

saveEmail.addEventListener('click', function() {
    var newEmail = document.getElementById('newEmail').value;

    if (newEmail) {
        var profileArray = JSON.parse(localStorage.getItem('profile')) || [];
        var profile = profileArray.length > 0 ? profileArray[0] : {};

        if (profile && Object.keys(profile).length > 0) {
            profile.email = newEmail;
            profileArray[0] = profile;
            localStorage.setItem('profile', JSON.stringify(profileArray));
            document.getElementById('email').textContent = profile.email;
            document.getElementById('notificationEmail').textContent = profile.email;
            emailPopup.style.display = 'none'; 
        } else { 
            console.error('Profile not found:', profile); 
        }
    }
});



// Mobile Popup
var mobilePopup = document.getElementById('mobilePopup');
var openMobilePopup = document.getElementById('editMobile');
var cancelMobileBtn = document.getElementById('cancelMobile');
var closeMobileModal = document.getElementById('closeMobileModal');

openMobilePopup.addEventListener('click', function() {
    mobilePopup.style.display = 'block';

});

// Close modal on cancel
cancelMobileBtn.addEventListener('click', function() {
    mobilePopup.style.display = 'none';
});

// Close modal on cancel
closeMobileModal.addEventListener('click', function() {
    mobilePopup.style.display = 'none';
});


var saveMobile = document.getElementById('saveMobile');

saveMobile.addEventListener('click', function() {
    var newPhone = document.getElementById('newMobile').value;

    if (newPhone) {
        var profileArray = JSON.parse(localStorage.getItem('profile')) || [];
        var profile = profileArray.length > 0 ? profileArray[0] : {};

        if (profile && Object.keys(profile).length > 0) {
            profile.phone = newPhone;
            profileArray[0] = profile;
            localStorage.setItem('profile', JSON.stringify(profileArray));
            document.getElementById('phone').textContent = profile.phone;
            document.getElementById('notificationPhone').textContent = profile.phone;
            mobilePopup.style.display = 'none'; 
        } else { 
            console.error('Profile not found:', profile); 
        }
    }
});



// Region Popup
var regionPopup = document.getElementById('regionPopup');
var openRegionPopup = document.getElementById('editRegion');
var cancelRegionBtn = document.getElementById('cancelRegion');
var closeRegionModal = document.getElementById('closeRegionModal');

openRegionPopup.addEventListener('click', function() {
    regionPopup.style.display = 'block';

});

// Close modal on cancel
cancelRegionBtn.addEventListener('click', function() {
    regionPopup.style.display = 'none';
});

// Close modal on cancel
closeRegionModal.addEventListener('click', function() {
    regionPopup.style.display = 'none';
});


var saveRegion = document.getElementById('saveRegion');

saveRegion.addEventListener('click', function() {
    var newRegion = document.getElementById('regions').value;

    if (newRegion) {
        var profileArray = JSON.parse(localStorage.getItem('profile')) || [];
        var profile = profileArray.length > 0 ? profileArray[0] : {};

        if (profile && Object.keys(profile).length > 0) {
            profile.region = newRegion;
            profileArray[0] = profile;
            localStorage.setItem('profile', JSON.stringify(profileArray));
            document.getElementById('region').textContent = profile.region;
            document.getElementById('notificationRegion').textContent = profile.region;
            regionPopup.style.display = 'none'; 
        } else { 
            console.error('Profile not found:', profile); 
        }
    }
});


// Change Password
var changePassword = document.getElementById('changePassword');

changePassword.addEventListener('click', function() {
    var currentPassword = document.getElementById('currentPassword').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  



    if (confirmPassword && newPassword && currentPassword) {
        var profileArray = JSON.parse(localStorage.getItem('profile')) || [];
        var profile = profileArray.length > 0 ? profileArray[0] : {};
        var passwordRepresentation = "*";


        if (profile && Object.keys(profile).length > 0) {

            if (currentPassword == profile.password) {
                if (newPassword == confirmPassword) {
                    profile.password = confirmPassword;
                profileArray[0] = profile;
                localStorage.setItem('profile', JSON.stringify(profileArray));

                for (x = 1; x < profile.password.length; x++) {
                    passwordRepresentation+="*";
                }
                document.getElementById('password').textContent = passwordRepresentation || 'N/A';
                document.getElementById('successPasswordMessage').innerHTML = "Password Changed Successfully";
                document.getElementById('currentPassword').value = "";
                document.getElementById('newPassword').value = "";
                document.getElementById('confirmPassword').value = "";

                } else {
                    document.getElementById('passwordMessage').innerHTML = "<p> Passwords do not match  </p>"
                }
            } else {
                document.getElementById('passwordMessage').innerHTML = "<p> Current Password Incorrect  </p>"
                console.log(profile.password);
            }

            
           
            regionPopup.style.display = 'none'; 
        } else { 
            console.error('Profile not found:', profile); 
        }
    }
});
