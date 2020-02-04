// elements hidden on inital screen load
$("#back").hide();
$("#local-events").hide();
$("#more-events").hide();
$("#pages").hide();



//var venueQueryUrl;  --  NEEDED?
var queryURL;
var foodQueryURL
var zipcode;
var state;
var city;
var price;
var price2;
var price3;
var price4;
var eventType;
var dinner;
var prices;
var priceDivs;
var selectedCity;
var pageNum;

// Initializing city dropdown
$(document).ready(function () {
  $("select").formSelect();
});
// Event listener for city dropdown
$("select").on("change", function () {
  let x;
  // let selectedCity;
  let cityLandmarks = [
    ["Denver Botanic Gardens", "Denver Art Museum", "Downtown Aquarium", "Red Rocks Park and Amphitheatre"],
    ["Space Needle", "Gas Works Park", "Museum of Pop Culture", "The Seattle Great Wheel"],
    ["Bayside Marketplace", "Jungle Island", "Pérez Art Museum Miami", "Venetian Pool"],
    ["Disneyland", "Hollywood Walk-of-Fame", "Santa Monica Pier", "The Getty"],
    ["Centennial Olympic Park", "Georgia Aquarium", "World of Coca-Cola", "Fox Theatre"],
    ["Times Square", "Statue of Liberty", "Central Park", "Empire State Building"],
    ["Space Center Houston", "The Museum of Fine Arts, Houston", "Kemah Boardwalk", "Buffalo Bayou Park"]
  ];

  let cityLandmarksInfo = [
    ["https://www.botanicgardens.org/", "https://denverartmuseum.org/", "https://www.aquariumrestaurants.com/downtownaquariumdenver/", "https://www.redrocksonline.com/the-park"],
    ["https://www.spaceneedle.com/", "https://www.seattle.gov/parks/find/parks/gas-works-park", "https://www.mopop.org/", "https://seattlegreatwheel.com/"],
    ["https://www.baysidemarketplace.com/", "https://www.jungleisland.com/", "https://www.pamm.org/", "https://www.coralgables.com/departments/CommunityRecreation/venetian-pool"],
    ["https://disneyland.disney.go.com/", "https://www.walkoffame.com/", "https://santamonicapier.org/", "https://www.getty.edu/"],
    ["https://www.gwcca.org/centennial-olympic-park/", "https://www.georgiaaquarium.org/", "https://www.worldofcoca-cola.com/", "https://www.foxtheatre.org/"],
    ["https://www.timessquarenyc.org/", "https://www.nps.gov/stli/index.htm", "https://www.centralparknyc.org/", "https://www.esbnyc.com/"],
    ["https://spacecenter.org/", "https://www.mfah.org/", "https://www.kemahboardwalk.com/", "https://buffalobayou.org/"],
  ];

  function showLandmarks() {
    $("#land-1").text(cityLandmarks[x][0]);
    $("#land-info1").attr("href", cityLandmarksInfo[x][0]);
    $("#land-2").text(cityLandmarks[x][1]);
    $("#land-info2").attr("href", cityLandmarksInfo[x][1]);
    $("#land-3").text(cityLandmarks[x][2]);
    $("#land-info3").attr("href", cityLandmarksInfo[x][2]);
    $("#land-4").text(cityLandmarks[x][3]);
    $("#land-info4").attr("href", cityLandmarksInfo[x][3]);
    $("#landmark-city").text(selectedCity + " Landmarks");
    $("#landmarks").attr("style", "display: block");
  };

  if ($(this).val() == "1") {
    selectedCity = "Denver";
    zipcode = "264";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("#cty-img").attr("class", "denver");
    showLandmarks(x = 0);
    $("#land-pic1").attr("src", "./images/landmarks/colorful-denver.png");
    $("#land-pic2").attr("src", "./images/landmarks/art.jpg");
    $("#land-pic3").attr("src", "./images/landmarks/aquarium.jpg");
    $("#land-pic4").attr("src", "./images/landmarks/poi_gallery_image-image-f901ff25-261a-4163-a727-5f2c315d0d53.jpg");
  }

  if ($(this).val() == "2") {
    selectedCity = "Seattle";
    zipcode = "385";
    console.log("new zipcode", zipcode);
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "seattle")
    showLandmarks(x = 1);
    $("#land-pic1").attr("src", "./images/landmarks/Seattle-Famous-Landmarks.jpg");
    $("#land-pic2").attr("src", "./images/landmarks/f497b4381be03c88098dfb50c4e8e786.jpg");
    $("#land-pic3").attr("src", "./images/landmarks/pike_place_market_entrance.jpg");
    $("#land-pic4").attr("src", "./images/landmarks/348s.jpg");
  };

  if ($(this).val() == "3") {
    selectedCity = "Miami";
    zipcode = "334";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "miami")
    showLandmarks(x = 2);
    $("#land-pic1").attr("src", "./images/landmarks/bal-harbour-beach-aerial-340x232.jpg");
    $("#land-pic2").attr("src", "./images/landmarks/jungle-island-miami-eco-adventure-zip-line.jpg");
    $("#land-pic3").attr("src", "./images/landmarks/ug_1.jpg");
    $("#land-pic4").attr("src", "./images/landmarks/IMG_9480 by Fabio.png");
  };

  if ($(this).val() == "4") {
    selectedCity = "Los Angeles";
    zipcode = "324";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "losangeles")
    showLandmarks(x = 3);
    $("#land-pic1").attr("src", "./images/landmarks/OCR-L-DIS-DISNEYLAND-01-JAG-1.jpg");
    $("#land-pic2").attr("src", "./images/landmarks/unnamed.jpg");
    $("#land-pic3").attr("src", "./images/landmarks/Daniel-Malikyar-740x482.jpg");
    $("#land-pic4").attr("src", "./images/landmarks/image.jpg");
  };

  if ($(this).val() == "5") {
    selectedCity = "Atlanta";
    zipcode = "220";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "atlanta")
    showLandmarks(x = 4);
    $("#land-pic1").attr("src", "./images/landmarks/olympicpark.jpg");
    $("#land-pic2").attr("src", "./images/landmarks/c700x420.jpg");
    $("#land-pic3").attr("src", "./images/landmarks/cocacola.jpg");
    $("#land-pic4").attr("src", "./images/landmarks/foxtheater-750x480.jpg");
  };

  if ($(this).val() == "6") {
    selectedCity = "New York";
    zipcode = "345";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "newyork")
    showLandmarks(x = 5);
    $("#land-pic1").attr("src", "./images/landmarks/Times-Square-New-York-City.jpg");
    $("#land-pic2").attr("src", "./images/landmarks/topic-statue-of-liberty-gettyimages-960610006-feature.jpg");
    $("#land-pic3").attr("src", "./images/landmarks/central-park.jpg");
    $("#land-pic4").attr("src", "./images/landmarks/https___www.kitano.com_resourcefiles_snippet-main-img_empire-state-building-in-new-york-top.jpg");
  };

  if ($(this).val() == "7") {
    selectedCity = "Houston";
    zipcode = "300"
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "houston")
    showLandmarks(x = 6);
    $("#land-pic1").attr("src", "./images/landmarks/Space-Center-Houston-70-6af8c645af6e550_6af8c71b-e678-ba18-17a904130de6ed3f.jpg");
    $("#land-pic2").attr("src", "./images/landmarks/museum-of-fine-arts-houston-Beck-Interior-Gallery.jpeg");
    $("#land-pic3").attr("src", "./images/landmarks/kemah-boardwalk-houston.jpg");
    $("#land-pic4").attr("src", "./images/landmarks/1904036_042217-ktrk-buffalo-bayou-cover-img.jpg");
  };

  hideMainPage()
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
  const selectEvent = $("#options"); // pointer to the radio buttons
  selectEvent.toggle();

  queryURL = (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${eventType}&dmaId=${zipcode}&apikey=${apiKey}`);


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
    info = response._embedded.events[0].url;
    state = response._embedded.events[0]._embedded.venues[0].state.stateCode;
    city = response._embedded.events[0]._embedded.venues[0].city.name;
    artistName2 = response._embedded.events[1].name;
    venue2 = response._embedded.events[1]._embedded.venues[0].name;
    date2 = response._embedded.events[1].dates.start.localDate;
    time2 = response._embedded.events[1].dates.start.localTime;
    image2 = response._embedded.events[1].images[0].url;
    info2 = response._embedded.events[1].url;
    state2 = response._embedded.events[1]._embedded.venues[0].state.stateCode;
    city2 = response._embedded.events[1]._embedded.venues[0].city.name;
    artistName3 = response._embedded.events[2].name;
    venue3 = response._embedded.events[2]._embedded.venues[0].name;
    date3 = response._embedded.events[2].dates.start.localDate;
    time3 = response._embedded.events[2].dates.start.localTime;
    image3 = response._embedded.events[2].images[0].url;
    info3 = response._embedded.events[2].url;
    state3 = response._embedded.events[2]._embedded.venues[0].state.stateCode;
    city3 = response._embedded.events[2]._embedded.venues[0].city.name;
    artistName4 = response._embedded.events[3].name;
    venue4 = response._embedded.events[3]._embedded.venues[0].name;
    date4 = response._embedded.events[3].dates.start.localDate;
    time4 = response._embedded.events[3].dates.start.localTime;
    image4 = response._embedded.events[3].images[0].url;
    info4 = response._embedded.events[3].url;
    state4 = response._embedded.events[3]._embedded.venues[0].state.stateCode;
    city4 = response._embedded.events[3]._embedded.venues[0].city.name;
    console.log("state", state);
    console.log("city", city);
    console.log("time", time);
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
  $("#modal").hide();
});

function playSound() {
  document.getElementById("play").play();
}

// accept input and display search results
$("#option-confirm").on("click", function () {
  $("#options").hide();
  $("#landmarks").hide();
  $("#pages").show();

  //$(document).ready(function () {
  //    $('.modal').modal();
  //  });

  if (eventType) {
    $("#modal1").hide();
    restaurants();
  } else {
    playSound();
    $("#modal1").show();
    $("#cty-img").show();
    $("#landmarks").hide();
  };
  queryURL = (`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${eventType}&dmaId=${zipcode}&apikey=${apiKey}`);

  getEvent();

  return;

});

// close modal and return to 

$("#modal-ok").on("click", function () {
  $("#options").show();
  $("#modal1").hide();
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
  $("#cty-img").hide();
});

// function to accept login input and hide form
function reset(){
  window.location.href = "index.html"
};

let username;
let password;
$("#login-form-btn").on("click", function (e) {
  e.preventDefault();
    username = $("#username").val();
  $("#user").text("Welcome back, " + username);
  setTimeout(reset, 1500);
   
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
      $("#events").show();
      $("#events2").append("<p id='full-list'>" + "<span style='font-weight: 700'>" + json._embedded.events[i].name + "</span><br>" + json._embedded.events[i]._embedded.venues[0].name + "<br>" + moment(json._embedded.events[i].dates.start.localDate).format("MMM Do, YYYY") + "</p>");
      $("#local-music").text(json._embedded.events[i].name);
      $("#local-music-image").attr("src", json._embedded.events[i].images[0].url);
      $("#local-music-venue").text(json._embedded.events[i]._embedded.venues[0].name);
      $("#local-music-date").text(moment(json._embedded.events[i].dates.start.localDate).format("MMM Do, YYYY"));
      $("#local-music-time").text(moment(json._embedded.events[i].dates.start.dateTime).format("h:mma"));
      $("#local-music-buy").attr("href", json._embedded.events[i].url);
      $("#local-sports").text(json._embedded.events[i].name);
      $("#local-sports-image").attr("src", json._embedded.events[i].images[0].url);
      $("#local-sports-venue").text(json._embedded.events[i]._embedded.venues[0].name);
      $("#local-sports-date").text(moment(json._embedded.events[i].dates.start.localDate).format("MMM Do, YYYY"));
      $("#local-sports-time").text(moment(json._embedded.events[i].dates.start.dateTime).format("h:mma"));
      $("#local-sports-buy").attr("href", json._embedded.events[i].url);
      $("#local-art").text(json._embedded.events[i].name);
      $("#local-art-image").attr("src", json._embedded.events[i].images[0].url);
      $("#local-art-venue").text(json._embedded.events[i]._embedded.venues[0].name);
      $("#local-art-date").text(moment(json._embedded.events[i].dates.start.localDate).format("MMM Do, YYYY"));
      $("#local-art-time").text(moment(json._embedded.events[i].dates.start.dateTime).format("h:mma"));
      $("#local-art-buy").attr("href", json._embedded.events[i].url);
      $("#back").show();
      $("#more").show();
      $("#local-events").show();
      $("#events").show();
      $("#cty-img").hide();
      $("#cities").hide();
      $("#or").hide();
      $("#welcome").hide();
      $("#random-btn").hide();
      $("#featured").hide();
    
      // button to see more results
      $("#more").on("click", function (e) {
        e.preventDefault();
        $("#more-events").show();
        console.log("more button");
      });
    };
  };


  function initMap(position, json) {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
      zoom: 10
    });
    for (var i = 0; i < json.page.size; i++) {
      addMarker(map, json._embedded.events[i]);
    };
  };

  function addMarker(map, event) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
      map: map
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    console.log(marker);
  };

  getLocation();

});



// back button  - clears results from GO button
$("#back").on("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html"
});

var apiKey = "g5rWtTbqzNo8URXzTL6NIcTooO2lU25G"


function getEvent() {

  if (!eventType) return;

  // ticketmaster API call

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

  makeDivs(response)

  });

  // started trying to get weather for events
  console.log(date);
  endDate = moment().add(7, 'days').calendar();
  console.log("end date", endDate);
  if (date2 < endDate) {
    console.log("weather available")
  } else {
    console.log("weather unavailable");
  };

  // opentable API call

  var foodQueryURL = (`https://opentable.herokuapp.com/api/restaurants?city=${selectedCity}`);
  console.log("foodQueryURL", foodQueryURL);

  $.ajax({
    url: foodQueryURL,
    method: "GET"
  }).then(function (response) {
    restaurants = response.restaurants;
    food = response.restaurants[0].name;
    price = response.restaurants[0].price;
    foodRSV = response.restaurants[0].reserve_url;
    food2 = response.restaurants[1].name;
    price2 = response.restaurants[1].price;
    foodRSV2 = response.restaurants[1].reserve_url;
    food3 = response.restaurants[2].name;
    price3 = response.restaurants[2].price;
    foodRSV3 = response.restaurants[2].reserve_url;
    food4 = response.restaurants[3].name;
    price4 = response.restaurants[3].price;
    foodRSV4 = response.restaurants[3].reserve_url;
    $("#restaurant-1").text(food);
    $("#restaurant-info1").attr("href", foodRSV);
    $("#restaurant-2").text(food2);
    $("#restaurant-info2").attr("href", foodRSV2);
    $("#restaurant-3").text(food3);
    $("#restaurant-info3").attr("href", foodRSV3);
    $("#restaurant-4").text(food4);
    $("#restaurant-info4").attr("href", foodRSV4);
    console.log(response);
    console.log("price", price);

    // Include price if resturant search is selected
    prices = [price, price2, price3, price4];
    console.log("price using array", prices[0]);
    priceDivs = ["#price-1", "#price-2", "#price-3", "#price-4"];
    function convertToDollarSigns(num) {
      var dollarSigns = "";
      for (var i = 0; i < num; i++) {
        dollarSigns += "$"
      };
      return dollarSigns;
    };

    for (var i = 0; i < prices.length; i++) {

      prices[i] = convertToDollarSigns(prices[i])
      if (i === 0) {
        console.log("adding price 1")
        $(priceDivs[i]).text(prices[i]);
      } else if (i === 1) {
        $(priceDivs[i]).text(prices[i]);
      } else if (i === 2) {
        $(priceDivs[i]).text(prices[i]);
      } else if (i === 3) {
        $(priceDivs[i]).text(prices[i]);
      }
      else if (i === 4) {
        $(priceDivs[i]).text(prices[i]);
      };
    };

    // buttons to cycle through restaurants -- Need to make a loop
    var x = 0;

    $("#right-1").on("click", function (e) {
      x++;
      if (x > 17) {
        x = 17;
      };
      food = response.restaurants[x].name;
      price = response.restaurants[x].price;
      foodRSV = response.restaurants[x].reserve_url;
      $("#restaurant-1").text(food);
      $("#price-1").text(price);
      $("#restaurant-info1").attr("href", foodRSV);
      priceChange();
      console.log("right clicked");
      console.log(x);
    });

    $("#left-1").on("click", function (e) {
      x--;
      if (x < 0) {
        x = 0;
      };

      food = response.restaurants[x].name;
      price = response.restaurants[x].price;
      foodRSV = response.restaurants[x].reserve_url;
      $("#restaurant-1").text(food);
      $("#price-1").text(price);
      $("#restaurant-info1").attr("href", foodRSV);
      priceChange();
      console.log("left clicked");
      console.log(x);
    });

    $("#right-2").on("click", function (e) {
      x++;
      if (x > 17) {
        x = 17;
      };
      food2 = response.restaurants[x].name;
      price2 = response.restaurants[x].price;
      foodRSV2 = response.restaurants[x].reserve_url;
      $("#restaurant-2").text(food2);
      $("#price-2").text(price2);
      $("#restaurant-info2").attr("href", foodRSV2);
      priceChange();
      console.log("right clicked");
      console.log(x);
    });

    $("#left-2").on("click", function (e) {
      x--;
      if (x < 0) {
        x = 0;
      };

      food2 = response.restaurants[x].name;
      price2 = response.restaurants[x].price;
      foodRSV2 = response.restaurants[x].reserve_url;
      $("#restaurant-2").text(food2);
      $("#price-2").text(price2);
      $("#restaurant-info2").attr("href", foodRSV2);
      priceChange();
      console.log("left clicked");
      console.log(x);
    });

    $("#right-3").on("click", function (e) {
      x++;
      if (x > 17) {
        x = 17;
      };
      food3 = response.restaurants[x].name;
      price3 = response.restaurants[x].price;
      foodRSV3 = response.restaurants[x].reserve_url;
      $("#restaurant-3").text(food3);
      $("#price-3").text(price3);
      $("#restaurant-info3").attr("href", foodRSV3);
      priceChange();
      console.log("right clicked");
      console.log(x);
    });

    $("#left-3").on("click", function (e) {
      x--;
      if (x < 0) {
        x = 0;
      };

      food3 = response.restaurants[x].name;
      price3 = response.restaurants[x].price;
      foodRSV3 = response.restaurants[x].reserve_url;
      $("#restaurant-3").text(food3);
      $("#price-3").text(price3);
      $("#restaurant-info3").attr("href", foodRSV3);
      priceChange();
      console.log("left clicked");
      console.log(x);
    });

    $("#right-4").on("click", function (e) {
      x++;
      if (x > 17) {
        x = 17;
      };
      food4 = response.restaurants[x].name;
      price4 = response.restaurants[x].price;
      foodRSV4 = response.restaurants[x].reserve_url;
      $("#restaurant-4").text(food4);
      $("#price-4").text(price4);
      $("#restaurant-info4").attr("href", foodRSV4);
      priceChange();
      console.log("right clicked");
      console.log(x);
    });

    $("#left-4").on("click", function (e) {
      x--;
      if (x < 0) {
        x = 0;
      };
      food4 = response.restaurants[x].name;
      price4 = response.restaurants[x].price;
      foodRSV4 = response.restaurants[x].reserve_url;
      $("#restaurant-4").text(food4);
      $("#price-4").text(price4);
      $("#restaurant-info4").attr("href", foodRSV4);
      priceChange();
      console.log("left clicked");
      console.log(x);
    });

    function priceChange() {
      prices = [price, price2, price3, price4];
      console.log("price using array", prices[0]);
      priceDivs = ["#price-1", "#price-2", "#price-3", "#price-4"];
      function convertToDollarSigns(num) {
        var dollarSigns = "";
        for (var i = 0; i < num; i++) {
          dollarSigns += "$"
        }
        return dollarSigns;
      }

      for (var i = 0; i < prices.length; i++) {

        prices[i] = convertToDollarSigns(prices[i])
        if (i === 0) {
          console.log("adding price 1")
          $(priceDivs[i]).text(prices[i]);
        } else if (i === 1) {
          $(priceDivs[i]).text(prices[i]);
        } else if (i === 2) {
          $(priceDivs[i]).text(prices[i]);
        } else if (i === 3) {
          $(priceDivs[i]).text(prices[i]);
        }
        else if (i === 4) {
          $(priceDivs[i]).text(prices[i]);
        };
      };

    };

  });

};

