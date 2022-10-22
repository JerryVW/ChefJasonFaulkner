const imgZoom = document.querySelector('img');
const classActive = document.querySelector('.carousel-item');
const contactMe = document.querySelectorAll('#services .header-button');
const about = document.querySelector('.exp-button');


// Function for images to zoom in and out when clicked

const addTransitionClass = () => {
  if(classActive === 'active') {
    imgZoom.classList.add('.transition');
  } else {
    imgZoom.classList.remove('.transition');
  }
}

addTransitionClass();

// Functionality for contact buttons to go to the form

Array.from(contactMe).forEach(function(contact){
    console.log(contact);
    contact.addEventListener("click", function(e) {
            location.href = '#contact';
    });

});

about.addEventListener('click', function(e) {
    
    location.href = 'about.html'
});


