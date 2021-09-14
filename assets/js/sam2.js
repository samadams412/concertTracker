// Apparently you should not rely on what you see on your hard disk, 
// because something like <iframe src="https://www.youtube.com/embed/VIDEO-ID"></iframe> may not work locally 
// (message: 'video not available') while working fine on the internet.


// What needs to be done:
// loop through the object array, we know it has a fixed size of maxResults
// inject the data.item[i].snippet.thumbnail
// and the data.item[i].snippet.title, data.item[i].snippet.description into the HTML
// we will append using something like this 
// $(".sam").append(`
// <article class="item" data-key="${vid}">
// <img src="${thumb}" alt="" class="thumb">
// <div class="details">
//   <h4>${title}</h4>
//   <p>${description}</p>
// </div>
// </article>
// `);

$(document).ready(function(){

    var API_KEY = "AIzaSyBTE - KEJhgABbozGorPJWeBApQVVDA1gl4";
    
    var URL = "https://www.googleapis.com/youtube/v3/search";
    var options = {
        part: "snippet",
        key: API_KEY,
        maxResults: 5
    }

    
    
    

    $("#btnSearch").click(function(event){
        
        event.preventDefault();
        var search = $("#searchBand").val();
        //pass in the API_KEY, the band searched in the search bar, and the max results
        videoSearch(API_KEY, search, 5);
    })

    
    function videoSearch(key, search, maxResults){

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
            console.log(data);
            //found how to grab the video id of first video in the search results array
            var id = data.items[0].id.videoId;
            console.log(id);
            mainVid(id);
        }); 
    }


    //will post the top search result
    function mainVid(id){
        $("#video").html(
            `<iframe width="100%" height="420" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          );
    }
  
})


// We will use an onclick similar to this
// that will turn the clicked video from our playlist into the main video
// $(".sam").on("click", "article", function () {
//     var id = $(this).attr("data-key");
//     //call mainVid and send the ID of the clicked video to it
//     mainVid(id);
//   });
// });
