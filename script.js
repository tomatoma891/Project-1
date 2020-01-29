// Initializing city dropdown
var venueQueryUrl;
var zipcode = "";
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
    console.log(" show landmarks");
  };

  if ($(this).val() == "1") {
    selectedCity = "Denver";
    zipcode = "264";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("#cty-img").attr("class", "denver");
    showLandmarks(x = 0);
    $("#land-pic1").attr("src", "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_465,q_50,w_698/https://assets.simpleviewinc.com/simpleview/image/upload/crm/denver/12438_553x300_ff398a80-f965-875c-826da7bfec4e981f.jpg");
    $("#land-pic2").attr("src", "https://www.nba.com/nuggets/sites/nuggets/files/dn-pepsicenter.jpg?w=756&h=503");
    $("#land-pic3").attr("src", "https://www.colorado.com/sites/default/files/styles/1000x685/public/BH_Image5.jpg?itok=Fscq9MgL");
    $("#land-pic4").attr("src", "https://www.outtherecolorado.com/wp-content/uploads/2019/01/iStock-925781864-1024x683.jpg");
    console.log(zipcode);
  }

  if ($(this).val() == "2") {
    selectedCity = "Seattle";
    zipcode = "385";
    console.log("new zipcode", zipcode);
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "seattle")
    showLandmarks(x = 1);
    $("#land-pic1").attr("src", "https://www.parentmap.com/images/article/9102/sky_high_space_needle_at_night_iStock_20870368_1352x900.jpg");
    $("#land-pic2").attr("src", "https://interactive.wttw.com/sites/default/files/P9B-_pukwyv_c_scale,w_1600.jpg");
    $("#land-pic3").attr("src", "https://upload.wikimedia.org/wikipedia/commons/8/8c/Monorail_in_EMP.jpg");
    $("#land-pic4").attr("src", "https://image.dynamixse.com/s/crop/1600x1000/https://cdn.dynamixse.com/seattlegreatwheelcom/seattlegreatwheelcom_408653813.jpg");
  };

  if ($(this).val() == "3") {
    selectedCity = "Miami";
    zipcode = "334";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "miami")
    showLandmarks(x = 2);
    $("#land-pic1").attr("src", "https://ik.imagekit.io/grgdihc3l/crm/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/Bayside-Marketplace-15_B95A29DF-53E2-4B15-8864E613596CDA30_8908a70c-556e-4409-a451b2421e555580.jpg");
    $("#land-pic2").attr("src", "https://cdn.vox-cdn.com/thumbor/jK2H1Qj3SSShjELaI7JUOfLqaYA=/0x0:888x589/1200x800/filters:focal(373x224:515x366)/cdn.vox-cdn.com/uploads/chorus_image/image/58625009/jungle_island_waterfall_fb.0.jpg");
    $("#land-pic3").attr("src", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1445264480%2FMIAMI1015-perez-art-museum-miami.jpg%3Fitok%3DTrG8iJ0z");
    $("#land-pic4").attr("src", "https://inwestonmagazine.com/wp-content/uploads/2019/03/Venetian-Pool-1-by-Fabio.jpg");
  };

  if ($(this).val() == "4") {
    selectedCity = "Los Angeles";
    zipcode = "324";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "losangeles")
    showLandmarks(x = 3);
    $("#land-pic1").attr("src", "https://cdn-image.travelandleisure.com/sites/default/files/1546876095/disneyland-sleeping-beauty-castle-DISNEYPRICES0119.jpg");
    $("#land-pic2").attr("src", "https://img.jakpost.net/c/2017/05/13/2017_05_13_26845_1494641998._large.jpg");
    $("#land-pic3").attr("src", "https://pacpark.com/wp-content/uploads/2019/04/rides_hero.jpeg");
    $("#land-pic4").attr("src", "https://cdn-image.travelandleisure.com/sites/default/files/1512657629/skirball-fire-GETTY1217.jpg");
  };

  if ($(this).val() == "5") {
    selectedCity = "Atlanta";
    zipcode = "220";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "atlanta")
    showLandmarks(x = 4);
    $("#land-pic1").attr("src", "https://cdn.vox-cdn.com/thumbor/csVwNocEbUAtBIT1813syMW2_Ko=/0x0:960x540/1200x800/filters:focal(404x194:556x346)/cdn.vox-cdn.com/uploads/chorus_image/image/64740631/EarthCam_Atlanta.0.jpg");
    $("#land-pic2").attr("src", "https://wdanielanderson.files.wordpress.com/2013/06/ga.jpg");
    $("#land-pic3").attr("src", "https://www.jerde.com/assets/images/places/slideshow/new-world-of-coca-cola-2.jpg");
    $("#land-pic4").attr("src", "https://dikfqwwe31irs.cloudfront.net/assets/venues/the-fox-theatre/_1600xAUTO_scale_center-center/Atlanta-Fox.jpg?mtime=20170213135856");
  };

  if ($(this).val() == "6") {
    selectedCity = "New York";
    zipcode = "345";
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "newyork")
    showLandmarks(x = 5);
    $("#land-pic1").attr("src", "https://d21xlh2maitm24.cloudfront.net/nyc/times-square.jpg?mtime=20160513150423");
    $("#land-pic2").attr("src", "https://cdn.vox-cdn.com/thumbor/_5wCc2Fit8apEioStEg5s4MjUyE=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/62336589/120907_12_20_05_IMG_3042.0.jpg");
    $("#land-pic3").attr("src", "https://news.virginia.edu/sites/default/files/styles/uva_basic_article/public/article_image/central_park_header.jpg?itok=CyzjuouR");
    $("#land-pic4").attr("src", "https://cdn.vox-cdn.com/thumbor/chR6_mBmBRJuZllEbsTMy_Ctjss=/0x0:4500x3004/1200x800/filters:focal(1890x1142:2610x1862)/cdn.vox-cdn.com/uploads/chorus_image/image/54175789/shutterstock_341129564.0.jpg");
  };

  if ($(this).val() == "7") {
    selectedCity = "Houston";
    zipcode = "300"
    $("#selectedCityDiv").text("What do you want to check out in " + selectedCity + " tonight?");
    $("div#cty-img").attr("class", "houston")
    showLandmarks(x = 6);
    $("#land-pic1").attr("src", "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/houston/Space-Center-Houston-70-6af8c645af6e550_6af8c71b-e678-ba18-17a904130de6ed3f.jpg");
    $("#land-pic2").attr("src", "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/houston/MFAH-Sarofim-Campus_Audrey-Jones-Beck-Building-Photo-by-Robb-Williamson-Courtesy-of-the-Museum-of-Fine-Arts-Houston-9b5329c70ef25a8_9b532b89-ef3a-6f5e-6d959a63d29fcf6b.jpg");
    $("#land-pic3").attr("src", "https://www.tripsavvy.com/thmb/-jqtFxEn2JiAdCl2S5Ax6noL9kM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/usa--texas--galveston-bay--kemah-boardwalk--night-200393377-001-5bfee264c9e77c0051bed041.jpg");
    $("#land-pic4").attr("src", "https://earthx.org/wp-content/uploads/2019/12/ec8974a961d37d6a853a3b2b25e95bc2-buffalo-bayou-park_1000x650.jpg");
  };

  hideMainPage()
  var queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=` + zipcode + `&apikey=${apiKey}`;
  // https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&

  // `postalCode=${zipcode}classificationName=music&&apikey=${apiKey}`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log("query", queryURL);
    console.log(response);
    venueQueryUrl = response._embedded.events[0]._links.venues[0].href;
    console.log("venue call", venueQueryUrl);
    console.log(queryURL);
    console.log(zipcode);

    //make the api call to return venue info

    // $("#cityname").text.response.
  }).then(function () {
    queryURL = `https://app.ticketmaster.com/${venueQueryUrl}&apikey=${apiKey}`
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log("venue response", response);
    })
  })

  return;

});

