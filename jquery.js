$(document).ready(function () {
    $.getJSON('stories.json', function(data) {
        var stories = data.length;
        console.log(stories);
    });
});