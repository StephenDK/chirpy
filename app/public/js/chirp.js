
// When the user clicks the submit button..
$("#chirp-submit").on("click", function(event) {
    // Prevent default form behavior
    event.preventDefault();
    
    // Test and debugging
    console.log("You clicked the submit button");

    // Make a newChirp object to stor euser values
    var newChirp = {
        author: $("#author").val().trim(),
        body: $("#chirp-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    // Testing and debugging
    console.log(newChirp);

    // Send AJAX POST-request
    $.post("/api/new", newChirp).then(function() {
        // variable to hold a div element
        var row = $("<div>");
        // add "chirp" class to new element
        row.addClass("chirp");

        row.append("<p>" + newChirp.author + " Chirped:  </p>");
        row.append("<p>" + newChirp.body + "</p>");
        row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

        $("#chirp-area").prepend(row);
    })

    // empty the input boxes
    $("#author").val("");
    $("#chirp-box").val("");

});

$.get("/api/all", function(data) {
    
    if (data.length !== 0) {
        
        for (var i = 0; i < data.length; i++) {

        var row = $("<div>");
        // add "chirp" class to new element
        row.addClass("chirp");

        row.append("<p>" + newChirp.author + " Chirped:  </p>");
        row.append("<p>" + newChirp.body + "</p>");
        row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

        $("#chirp-area").prepend(row);
        }
    }
});