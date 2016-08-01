// Problem: no user interaction causes no change to application
// Solution: when user interacts cause changes appropriately

var color = $(".selected").css("background-color");

// When clicking on control list items
$(".controls li").click(function () {
    // deselect sibling elements
    $(this).siblings().removeClass("selected");
    // select clicked element
    $(this).addClass("selected");
    // cache current color
    color = $(this).css("background-color");
});

// When new color is pressed
$("#revealColorSelect").click(function () {
    // show color select or hide the color select
    $("#colorSelect").toggle();
});

// When color sliders change
    // update the new color span

// When add color is pressed
    // append the color to the controls ul
    // select the new color

// On mouse events on the canvas
    // draw lines