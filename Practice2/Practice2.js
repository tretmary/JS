//Practice 
const URL = "https://random.dog/woof.json?filter=mp4,webm";

//When the image is clicked, another random image from the URL above is displayed.
$("#image").on("click", requestImage);

//Create the DOM element to display the image returned using an AJAX request.
function requestImage() {
  $.get(URL).done(displayImage);
}

// The URL above returns JSON data for a randomly chosen image.
function displayImage(imageData) {
  $("#image").attr("src", imageData.url);
}
requestImage();