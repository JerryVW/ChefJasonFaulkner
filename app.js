window.onload = () => {
    const imgZoom = document.querySelector('img');
    const classActive = document.querySelector('.carousel-item');
    const contactMe = document.querySelectorAll('.header-button');
    const about = document.querySelector('.exp-button');
  
    
    // Functionality for contact buttons to go to the form
    
    Array.from(contactMe).forEach(function(contact){
        contact.addEventListener("click", function(e) {
                location.href = '#contact';
        });
    
    });
    
    if(about) {
        about.addEventListener('click', function(e) {
            location.href = 'about.html'
        });
    }

}




