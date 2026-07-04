//Variables

//Finds the variable in css that is called .navbar
const navbar = document.querySelector('.navbar');

const toggleBoxes = document.querySelectorAll('.wood-box, .card');




//See if a user scrolled
window.addEventListener('scroll', function(){

    //Check how many pixels have been scrolled from the top of the page
    if(window.scrollY > 50){

        navbar.classList.add('scrolled');

    } else if(window.scrollY < 20){

        navbar.classList.remove('scrolled');

    }

});


//When a user clicks a box
toggleBoxes.forEach(function(box){

    box.addEventListener('click', function(){

        box.classList.toggle('open');

    })

})