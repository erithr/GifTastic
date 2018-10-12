var inputs = ["Final Fantasy XIV", "cat", "dog", "bird"];

// Function for displaying input data
function renderButtons() {

    // Deleting the inputs prior to adding new inputs
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of inputs
    for (var i = 0; i < inputs.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("inputs");
        // Adding a data-attribute
        a.attr("data-input", inputs[i]);
        // Providing the initial button text
        a.text(inputs[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);
    }
}

// This function handles events where one button is clicked
$("#add-button").on("click", function(event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var input = $("#button-input").val().trim();

    // Adding the movie from the textbox to our array
    inputs.push(input);
    $("#button-input").empty();

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

});

// Adding click event listen listener to all buttons
$(document).on("click", "button", function() {
    // Grabbing and storing the data-input property value from the button
    var input = $(this).attr("data-input");
    console.log("button");

    // Constructing a queryURL using the input name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        input + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function(response) {
            console.log(queryURL);

            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var inputDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var inputImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                inputImage.attr("src", results[i].images.fixed_height_still.url);
                inputImage.attr("data-still", results[i].images.fixed_height_still.url);
                inputImage.attr("data-animate", results[i].images.fixed_height.url);
                inputImage.attr("data-state", "still");
                inputImage.attr("class", "gif");


                // Appending the paragraph and image tag to the inputDiv
                inputDiv.append(p);
                inputDiv.append(inputImage);

                // Prependng the inputDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-appear-here").prepend(inputDiv);
            }
        });
});
renderButtons();
//we need to have the document be loaded with our dynamic buttons before this would work. So we need a $(documenet).on
$(document).on("click", ".gif", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
