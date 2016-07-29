// Problem: user when clicking on image goes to a dead end
// Solution: create an overlay with the large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

// An image to overlay
$overlay.append($image);

// Add overlay
$("body").append($overlay);
    // A caption

// Capture the click event on a link to an image
$("#imageGallery a").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    // Update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    // Show the overlay
    $overlay.show();

    // Get child's alt attribute and set caption
});

// When overlay is clicked
$overlay.click(function () {
    // Hide the overlay
    $overlay.hide();
});
