window.onload = () => {
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
        contact.addEventListener("click", function(e) {
                location.href = '#contact';
        });
    
    });
    
    if(about) {
        about.addEventListener('click', function(e) {
            location.href = 'about.html'
        });
    }
    
    // Pages transition

    const links = document.querySelectorAll('a');
    if (links) {
        links.forEach((link) => {
            link.onclick = (e) => {
                let body = document.querySelector('body');
                e.preventDefault();
                //  in async handler (ajax/timer) do these actions
                setInterval(function() {
                    if (body.classList.contains('fade-out')) {
                        console.log('navigating...');
                        if (!e.target.parentElement.href) {
                            window.location = e.target.href;
                        } else {
                            window.location = e.target.parentElement.href;;
                        }
                    } else {
                        console.log('whoops!', e.target);
                    }
                }, 500);
                body.classList.add('fade-out');
            }
        });
    }
}




