var davidApiKey = "cSttLyBiwySAkRm5AYEUUYNrFvs58miI";
var tmDiv = document.getElementById("ticketMaster");
var tmPicDiv1 = document.getElementById("picture1");
var tmNameDiv1 = document.getElementById("name1");
var tmDateDiv1 = document.getElementById("date1");
var tmVenueDiv1 = document.getElementById("venue1");
var tmButton1 = document.getElementById("btn1");

// var today = new Date();
// console.log(today);
// var day = today.getDate();
// var month = today.getMonth();
// var year = today.getFullYear()
// var date = month+1 + "/" + today.getDate() + "/" + year
// var date2 = month+1 + "/" + (day + 1) + "/" + year
// var date3 = month+1 + "/" + (day + 2) + "/" + year
// var date4 = month+1 + "/" + (day + 3) + "/" + year
// var date5 = month+1 + "/" + (day + 4) + "/" + year
// var date6 = month+1 + "/" + (day + 5) + "/" + year
// var searchDate = document.getElementById('searchDate');
// var historyBtns = document.getElementById('histBtns');
// var second = document.getElementById('secondDay');
// var third = document.getElementById('thirdDay');
// var fourth = document.getElementById('fourthDay');
// var fifth = document.getElementById('fifthDay');
// var sixth = document.getElementById('sixthDay');

// //var searchButton = document.getElementsByID('searchBtn');

function getSearchValue(buttonValue) {
  var inputValue = document.getElementById("searchBand").value;
  if (buttonValue) {
    inputValue = buttonValue;
  }
  inputValue = inputValue.replace(/\s+/g, "-").toLowerCase();
  var requestUrl =
    "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" +
    inputValue +
    "&apikey=" +
    davidApiKey;
  console.log(requestUrl);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var artistPic1 = document.createElement("img");
      var musicPic1 = data._embedded.events[0].images[1].url;
      artistPic1.src = musicPic1;
      tmPicDiv1.appendChild(artistPic1);

      var bandName1 = document.createElement("h3");
      bandName1.textContent = data._embedded.events[0].name;
      tmNameDiv1.appendChild(bandName1);

      var eventDate1 = document.createElement("h5");
      eventDate1.textContent = data._embedded.events[0].dates.start.dateTime;
      tmDateDiv1.appendChild(eventDate1);

      var concertVenue1 = document.createElement("h5");
      concertVenue1.textContent =
        data._embedded.events[0]._embedded.venues[0].name;
      tmVenueDiv1.appendChild(concertVenue1);

      var eventURL1 = document.getElementById("anchorTag1");
      showURL1 = data._embedded.events[0].url;
      eventURL1.setAttribute("href", showURL1);

      // var tmButton1 = document.getElementById('btn1');
      // var tmButton1.text

      //             var name = document.createElement('li');
      //             name.textContent = data.name;
      //             city.appendChild(name);

      //             var history = document.createElement('button');
      //             history.addEventListener('click', function(event) {
      //                 getSearchValue(event.target.textContent);
      //             })
      //             history.className = 'searchBtn'
      //             history.textContent = data.name;
      //             historyBtns.appendChild(history);

      //             var newUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=imperial&appid=7469b383f606343a74b5e386f6d67047';
      //             fetch(newUrl)
      //                 .then(function (response) {
      //                     return response.json();
      //                     })
      //                 .then(function (data) {
      //                     console.log(data)

      //                     //todays dashboard

      //                     var currentIcon = document.createElement('img');
      //                     var weatherIcon = data.current.weather[0].icon;
      //                     currentIcon.src = 'http://openweathermap.org/img/wn/' + weatherIcon + '@2x.png';
      //                     city.appendChild(currentIcon);

      //                     var temperature = document.createElement('li');
      //                     temperature.textContent = 'Temp: ' + data.current.temp + '°F';
      //                     city.appendChild(temperature);

      //                     var wind = document.createElement('li');
      //                     wind.textContent = 'Wind: ' + data.current.wind_speed + ' MPH';
      //                     city.appendChild(wind);

      //                     var humid = document.createElement('li');
      //                     humid.textContent = 'Humidity: ' + data.current.humidity + ' %';
      //                     city.appendChild(humid);

      //                     var uvi = document.createElement('li');
      //                     uvi.textContent = 'UV Index: ' + data.current.uvi;
      //                     city.appendChild(uvi);

      //                     //forecast day 2

      //                     var forecastDate2 = document.createElement('li');
      //                     forecastDate2.textContent = date2
      //                     second.appendChild(forecastDate2);

      //                     var currentIcon2 = document.createElement('img');
      //                     var weatherIcon2 = data.daily[0].weather[0].icon;
      //                     currentIcon2.src = 'http://openweathermap.org/img/wn/' + weatherIcon2 + '@2x.png';
      //                     second.appendChild(currentIcon2);

      //                     var temperature2 = document.createElement('li');
      //                     temperature2.textContent = 'Temp: ' + data.daily[0].temp.day + '°F';
      //                     second.appendChild(temperature2);

      //                     var wind2 = document.createElement('li');
      //                     wind2.textContent = 'Wind: ' + data.daily[0].wind_speed + ' MPH';
      //                     second.appendChild(wind2);

      //                     var humid2 = document.createElement('li');
      //                     humid2.textContent = 'Humidity: ' + data.daily[0].humidity + ' %';
      //                     second.appendChild(humid2);

      //                 });
    });
}
