
// click on isak

$(document).ready(function() {
    $(".button").click(function() {
      $(this).css("color", "grey");
    });
  });


// get projects

//

const initProjects = () => {
  console.log("Initializing projects page...");
  // Add your jQuery code here
  $(document).ready(function(){
    $('.projects-content').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      zIndex: 1,
      fade: true,
      cssEase: 'linear',
      swipe: false,
      dots: true,
      dotsClass: 'slick-dots custom-dots', // add a custom class to the dots container
      customPaging: function(slider, i) {
        // Change 'Project' to whatever text you want to use
        return '<button class="slick-dot" data-slick-index="' + i + '">Project ' + (i + 1) + '</button>';
        // add a data-slick-index attribute to each dot button, which stores its index in the slider
      }
    });

    // add an event listener to the slider to update the active dot on change
    $('.projects-content').on('afterChange', function(event, slick, currentSlide) {
      // remove the active class from all dots
      $('.slick-dot').removeClass('active');
      // add the active class to the dot corresponding to the current slide
      $('.slick-dot[data-slick-index="' + currentSlide + '"]').addClass('active');
    });

    $('.carousel-inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      // add any other options you need
    }); 
  });
};

initProjects();

// new routing

$(document).ready(function(){
    const projects = document.getElementById('projects');
    const info = document.getElementById('info');
    const contact = document.getElementById('contact');

    const sections = ['#projects', '#info', '#contact'];
    const sectionTitles = ['Isak Boardmna | Projects', 'Isak Boardmna | Info', 'Isak Boardmna | Contact'];

    document.addEventListener("click", (e) => {
        const { target } = e;
        if (!target.matches(".nav-link")) {
            return;
        }
        e.preventDefault();
        const link = target.href;
        const sectionID = link.substring(link.indexOf("#"));
        for (const section of sections) {
            $(section).addClass('hidden');
        }
        $(sectionID).toggleClass('hidden');
        const sectionIndex = sections.indexOf(sectionID);
        document.title = sectionTitles[sectionIndex];
    });
});