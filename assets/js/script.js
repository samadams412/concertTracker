var davidApiKey = 'cSttLyBiwySAkRm5AYEUUYNrFvs58miI'
var tmDiv = document.getElementById('ticketMaster');
var tmPicDiv1 = document.getElementById('picture1');
var tmNameDiv1 = document.getElementById('name1');
var tmDateDiv1 = document.getElementById('date1');
var tmVenueDiv1 = document.getElementById('venue1');
var tmButton1 = document.getElementById('btn1');

function getSearchValue(buttonValue) { 
    tmPicDiv1.innerHTML = '' 
    tmNameDiv1.innerHTML = '' 
    tmDateDiv1.innerHTML = '' 
    tmVenueDiv1.innerHTML = '' 


    var inputValue = document.getElementById('searchBand').value;
    if (buttonValue) {
        inputValue = buttonValue;
    }

    inputValue = inputValue.replace(/\s+/g, '-').toLowerCase();
    var requestUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + inputValue +  '&apikey=' + davidApiKey;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
            })
        .then(function (data) {
            console.log(data);
           
            var artistPic1 = document.createElement('img');
            var musicPic1 = data._embedded.events[0].images[1].url;
            artistPic1.src = musicPic1
            tmPicDiv1.appendChild(artistPic1);

            var bandName1 = document.createElement('h3');
            bandName1.textContent = data._embedded.events[0].name;
            tmNameDiv1.appendChild(bandName1);

            var eventDate1 = document.createElement('h5');
            eventDate1.textContent = data._embedded.events[0].dates.start.dateTime;
            tmDateDiv1.appendChild(eventDate1);

            var concertVenue1 = document.createElement('h5');
            concertVenue1.textContent = data._embedded.events[0]._embedded.venues[0].name;
            tmVenueDiv1.appendChild(concertVenue1);

            var eventURL1 = document.getElementById('anchorTag1');
            showURL1 = data._embedded.events[0].url;
            eventURL1.setAttribute('href', showURL1);
        });
}        