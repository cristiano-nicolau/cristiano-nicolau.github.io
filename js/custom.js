(function ($) {

  "use strict";

  // Function to initialize particles
  function initParticles() {
    const isDarkMode = $('body').hasClass('dark-mode');
    const particleColor = isDarkMode ? '#f1f1f1' : '#000000';

    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": particleColor
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 500,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 4,
            "duration": 0.3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }

  // Initialize particles on page load
  initParticles();

  // COLOR MODE
  $('.color-mode').click(function(){
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
    $('#particles-js').html(''); // Clear existing particles
    initParticles(); // Reinitialize particles with new color scheme
  });

  // HEADER
  $(".navbar").headroom();



  // SMOOTHSCROLL
  $(function() {
    $('.nav-link, .custom-btn-link').on('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top 
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  var goToTop = function() {
    $('.js-gotop').on('click', function(event) {
        event.preventDefault(); 
        $('html, body').animate({
            scrollTop: 0
        }, 500, 'swing', function() {
        });

        return false; 
    });

    $(window).scroll(function() {
        var $win = $(window);
        if ($win.scrollTop() > 200) {
            $('.js-top').addClass('active'); 
        } else {
            $('.js-top').removeClass('active'); 
        }
    });
};

goToTop();


})(jQuery);

window.addEventListener('load', function() {
  setTimeout(function() {
      document.getElementById('preloader').classList.add('hidden');
      document.getElementById('loader').classList.add('hidden');
  }, 500); // 3000 milissegundos = 3 segundos
});


document.addEventListener('DOMContentLoaded', () => {
  const loadMoreBtn = document.getElementById('customBtn');
  const projectItems = document.querySelectorAll('.project-item');
  let currentIndex = 4;
  const itemsToShow = 4;

  function updateButton() {
    if (currentIndex >= projectItems.length) {
      loadMoreBtn.textContent = 'Show Less';
    } else {
      loadMoreBtn.textContent = 'More Projects';
    }
  }

  function showItems(start, end) {
    for (let i = start; i < end && i < projectItems.length; i++) {
      projectItems[i].classList.remove('hidden');
    }
  }

  function hideItems(start, end) {
    for (let i = start; i < end && i < projectItems.length; i++) {
      projectItems[i].classList.add('hidden');
    }
  }

  function goToTopProjects() {
    const topProjects = document.getElementById('project');
    topProjects.scrollIntoView({ behavior: 'smooth' });
  }

  showItems(0, currentIndex);
  updateButton();

  loadMoreBtn.addEventListener('click', () => {
    if (currentIndex < projectItems.length) {
      showItems(currentIndex, currentIndex + itemsToShow);
      currentIndex += itemsToShow;
    } else {
      hideItems(itemsToShow, projectItems.length);
      currentIndex = itemsToShow;
      goToTopProjects();
    }
    updateButton();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  function checkScreenSize() {
    const aboutSection = document.getElementById('about');
    if (window.innerWidth <= 768) { // Define the breakpoint for mobile devices
      aboutSection.classList.remove('full-screen');
    }
  }

  // Check screen size on page load
  checkScreenSize();

  // Optional: Check screen size on window resize
  window.addEventListener('resize', checkScreenSize);
});
