// Problem: it looks gross in smaller browser widths and small devices
// Solution: to hide the text links and swap them out with with a more appropriate navigation

// Create a <select> and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);

// Cycle over menu links
$("#menu a").each(function () {
    var $anchor = $(this);
    // create an option
    var $option = $("<option></option>");
    // option's value is the href
    $option.val($anchor.attr("href"));
    // option's text is the text of link
    var anchorText = $anchor.text();
    $option.text(anchorText);
    // append option to select
    $select.append($option);
});

// Create button
// Bind click to button
    // go to select's location
// Modify CSS to hide links on small width and show button and select
    // also hides select and button on large width and show's links
// Deal with selected options depending on current page