document.getElementById('menu-btn').addEventListener('click', function(event) { 
    event.stopPropagation(); // Prevent this event from bubbling up to the document 
    var overlay = document.getElementById('overlay');
     if (overlay.style.width === '50%') { 
        overlay.style.width = '0';
     } else { 
        overlay.style.width = '60%'; } 
    }); 

document.getElementById('overlay').addEventListener('click', function(event) { 
    event.stopPropagation(); // Prevent this event from closing the overlay 
    }); 
    
document.addEventListener('click', function(event) {
    var overlay = document.getElementById('overlay'); 
    var menuBtn = document.getElementById('menu-btn'); // Check if the click is outside the overlay and menu button 
        if (overlay.style.width === '60%' && !overlay.contains(event.target) && event.target !== menuBtn) { 
            overlay.style.width = '0'; } 
});