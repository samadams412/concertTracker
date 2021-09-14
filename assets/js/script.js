var davidApiKey = "cSttLyBiwySAkRm5AYEUUYNrFvs58miI";
var tmDiv = document.getElementById("ticketMaster");
var tmPicDiv1 = document.getElementById("picture1");
var tmNameDiv1 = document.getElementById("name1");
var tmDateDiv1 = document.getElementById("date1");
var tmVenueDiv1 = document.getElementById("venue1");
var tmButton1 = document.getElementById("btn1");
var eventURL1 = document.getElementById('anchorTag1');


window.scrollTo(0,0)


function getSearchValue(buttonValue) { 

    tmDiv.innerHTML = '' 

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
           
            for (var i = 0; i < 5; i++) { 
              var newDiv = document.createElement('div');
              
              var artistPic1 = document.createElement('img');
              var musicPic1 = data._embedded.events[i].images[1].url;
              artistPic1.src = musicPic1
              newDiv.appendChild(artistPic1);

              var bandName1 = document.createElement('h3');
              bandName1.textContent = data._embedded.events[i].name;
              newDiv.appendChild(bandName1);

              var eventDate1 = document.createElement('h5');
              eventDate1.textContent = data._embedded.events[i].dates.start.dateTime;
              newDiv.appendChild(eventDate1);

              var concertVenue1 = document.createElement('h5');
              concertVenue1.textContent = data._embedded.events[i]._embedded.venues[0].name;
              newDiv.appendChild(concertVenue1);

              showURL1 = data._embedded.events[i].url;
              var anchor = document.createElement('a');
              anchor.setAttribute('href', showURL1);
              anchor.setAttribute('target', '_blank');
              newDiv.appendChild(anchor)

              var button1 = document.createElement('button');
              button1.setAttribute('class', 'button success expanded');
              button1.setAttribute('id', 'btn1');
              button1.textContent = 'Get Tickets & More Info'
              anchor.appendChild(button1);
              tmDiv.appendChild(newDiv)
            }  
        });
}        
