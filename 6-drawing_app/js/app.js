// Problem: no user interaction causes no change to application
// Solution: when user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// When clicking on control list items
$(".controls").on("click", "li", function () {
    // deselect sibling elements
    $(this).siblings().removeClass("selected");
    // select clicked element
    $(this).addClass("selected");
    // cache current color
    color = $(this).css("background-color");
});

// When "New color" is pressed
$("#revealColorSelect").click(function () {
    // show color select or hide the color select
    $("#colorSelect").toggle();
});

// Update the new color span
function changeColor() {
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();

    $("#newColor").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");
}

// When color sliders change
$("input[type=range]").change(changeColor);

// When "Add color" is pressed
$("#addNewColor").click(function () {
    // append the color to the controls ul
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    // select the new color
    $newColor.click();

});

// On mouse events on the canvas
$canvas.mousedown(function (e) {
    lastEvent = e;
    mouseDown = true;
}).mousemove(function (e) {
    // draw lines
    if (mouseDown) {
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function () {
    mouseDown = false;
});