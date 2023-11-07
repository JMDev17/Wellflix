
const togglebtn = document.querySelector('.toggle-menu')
const toggleBtnIcon = document.querySelector('.toggle-menu i')
const dropDownMenu = document.querySelector('.navlinks')

togglebtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    

    toggleBtnIcon.classList = isOpen
    ? 'bx bx-x'
    : "bx bx-menu"
}


    
    var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
     
    });
 

     
   var swiper = new Swiper('.coming-container', {
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 55000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
       
    breakpoints: {
        0: {
            slidesPerView: 2,
        },

        350: {
            slidesPerView: 2,
        },
         
        550: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 4,
        },

        842: {
            slidesPerView: 4,
        },

        924: {
            slidesPerView: 4,
        },

        968: {
            slidesPerView: 5,
        },
       
      
    }
});
   
window.sr = ScrollReveal({ reset: true });

ScrollReveal().reveal('.area-1', {
    delay: 500,
 
             
});

  
ScrollReveal().reveal('.area-2', {
    delay: 500,
   
});
          
ScrollReveal().reveal('.area-3', {
    delay: 500,
});


ScrollReveal().reveal('.area-4', {
    delay: 500,
});

ScrollReveal().reveal('.area-5', {
    delay: 500,
});



