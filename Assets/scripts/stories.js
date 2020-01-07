$(document).ready(function () {
    // get the 
    var href = document.location.href;
    var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
    var jsonToParse;
    if(lastPathSegment == "Stories.html"){
        jsonToParse = "../misc/stories.json";
    } else if (lastPathSegment == "Developer.html") {
        jsonToParse = "../misc/developer.json";
    }
    $.getJSON(jsonToParse, function(data) {
        //get number of stories from json
        var stories = data.length;


        // add list items for each story to the storiesNav bar
        data.forEach(element => {
        
        //    adding list item for the nav bar on the right side
           $("#storiesNav").append($("<a class='storyNavLinks' id='" + element.id + "' href='#'>").text(element.title));
        //    adding title and body of the story to the main content
           $("#main").append($("<h2 class='storyTitle " + element.id + "'>").text(element.title));
           $("#main").append($("<p class='storyBody " + element.id + "'>").text(element.story));
        // //   setting all items to be invisible 
        //     $("." + element.id).css("display", "none");
        //     });

        });
            //  set first item to be visible by default
            var idToBeVisible = data[0].id;
            $("." + idToBeVisible).css("display", "block");


    });
    // onclick method for the nav links for stories
    $(document).on('click', '.storyNavLinks', function(){
        // first hide all other elements
        // hide titles
        var storyTitles = $('.storyTitle');
        console.log(storyTitles.length);
        storyTitles.each(function(){
            $(this).css("display", "none");
        });
        // hide bodies
        var storyBodies = $('.storyBody');
        storyBodies.each(function(){
            $(this).css("display", "none");

        });
        // then display the clicked element
        var clickedClass = $(this).attr("id");
        $("." + clickedClass).css("display", "block");
    });

});

