// hide bck button on inital screen load
$("#back").hide();

var queryURL;
var zipcode;
let eventType;

// Initializing city dropdown
$(document).ready(function () {
  $("select").formSelect();
});
// Event listener for city dropdown
$("select").on("change", function () {
  let x;
  let selectedCity;
  let cityLandmarks = [
    ["Denver Botanic Gardens", "Denver Art Museum", "Downtown Aquarium", "Red Rocks Park and Amphitheatre"],
    ["Space Needle", "Gas Works Park", "Museum of Pop Culture", "The Seattle Great Wheel"],
    ["Bayside Marketplace", "Jungle Island", "Pérez Art Museum Miami", "Venetian Pool"],
    ["Disneyland", "Hollywood Walk-of-Fame", "Santa Monica Pier", "The Getty"],
    ["Centennial Olympic Park", "Georgia Aquarium", "World of Coca-Cola", "Fox Theatre"],
    ["Times Square", "Statue of Liberty", "Central Park", "Empire State Building"],
    ["Space Center Houston", "The Museum of Fine Arts, Houston", "Kemah Boardwalk", "Buffalo Bayou Park"]
  ];

  function showLandmarks() {
    $("#land-1").text(cityLandmarks[x][0]);
    $("#land-2").text(cityLandmarks[x][1]);
    $("#land-3").text(cityLandmarks[x][2]);
    $("#land-4").text(cityLandmarks[x][3]);
    $("#landmark-city").text(selectedCity + " Landmarks");
    $("#landmarks").attr("style", "display: block");
  };

  if ($(this).val() == "1") {
    selectedCity = "Denver";
    zipcode = "264";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("#cty-img").attr("class", "denver");
    showLandmarks(x = 0);
    $("#land-pic1").attr("src", "colorful-denver.png");
    $("#land-pic2").attr("src", "art.jpg");
    $("#land-pic3").attr("src", "aquarium.jpg");
    $("#land-pic4").attr("src", "poi_gallery_image-image-f901ff25-261a-4163-a727-5f2c315d0d53.jpg");
  }

  if ($(this).val() == "2") {
    selectedCity = "Seattle";
    zipcode = "385";
    console.log("new zipcode", zipcode);
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "seattle")
    showLandmarks(x = 1);
    $("#land-pic1").attr("src", "Seattle-Famous-Landmarks.jpg");
    $("#land-pic2").attr("src", "f497b4381be03c88098dfb50c4e8e786.jpg");
    $("#land-pic3").attr("src", "pike_place_market_entrance.jpg");
    $("#land-pic4").attr("src", "348s.jpg");
  };

  if ($(this).val() == "3") {
    selectedCity = "Miami";
    zipcode = "334";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "miami")
    showLandmarks(x = 2);
    $("#land-pic1").attr("src", "bal-harbour-beach-aerial-340x232.jpg");
    $("#land-pic2").attr("src", "jungle-island-miami-eco-adventure-zip-line.jpg");
    $("#land-pic3").attr("src", "ug_1.jpg");
    $("#land-pic4").attr("src", "IMG_9480 by Fabio.png");
  };

  if ($(this).val() == "4") {
    selectedCity = "Los Angeles";
    zipcode = "324";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "losangeles")
    showLandmarks(x = 3);
    $("#land-pic1").attr("src", "OCR-L-DIS-DISNEYLAND-01-JAG-1.jpg");
    $("#land-pic2").attr("src", "unnamed.jpg");
    $("#land-pic3").attr("src", "Daniel-Malikyar-740x482.jpg");
    $("#land-pic4").attr("src", "image.jpg");
  };

  if ($(this).val() == "5") {
    selectedCity = "Atlanta";
    zipcode = "220";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "atlanta")
    showLandmarks(x = 4);
    $("#land-pic1").attr("src", "olympicpark.jpg");
    $("#land-pic2").attr("src", "c700x420.jpg");
    $("#land-pic3").attr("src", "cocacola.jpg");
    $("#land-pic4").attr("src", "foxtheater-750x480.jpg");
  };

  if ($(this).val() == "6") {
    selectedCity = "New York";
    zipcode = "345";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "newyork")
    showLandmarks(x = 5);
    $("#land-pic1").attr("src", "Times-Square-New-York-City.jpg");
    $("#land-pic2").attr("src", "topic-statue-of-liberty-gettyimages-960610006-feature.jpg");
    $("#land-pic3").attr("src", "central-park.jpg");
    $("#land-pic4").attr("src", "https___www.kitano.com_resourcefiles_snippet-main-img_empire-state-building-in-new-york-top.jpg");
  };

  if ($(this).val() == "7") {
    selectedCity = "Houston";
    zipcode = "300"
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "houston")
    showLandmarks(x = 6);
    $("#land-pic1").attr("src", "Space-Center-Houston-70-6af8c645af6e550_6af8c71b-e678-ba18-17a904130de6ed3f.jpg");
    $("#land-pic2").attr("src", "museum-of-fine-arts-houston-Beck-Interior-Gallery.jpeg");
    $("#land-pic3").attr("src", "kemah-boardwalk-houston.jpg");
    $("#land-pic4").attr("src", "1904036_042217-ktrk-buffalo-bayou-cover-img.jpg");
  };

  hideMainPage()
  //var queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=` + zipcode + `&apikey=${apiKey}`;
  //var queryURL = (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=${zipcode}&apikey=${apiKey}`);

});

// function to hide main page elements
function hideMainPage() {
  $("#welcome").hide();
  $("#cities").hide();
  $("#or").hide();
  $("#adventure").hide();
  $("#random-btn").hide();
  $("#featured").hide();
  $("#back").hide();
};

