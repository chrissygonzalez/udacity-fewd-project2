// strings for building the resume HTML

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2 class="header">%data%</h2>';

var HTMLcontactGeneric = '<li class="icon tooltip" title="%data%">%contact%</li>';
var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<h2 class="welcome">%data%</h2>';

var HTMLskillsStart = '<h3 class="pink">Top Skills</h3><ul id="skills"></ul>';
var HTMLskills = '<li class="skill">%data%</li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = ', <a href="#" target="_blank">%data%</a></h4>';
var HTMLworkTitle = '<h4 class="employer">%data%';
var HTMLworkDates = '%data%</p>';
var HTMLworkLocation = '<p class="date-text">%data% • ';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry flex-box"></div>';
var HTMLprojectText = '<div class="project-text"></div>';
var HTMLprojectTitle = '<h4>%data%</h4>';
var HTMLprojectDates = '<p class="date-text">%data%</p>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectCarouselStart = '<div class="carousel forSlick"></div>';
var HTMLprojectImage = '<div><img src="%data%" class="carousel"></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<h4><a href="#" target="_blank">%data%</a></h4>';
var HTMLschoolDates = ' • %data%</p>';
var HTMLschoolLocation = '<p class="date-text">%data%';
var HTMLschoolDegree = '<p class="date-text italic">%data% in ';
var HTMLschoolMajor = '%data%</p>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<p class="date-text italic">%data%</p>';
var HTMLonlineSchool = '<h4><a href="#" target="_blank">%data%</a></h4>';
var HTMLonlineDates = '<p class="date-text">%data%</p>';

var googleMap = '<div id="map"></div>';

var map;

// for Slick Carousel (http://kenwheeler.github.io/slick/)
$(document).ready(function(){
  $('.forSlick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

  $('.tooltip').tooltipster({
    arrow: false
  });

});

// to collect and log clicks
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.clientX, loc.clientY);
});


// initialize Google map
function initializeMap() {

  var locations;

  var mapOptions = {
    scrollwheel: false,
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var image = 'images/pinkpin.png';
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
      icon: image
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    bounds.extend(new google.maps.LatLng(lat, lon));

    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());

    // map styles
    var styles = [
  {

  },{
    featureType: "water",
    elementType: "geometry",
    stylers: [
      { hue: "#50E3C2" },
      { lightness: 50 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }, {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      { visibility: "simplified" },
      {  color: "#50E3C2"}
    ]
  }, {
    featureType: "administrative.province",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }, {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      { visibility: "off" }
    ]
  }, {
    featureType: "administrative.province",
    elementType: "geometry.stroke",
    stylers: [
      { visibility: "off" }
    ]
  }
];

map.setOptions({styles: styles});
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});