// function to hide main page elements
function hideMainPage() {
  $("#welcome").attr("class", "hide");
  $("#cities").attr("class", "hide");
  $("#or").attr("class", "hide");
  $("#adventure").attr("class", "hide");
  $("#random-btn").attr("class", "hide");
  $("#featured").attr("class", "hide");
};

// function to display checkbox options after a city is chosen
$("#select").change(function () {
  const selectEvent = $("#options"); // pointer to the checkboxes
  selectEvent.toggle();
});

// accept input and hide checkbox options
$("#option-confirm").on("click", function () {
  window.location.href = "index.html"
});

// cancel from options screen
$("#cancel").on("click", function () {
  window.location.href = "index.html"
});

// function to display login form
$("#login-btn").click(function () {
  const login = $("#login-form"); // pointer to login form
  login.toggle();
  $("#welcome").attr("class", "hide");
  $("#cities").attr("class", "hide");
  $("#or").attr("class", "hide");
  $("#adventure").attr("class", "hide");
  $("#random-btn").attr("class", "hide");
});

// function to accept login input and hide form
$("#login-form-btn").on("click", function (e) {
  e.preventDefault();
  window.location.href = "index.html"
});


var apiKey = "g5rWtTbqzNo8URXzTL6NIcTooO2lU25G"

// var queryURL = `https://app.ticketmaster.com/discovery/v2/events.postalCode=60431&json?classificationName=music&&apikey=${apiKey}`;


