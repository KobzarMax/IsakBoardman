
// click on isak

$(document).ready(function() {
    $(".button").click(function() {
      $(this).css("color", "grey");
    });
  });


// get projects

//

// Initialize the projects slider
const initProjectsSlider = () => {
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
    dotsClass: 'slick-dots custom-dots',
    customPaging: function(slider, i) {
      return '<button class="slick-dot" data-slick-index="' + i + '">Project ' + (i + 1) + '</button>';
    }
  });

  $('.projects-content').on('afterChange', function(event, slick, currentSlide) {
    $('.slick-dot').removeClass('active');
    $('.slick-dot[data-slick-index="' + currentSlide + '"]').addClass('active');
  });

  $('.carousel-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: null, // Remove the default previous button
    nextArrow: '<button type="button" class="slick-next">Next</button>', // Define a custom next button
    dots: false,
    infinite: true,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 5000,
    // add any other options you need
  });
};

// Uninitialize the projects slider
const uninitProjectsSlider = () => {
  $('.projects-content').slick('unslick');
  $('.carousel-inner').slick('unslick');
};

//Initialize home carousel
const initHomeSlider = () => {
  $('.home-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Set arrows to true
    dots: false,
    infinite: true,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: null, // Remove the default previous button
    nextArrow: '<button type="button" class="slick-next">Next</button>', // Define a custom next button
    // add any other options you need
  });
}
// Uninitialize the home carousel
const uninitHomeSlider = () => {
  $('.home-carousel').slick('unslick');
}

initHomeSlider();

// new routing

$(document).ready(function(){

  const sections = ['#home', '#projects', '#info', '#contact'];
  const sectionTitles = ['Isak Boardman | Home', 'Isak Boardman | Projects', 'Isak Boardman | Info', 'Isak Boardman | Contact'];

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

    if (sectionID === '#projects') {
      initProjectsSlider();
    } else {
      uninitProjectsSlider();
    }
    if (sectionID === '#home') {
      initHomeSlider();
    } else {
      uninitHomeSlider();
    }
  });
});