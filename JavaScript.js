
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

// routing

const baseUrl = window.location.origin;

// create a function that watches the url and calls the urlLocationHandler
const urlRoute = (event) => {
	event = event || window.event; // get window.event if event argument not provided
	if (!event.target || !event.target.matches(".nav .nav-link")) {
		return;
	}
	event.preventDefault();
	// window.history.pushState(state, unused, target link);
	window.history.pushState({}, "", event.target.href);
	urlLocationHandler();
};

document.addEventListener("click", (e) => {
	const { target } = e;
	if (!target.matches(".nav .nav-link")) {
		return;
	}
	e.preventDefault();
	urlRoute();
});

// create an object that maps the url to the template, title, and description
const urlRoutes = {
	"/": {
		template: `${baseUrl}/templates/home.html`,
		title: "Isak Boardman",
	},
	"/projects": {
		template: `${baseUrl}/templates/projects.html`,
		title: "Projects | Isak Boardman",
    init: () => {
			initProjects();
		},
	},
	"/contact": {
		template: `${baseUrl}/templates/contact.html`,
		title: "Contact | Isak Boardman",
	},
	"/info": {
			template: `${baseUrl}/templates/info.html`,
			title: "Info | Isak Boardman",
		},
};

// create a function that handles the url location
const urlLocationHandler = async () => {
	const location = window.location.pathname; // get the url path
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = "/";
	}
	// get the route object from the urlRoutes object
	const route = urlRoutes[location] || urlRoutes["404"];
	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());
	// set the content of the content div to the html
	document.getElementById("content").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document
		.querySelector('meta[name="description"]');
	
	// if the route has an init function, call it
	if (typeof route.init === "function") {
		route.init();
	}
};

// add an event listener to the window that watches for url changes
window.onpopstate = urlLocationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = urlRoute;
// call the urlLocationHandler function to handle the initial url
urlLocationHandler();