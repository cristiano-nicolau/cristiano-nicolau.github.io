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

  initParticles();

  // COLOR MODE
  $('.color-mode').click(function(){
    $('.color-mode-icon').toggleClass('active');
    $('body').toggleClass('dark-mode');
    $('#particles-js').html('');
    initParticles(); 
  });

  // HEADER
  $(".navbar").headroom();

  // SMOOTH SCROLL FOR MOUSE WRAP
  $('.mouse-wrap').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000);
    event.preventDefault();
  });
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
        }, 1000, 'swing', function() {
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
  }, 500); 
});



document.addEventListener('DOMContentLoaded', function() {
  function checkScreenSize() {
    const aboutSection = document.getElementById('about');
    if (window.innerWidth <= 768) { 
      aboutSection.classList.remove('full-screen');
      const container = aboutSection.querySelector('.container');
      container.style.paddingTop = '1rem';
    }
  }

  checkScreenSize();

  window.addEventListener('resize', checkScreenSize);
});

const timelineItems = document.querySelectorAll(".timeline-inverted, .timeline-unverted");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible"); 
      }
    });
  },
  {
    threshold: 0.2, 
  }
);

timelineItems.forEach((item) => observer.observe(item));


const aboutParagraphs = document.querySelectorAll(".about-text p");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible"); 
      }
    });
  },
  {
    threshold: 0.2, 
  }
);

aboutParagraphs.forEach((p) => aboutObserver.observe(p));


const animatedElements = document.querySelectorAll(
  ".about-text, .header_social, .mouse-wrap"
);

const first_page = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-visible");
        first_page.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.1, 
  }
);

animatedElements.forEach((el) => first_page.observe(el));


const serviceItems = document.querySelectorAll(".service-item");

const service_observer = new IntersectionObserver(
  (entries, service_observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const delay = element.getAttribute("data-aos-delay"); 

        setTimeout(() => {
          element.classList.add("animate-visible");
        }, delay);

        service_observer.unobserve(element);
      }
    });
  },
  {
    threshold: 0.2, 
  }
);

// Observa cada elemento
serviceItems.forEach((item) => service_observer.observe(item));
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll(".tab");
  const projectCards = document.querySelectorAll(".project-card");
  const loadMoreBtn = document.getElementById('customBtn');
  const itemsToShow = 6;
  let currentIndex = itemsToShow;
  let currentFilter = "all"; // Variável para armazenar o filtro ativo

  // Tab Filtering
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");

      // Remove "active" class from all tabs and set it for the clicked tab
      tabs.forEach(tab => tab.classList.remove("active-tab"));
      tab.classList.add("active-tab");

      currentFilter = filter; // Atualiza o filtro ativo

      // Filter projects
      projectCards.forEach(card => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block"; // Show filtered cards
        } else {
          card.style.display = "none"; // Hide non-matching cards
        }
      });

      // Update button and visibility for the selected filter
      if (filter === "all") {
        loadMoreBtn.style.display = "block"; // Show button for "all" filter
        projectCards.forEach((card, index) => {
          card.classList.toggle('hidden', index >= itemsToShow); // Hide cards beyond 6 initially
        });
        currentIndex = itemsToShow;
        updateButton();
      } else {
        loadMoreBtn.style.display = "none"; // Hide button for other filters
        projectCards.forEach((card, index) => {
          card.classList.remove('hidden'); // Make sure all cards are visible for non-"all" filters
        });
        currentIndex = projectCards.length; // Show all cards for non-"all" filters
      }
    });
  });

  // Initial Click to Set "All" as Default Tab
  document.querySelector(".tab[data-filter='all']").click();

  // Update button text based on the current index
  function updateButton() {
    if (currentFilter === "all") {
      if (currentIndex >= projectCards.length) {
        loadMoreBtn.innerText = "Show Less"; // Change text if no more projects
      } else {
        loadMoreBtn.innerText = "Show More"; // Reset text when there are more projects
      }
    }
  }

  // Load More Projects or Show Less Projects
  loadMoreBtn.addEventListener('click', () => {
    if (currentFilter === "all") {
      // If we are at the "all" filter
      if (currentIndex >= projectCards.length) {
        // Show "Show More" if we are at the end
        projectCards.forEach((card, index) => {
          if (index >= itemsToShow) {
            card.classList.add('hidden'); // Hide all projects beyond 6
          }
        });
        currentIndex = itemsToShow; // Reset current index
        loadMoreBtn.innerText = "Show More";
        // Smooth scroll to the top of the projects section
        document.querySelector('#project-section').scrollIntoView({ behavior: 'smooth' });
      } else {
        // Show more projects
        const hiddenItems = [...projectCards].filter(card => card.classList.contains('hidden'));
        hiddenItems.slice(0, itemsToShow).forEach(card => card.classList.remove('hidden'));
        currentIndex += itemsToShow; // Increase the current index
        loadMoreBtn.innerText = "Show Less";
      }
      updateButton();
    }
    // For other filters, we don't change the visibility anymore since all items are already shown
  });

  // Animation with IntersectionObserver
  const observerOptions = {
    threshold: 0.2,
  };

  const tabsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
      }
    });
  }, observerOptions);

  const cardsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Add Observers for animation
  tabs.forEach(tab => {
    tab.classList.add("hidden-slide");
    tabsObserver.observe(tab);
  });

  projectCards.forEach((card, index) => {
    if (index >= itemsToShow) card.classList.add('hidden'); // Hide cards after the first 6 initially
    card.classList.add("hidden-fade");
    cardsObserver.observe(card);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab").click();
});
