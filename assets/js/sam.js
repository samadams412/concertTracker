
$(document).ready(function(){

    var API_KEY = "AIzaSyBTE - KEJhgABbozGorPJWeBApQVVDA1gl4";
    
    function displayVideos(data){

        $.each(data.items, function (i, item) {
            //gets the thumbnail for each video in playlist
            var thumb = item.snippet.thumbnails.medium.url;
            //gets the title for each video in playlist
            var title = item.snippet.title;
            //gets the description for each video in playlist
            //we can limit the size of the description to 100 chars using substring
            var description = item.snippet.description.substring(0, 100);
            //gets the video Id
            var vid = item.id.videoId;
            $(".sam").append(`
            <article class="item" data-key="${vid}">
            <img src="${thumb}" alt="thumbnail" class="thumb">
            <div class="details">
              <h4>${title}</h4>
              <p>${description}</p>
            </div>
           </article>
          `);
        });
    }
    
    $("#btnSearch").click(function(event){
        
        event.preventDefault();
        var search = $("#searchBand").val();
        //pass in the API_KEY, the band searched in the search bar, and the max results
        videoSearch(API_KEY, search, 5);
    })
    // This function is passed the Youtube API_KEY, search-input, and a maxResults parameter 
    function videoSearch(key, search, maxResults){
        // Gets the URL using Youtube Search and plugs in our API_KEY, maxResults, and search-input
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
            //Remove console log when complete
            console.log(data);
            //Store the videoId of the first search result in the array
            var id = data.items[0].id.videoId;
            mainVid(id);
            displayVideos(data);
        }); 
    }

    // This function is passed a videoId and will inject the iframe into the HTML with a #video ID
    function mainVid(id){
        $("#video").html(
            `<iframe width="100%" height="420" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          );
    }
    // When a video is clicked within the <article> we will then pass that videoId into our mainVid function
    $(".sam").on("click", "article", function () {
        var id = $(this).attr("data-key");
        //call mainVid and send the ID of the clicked video to it
        mainVid(id);
      });

})



 
