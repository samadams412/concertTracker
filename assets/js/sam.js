

$(document).ready(function () {
  //Youtube API Key
  var key = "AIzaSyBTE - KEJhgABbozGorPJWeBApQVVDA1gl4";

  //Get the playlist ID that comes after list= in the URL
  //Need to use the google search API?, when we search we will search for a playlist on youtube related to the keywords and generate a playlist based off of live music preferably
  var playlistId = "PL217-XwasFTbMISZ0zZ8RfwBVgpFyS6RK";
  //This is the HTTP request
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";


  // When we enter keywords into search , use youtube API to find top search results
  // and filter to playlists only, find out if we need to parse in order to grab the PlaylistId
  // then we can plug this playlistId into the var playListId

  //When we send all the information from the snippet https://developers.google.com/youtube/v3/docs/playlistItems/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22maxResults%22%3A20%2C%22playlistId%22%3A%22PLJa_WanK-2h33O6PebJGzxlHfs5kuotlx%22%7D
  //Youtube API expects to recieve an object these vars will be assigned based off of the search submission
  var options = {
    part: "snippet",
    key: key,
    maxResults: 10,
    playlistId: playlistId
  };

  //call our function
  loadVids();

  function loadVids() {
    //this is where we need our URL, options from our variable
    //after we return this data we return a function that uses our data
    $.getJSON(URL, options, function (data) {
      //console log to see how to access our data items
      console.log(data);
      //find id of the first video in the playlist
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
    });
  }
  //dynamically change the video to the first video in the playlist
  function mainVid(id) {
    //change HTML withtin video ID
    $("#video").html(
      `<iframe width="480" height="270" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    console.log(id);
  }

  //This function will create the HTML
  function resultsLoop(data) {
    //each data in the items array(songs in playlist)
    $.each(data.items, function (i, item) {
      //gets the thumbnail for each video in playlist
      var thumb = item.snippet.thumbnails.default.url;
      //gets the title for each video in playlist
      var title = item.snippet.title;
      //gets the description for each video in playlist
      //we can limit the size of the description to 100 chars using substring
      var description = item.snippet.description.substring(0, 100);
      //gets the video Id
      var vid = item.snippet.resourceId.videoId;
      $("main").append(`
      <article class="item" data-key="${vid}">
      <img src="${thumb}" alt="" class="thumb">
      <div class="details">
        <h4>${title}</h4>
        <p>${description}</p>
      </div>
     </article>
    `);
    });
  }

  //When we click on the main what we want is to search to find the article element
  $("main").on("click", "article", function () {
    var id = $(this).attr("data-key");
    //call mainVid and send the ID of the clicked video to it
    mainVid(id);
  });
});
