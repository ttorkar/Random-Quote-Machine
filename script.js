// function to load and display a new quote
function newQuote() {
  $.getJSON("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(json) {
    $("#quote").html(JSON.stringify(json.message));
  

  
  $("#twitterButton").attr("href", "https://twitter.com/intent/tweet?text=" + json.message) 

            })}
// wait for page load before displaying content
$(document).ready(function() {
  // load an initial quote
  newQuote();

  // retrieve a new quote when the button is clicked
  $("#generateButton").on("click", function() {
    newQuote();
  });
});