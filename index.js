document.querySelector

// jQuery() or $() ------ the jQuery or $ replaces the document.querySelector 
// and other document.methods


// if the jQuery cdn library is in the head section, you should write code this way

// $(document).ready(function() {
//     $("h1").css("color", "blue");
// });

// console.log($("h1").css("color")); ----to get the property if having single value
// console.log($("h1").css("font-size")); 

$("h1").css("color", "green");    //---- to set the property if having double values

$("button.click").text("Save"); //select button with class .click

$("h1").addClass("huge");

$("h1").addClass("huge margin-50"); // to add multiple classes

$("h1").removeClass("huge");

$("h1").hasClass("huge");  // to check if the class exists

$("h1").text("Good bye!");

$("h1").html("<em>Good Joe</em>");

// manipulating attributes
$("input").attr("type", "radio");

console.log($('img').attr("src"));

$('a').attr("href", "https://www.yahoo.com");

$("li").attr("class");

$("h1").click(function() {
    $("h1").css("color", "blue");
});

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", handleClick);

//     function handleClick() {
//         document.querySelector("h1").style.color = "purple";
//     }
// }

//  the above for loop is same as the jQuery code below

$("button").click(function() {
    $("h1").css("color", "purple");
});

// how to do a keyboard key press eventListener
$("input").keypress(function(event) {
    console.log(event.key);
});

// how to do a keyboard key press eventListener for the entire body or document
$("body").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

//  or

$(document).keypress(function(event) {
    $("h1").html(event.key);
});

// better way of adding event listener
$("h1").on("mouseover", function() {
    $("h1").html("B-1");
});

// to create new html elements
$("h1").before("<button>New</button>"); //add the new button before the H1 element
 
$("h1").after("<button>Former</button>"); //add the new button after the H1 element

$("h1").prepend("<button>New</button>"); //add the new button inside the H1 element before the content

$("h1").append("<button>Former</button>"); //add the new button inside the H1 element after the content

// to remove element
// $("button").remove(); //removes all the button elements

// add animations
$("button").on("click", function() {
    $("h1").hide();
});

$("button").on("click", function() {
    $("h1").show();
});

$("button").on("click", function() {
    $("h1").toggle(); //toggles from hide to show
});

$("button").on("click", function() {
    $("h1").fadeOut();
});

$("button").on("click", function() {
    $("h1").fadeIn();
});

$("button").on("click", function() {
    $("h1").fadeToggle();
});

$("button").on("click", function() {
    $("h1").slideUp(); // good for drop down menus
});

$("button").on("click", function() {
    $("h1").slideDown();
});

$("button").on("click", function() {
    $("h1").slideToggle();
});

$("button").on("click", function() {
    // for custom animations
    $("h1").animate({opacity: 0.5}); // inbetween the curlybraces, only css rules with numerical values can be added
});

$("button").on("click", function() {
    // addmore than one animations
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