function restaurants() {
  // Get the checkbox
  var checkBox = document.getElementById("dinner");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == false) {
    $(".dinner-plans").html("<hr><span>No restaurant selected.</span>");
  };
};

// cycle through event pages
$("#page-1").on("click", function () {
  pageNum = 1;
  $("#page-1").attr("style", "color: rgb(26, 112, 170)")
  $("#page-2").attr("style", "color: 84A7D8")
  $("#page-3").attr("style", "color: 84A7D8")
  getEvent();
 // pageCheck();
})

$("#page-2").on("click", function () {
  pageNum = 2;
  $("#page-1").attr("style", "color: 84A7D8")
  $("#page-2").attr("style", "color: rgb(26, 112, 170)")
  $("#page-3").attr("style", "color: 84A7D8")
  getEventPage2();
 // pageCheck();
})

$("#page-3").on("click", function () {
  pageNum = 3;
  $("#page-1").attr("style", "color: 84A7D8")
  $("#page-2").attr("style", "color: 84A7D8")
  $("#page-3").attr("style", "color: rgb(26, 112, 170)")
  getEventPage3();
 //pageCheck();
})


function pageCheck(){
  if (page = 1){
    $("#page-1").attr("style", "color: rgb(26, 112, 170)")
    $("#page-2").attr("style", "color: 84A7D8")
    $("#page-3").attr("style", "color: 84A7D8")
  }
  if (page = 2){
    $("#page-1").attr("style", "color: 84A7D8")
    $("#page-2").attr("style", "color: rgb(26, 112, 170)")
    $("#page-3").attr("style", "color: 84A7D8")
  }
  if (page = 3){
    $("#page-1").attr("style", "color: 84A7D8")
    $("#page-2").attr("style", "color: 84A7D8")
    $("#page-3").attr("style", "color: rgb(26, 112, 170)")
  }
}