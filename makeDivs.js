function   makeDivs(response){
console.log("-------------DIV------------")
    var eventObjects = [];
    //for loop 
    for (i = 0; i < 5; i++) {
        var index = i +1;
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
      $("#artist-"+index).text(artistName);
      $("#venue-"+index).text(venue);
      $("#date-"+index).text(moment(date).format("MMM Do, YYYY"));
      $("#time-"+index).text(moment(time).format("h:mma"));
      $("#image-"+index).attr("src", image);
      $("#info-"+index).attr("href", info);
   }
     $("#results").show();
     $("#back").show();
    console.log(eventObjects);

}