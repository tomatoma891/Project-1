function makeDivs2(response) {
    console.log("-------------DIV------------")
    var eventObjects = [];
    //for loop 
    for (i = 5; i < 10; i++) {
        var index = i - 4;
        var embededEvents = response._embedded.events[i];
        console.log("in the loop", embededEvents);

        // Extract data
        artistName = embededEvents.name;
        venue = embededEvents._embedded.venues[0].name;
        date = embededEvents.dates.start.localDate;
        time = embededEvents.dates.start.dateTime;
        image = embededEvents.images[0].url;
        info = embededEvents.url;
        //a
        $("#artist-" + index).text(artistName);
        $("#venue-" + index).text(venue);
        $("#date-" + index).text(moment(date).format("MMM Do, YYYY"));
        $("#time-" + index).text(moment(time).format("h:mma"));
        $("#image-" + index).attr("src", image);
        $("#info-" + index).attr("href", info);
    }
    $("#results").show();
    $("#back").show();
};

function makeDivs3(response) {
    console.log("-------------DIV------------")
    var eventObjects = [];
    //for loop 
    for (i = 10; i < 15; i++) {
        var index = i - 9;
        var embededEvents = response._embedded.events[i];
        console.log("in the loop", embededEvents);

        // Extract data
        artistName = embededEvents.name;
        venue = embededEvents._embedded.venues[0].name;
        date = embededEvents.dates.start.localDate;
        time = embededEvents.dates.start.dateTime;
        image = embededEvents.images[0].url;
        info = embededEvents.url;
        //a
        $("#artist-" + index).text(artistName);
        $("#venue-" + index).text(venue);
        $("#date-" + index).text(moment(date).format("MMM Do, YYYY"));
        $("#time-" + index).text(moment(time).format("h:mma"));
        $("#image-" + index).attr("src", image);
        $("#info-" + index).attr("href", info);
    }
    $("#results").show();
    $("#back").show();
};

function getEventPage2() {

    if (!eventType) return;
  
    // ticketmaster API call
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
  
    makeDivs2(response)
  
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

  function getEventPage3() {

    if (!eventType) return;
  
    // ticketmaster API call
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
  
    makeDivs3(response)
  
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