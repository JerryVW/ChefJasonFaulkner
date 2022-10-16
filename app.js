const imgZoom = document.querySelector('img');
const classActive = document.querySelector('.carousel-item');
const contact = document.querySelector('#services button');
const about = document.querySelector('#about-button');


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

contact.addEventListener("click", function(e) {
    if(e.target.className == 'header-button') {
        alert("clicked");
        // e.target.id = '#contact';
    }
});

// else if (e.target == about) {
//     alert("clicked also");
//     // e.target.href = '';
