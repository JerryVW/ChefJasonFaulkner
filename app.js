const imgZoom = document.querySelector('img');
const classActive = document.querySelector('.carousel-item');

const addTransitionClass = () => {
  if(classActive === 'active') {
    imgZoom.classList.add('.transition');
  } else {
    imgZoom.classList.remove('.transition');
  }
}

addTransitionClass();