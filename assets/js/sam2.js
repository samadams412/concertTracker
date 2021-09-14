

$(document).ready(function(){

    var API_KEY = "AIzaSyBTE - KEJhgABbozGorPJWeBApQVVDA1gl4";


    $("#btnSearch").click(function(event){
        console.log("hello");
        event.preventDefault();
        var search = $("#searchBand").val();
        //pass in the API_KEY, the band searched in the search bar, and the max results
        videoSearch(API_KEY, search,10);
    })

    function videoSearch(key, search, maxResults){

        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
            console.log(data);
        });
    }
})