// function to display checkbox options after a city is chosen
$("#select").change(function () {
  const selectEvent = $("#options"); // pointer to the checkboxes
  selectEvent.toggle();

  queryURL = (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${eventType}&dmaId=${zipcode}&apikey=${apiKey}`);

  // https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&

  // `postalCode=${zipcode}classificationName=music&&apikey=${apiKey}`;

  // ticketmaster API call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    artistName = response._embedded.events[0].name;
    venue = response._embedded.events[0]._embedded.venues[0].name;
    date = response._embedded.events[0].dates.start.localDate;
    time = response._embedded.events[0].dates.start.localTime;
    image = response._embedded.events[0].images[0].url;
    artistName2 = response._embedded.events[1].name;
    venue2 = response._embedded.events[1]._embedded.venues[0].name;
    date2 = response._embedded.events[1].dates.start.localDate;
    time2 = response._embedded.events[1].dates.start.localTime;
    image2 = response._embedded.events[1].images[0].url;
    artistName3 = response._embedded.events[2].name;
    venue3 = response._embedded.events[2]._embedded.venues[0].name;
    date3 = response._embedded.events[2].dates.start.localDate;
    time3 = response._embedded.events[2].dates.start.localTime;
    image3 = response._embedded.events[2].images[0].url;
    artistName4 = response._embedded.events[3].name;
    venue4 = response._embedded.events[3]._embedded.venues[0].name;
    date4 = response._embedded.events[3].dates.start.localDate;
    time4 = response._embedded.events[3].dates.start.localTime;
    image4 = response._embedded.events[03].images[0].url;
    artistName5 = response._embedded.events[4].name;
    venue5 = response._embedded.events[4]._embedded.venues[0].name;
    date5 = response._embedded.events[4].dates.start.localDate;
    time5 = response._embedded.events[4].dates.start.localTime;
    image5 = response._embedded.events[4].images[0].url;


  });


});

// event listeners for checkboxes
$("#music").change(function () {
  eventType = "music";
});

$("#sports").change(function () {
  eventType = "sports";
});

$("#art").change(function () {
  eventType = "art";
});

$("#food").change(function () {
  eventType = "food";
});

// accept input and display search results
$("#option-confirm").on("click", function () {
  $("#options").hide();
  $("#landmarks").hide();
  $("#artist-1").text(artistName);
  $("#venue-1").text(venue);
  $("#date-1").text(date);
  $("#time-1").text(time);
  $("#image-1").attr("src", image);
  $("#artist-2").text(artistName2);
  $("#venue-2").text(venue2);
  $("#date-2").text(date2);
  $("#time-2").text(time2);
  $("#image-2").attr("src", image2);
  $("#artist-3").text(artistName3);
  $("#venue-3").text(venue3);
  $("#date-3").text(date3);
  $("#time-3").text(time3);
  $("#image-3").attr("src", image3);
  $("#artist-4").text(artistName4);
  $("#venue-4").text(venue4);
  $("#date-4").text(date4);
  $("#time-4").text(time4);
  $("#image-4").attr("src", image4);
  $("#artist-5").text(artistName5);
  $("#venue-5").text(venue5);
  $("#date-5").text(date5);
  $("#time-5").text(time5);
  $("#image-5").attr("src", image5);
  $("#results").show();
  $("#back").show();
  console.log("artist" + artistName);
  console.log("event type", eventType);
});

// cancel from options screen
$("#cancel").on("click", function () {
  window.location.href = "index.html"
});

// function to display login form
$("#login-btn").click(function () {
  const login = $("#login-form"); // pointer to login form
  login.toggle();
  hideMainPage();
  //$("#welcome").hide();
  //$("#cities").hide();
  //$("#or").hide();
  //$("#adventure").hide();
  //$("#random-btn").hide();

});

// function to accept login input and hide form
$("#login-form-btn").on("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html" //temporarily just goes back to homepage
});


// event listener for GO button
$("#random-btn").on("click", function (e) {
  e.preventDefault();

  // map API --- Get user location and show events in the area
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      var x = document.getElementById("location");
      x.innerHTML = "Geolocation is not supported by this browser.";
    };
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

  function showPosition(position) {
    //var x = document.getElementById("location");
    //x.innerHTML = "Latitude: " + position.coords.latitude +
    //      "<br>Longitude: " + position.coords.longitude;
    var latlon = position.coords.latitude + "," + position.coords.longitude;


    $.ajax({
      type: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/events.json?&apikey=" + apiKey + "&latlong=" + latlon,
      async: true,
      dataType: "json",
      success: function (json) {
        console.log(json);
        var e = document.getElementById("events");
        e.innerHTML = json.page.totalElements + " events found in your area.";
        showEvents(json);
        initMap(position, json);
      },
      error: function (xhr, status, err) {
      }
    });
  };

  function showEvents(json) {
    for (var i = 0; i < json.page.size; i++) {
      $("#events").append("<p>" + json._embedded.events[i].name + "</p>");
      $("#cities").hide();
      $("#or").hide();
      $("#welcome").hide();
      $("#random-btn").hide();
      $("#featured").hide();
    }
  }

  function initMap(position, json) {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
      zoom: 10
    });
    for (var i = 0; i < json.page.size; i++) {
      addMarker(map, json._embedded.events[i]);
    }
  }

  function addMarker(map, event) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
      map: map
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    console.log(marker);
  }

  getLocation();

});

// back button  - clears results from GO button
$("#back").on("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html" //temporarily just goes back to homepage
});

var apiKey = "g5rWtTbqzNo8URXzTL6NIcTooO2lU25G"