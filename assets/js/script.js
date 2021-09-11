var davidApiKey = 'cSttLyBiwySAkRm5AYEUUYNrFvs58miI'
var tmDiv = document.getElementById('ticketMaster');


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

    
    
    var inputValue = document.getElementById('searchBand').value;
    if (buttonValue) {
        inputValue = buttonValue;
    }
    inputValue = inputValue.replace(/\s+/g, '-').toLowerCase();
    var requestUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=' + inputValue +  '&apikey=' + davidApiKey;
    console.log(requestUrl);
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
            })
        .then(function (data) {
            console.log(data);

            
            var artistPic = document.createElement('img');
            var musicPic = data._embedded.events[0].images[0].url;
            artistPic.src = musicPic
            tmDiv.appendChild(artistPic);

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

//                     //forecast day 3

//                     var forecastDate3 = document.createElement('li');
//                     forecastDate3.textContent = date3;
//                     third.appendChild(forecastDate3);

//                     var currentIcon3 = document.createElement('img');
//                     var weatherIcon3 = data.daily[1].weather[0].icon;
//                     currentIcon3.src = 'http://openweathermap.org/img/wn/' + weatherIcon3 + '@2x.png';
//                     third.appendChild(currentIcon3);

//                     var temperature3 = document.createElement('li');
//                     temperature3.textContent = 'Temp: ' + data.daily[1].temp.day + '°F';
//                     third.appendChild(temperature3);
                
//                     var wind3 = document.createElement('li');
//                     wind3.textContent = 'Wind: ' + data.daily[1].wind_speed + ' MPH';
//                     third.appendChild(wind3);

//                     var humid3 = document.createElement('li');
//                     humid3.textContent = 'Humidity: ' + data.daily[1].humidity + ' %';
//                     third.appendChild(humid3);

//                     //forecast day 4

//                     var forecastDate4 = document.createElement('li');
//                     forecastDate4.textContent = date4;
//                     fourth.appendChild(forecastDate4);

//                     var currentIcon4 = document.createElement('img');
//                     var weatherIcon4 = data.daily[2].weather[0].icon;
//                     currentIcon4.src = 'http://openweathermap.org/img/wn/' + weatherIcon4 + '@2x.png';
//                     fourth.appendChild(currentIcon4);

//                     var temperature4 = document.createElement('li');
//                     temperature4.textContent = 'Temp: ' + data.daily[2].temp.day + '°F';
//                     fourth.appendChild(temperature4);
                
//                     var wind4 = document.createElement('li');
//                     wind4.textContent = 'Wind: ' + data.daily[2].wind_speed + ' MPH';
//                     fourth.appendChild(wind4);

//                     var humid4 = document.createElement('li');
//                     humid4.textContent = 'Humidity: ' + data.daily[2].humidity + ' %';
//                     fourth.appendChild(humid4);

//                     //forecast day 5

//                     var forecastDate5 = document.createElement('li');
//                     forecastDate5.textContent = date5;
//                     fifth.appendChild(forecastDate5);

//                     var currentIcon5 = document.createElement('img');
//                     var weatherIcon5 = data.daily[3].weather[0].icon;
//                     currentIcon5.src = 'http://openweathermap.org/img/wn/' + weatherIcon5 + '@2x.png';
//                     fifth.appendChild(currentIcon5);

//                     var temperature5 = document.createElement('li');
//                     temperature5.textContent = 'Temp: ' + data.daily[3].temp.day + '°F';
//                     fifth.appendChild(temperature5);
                
//                     var wind5 = document.createElement('li');
//                     wind5.textContent = 'Wind: ' + data.daily[3].wind_speed + ' MPH';
//                     fifth.appendChild(wind5);

//                     var humid5 = document.createElement('li');
//                     humid5.textContent = 'Humidity: ' + data.daily[3].humidity + ' %';
//                     fifth.appendChild(humid5);

//                     //forecast day 6

//                     var forecastDate6 = document.createElement('li');
//                     forecastDate6.textContent = date6;
//                     sixth.appendChild(forecastDate6);

//                     var currentIcon6 = document.createElement('img');
//                     var weatherIcon6 = data.daily[4].weather[0].icon;
//                     currentIcon6.src = 'http://openweathermap.org/img/wn/' + weatherIcon6 + '@2x.png';
//                     sixth.appendChild(currentIcon6);

//                     var temperature6 = document.createElement('li');
//                     temperature6.textContent = 'Temp: ' + data.daily[4].temp.day + '°F';
//                     sixth.appendChild(temperature6);
                
//                     var wind6 = document.createElement('li');
//                     wind6.textContent = 'Wind: ' + data.daily[4].wind_speed + ' MPH';
//                     sixth.appendChild(wind6);

//                     var humid6 = document.createElement('li');
//                     humid6.textContent = 'Humidity: ' + data.daily[4].humidity + ' %';
//                     sixth.appendChild(humid6);

                    
//                 });
        });
}        