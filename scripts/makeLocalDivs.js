function makeLocalDivs(json) {
    console.log("-------------MY DIV------------")
    var localEventObjects = [];
    //for loop 
    for (i = 0; i < 1; i++) {
        var index = i + 1;
        var embeddedEvents = json.page._embedded.events[i];
        console.log("in the loop", embededEvents);

        // Extract data
        localArtistName = embeddedEvents.name;
        localVenue = embeddedEvents._embedded.venues[0].name;m
        localDate = embeddedEvents.dates.start.localDate;
        localTime = embeddedEvents.dates.start.dateTime;
        localImage = embeddedEvents.images[0].url;
        localInfo = embeddedEvents.url
        //a
        $("#local-artist-" + index).text(localArtistName);
        $("#local-venue-" + index).text(localVenue);
        $("#local-date-" + index).text(moment(localDate).format("MMM Do, YYYY"));
        $("#local-time-" + index).text(moment(localTime).format("h:mma"));
        $("#local-image-" + index).attr("src", localImage);
        $("#local-info-" + index).attr("href", localInfo);
    }

    console.log(localEventObjects);

}

