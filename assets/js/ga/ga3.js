jQuery(document).ready(function($) {

/**
 * GA Events
 */

$("#toggle-sponsored-text").on("click", function () {
  $(".sponsored-content-text").slideToggle().toggleClass("advert-open");
  console.log($(".sponsored-content-text").hasClass("advert-open"));
  if ($(".sponsored-content-text").hasClass("advert-open")) {
    ga("send", "event", "Open-Content", "Advertisement-Feature", "open");
  } else {
    ga("send", "event", "Open-Content", "Advertisement-Feature", "close");
  }
});
$("#close-sponsored-text").on("click", function () {
  $(".sponsored-content-text").slideUp();
  ga("send", "event", "Open-Content", "Advertisement-Feature", "close");
});
jQuery(function () {
  jQuery.scrollDepth({
    eventHandler: function (data) {
      if (data.event == "ScrollDistance" && data.eventLabel == "25%") {
        ga(
          "send",
          "event",
          "scroll-depth",
          "25%",
          "Better moments make the world smile-scroll25"
        );
      } else if (data.event == "ScrollDistance" && data.eventLabel == "50%") {
        ga(
          "send",
          "event",
          "scroll-depth",
          "50%",
          "Better moments make the world smile-scroll50"
        );
      } else if (data.event == "ScrollDistance" && data.eventLabel == "75%") {
        ga(
          "send",
          "event",
          "scroll-depth",
          "75%",
          "Better moments make the world smile-scroll75"
        );
      } else if (data.event == "ScrollDistance" && data.eventLabel == "100%") {
        ga(
          "send",
          "event",
          "scroll-depth",
          "100%",
          "Better moments make the world smile-scroll100"
        );
      }
    },
  });
});

var seconds = 0;
function incrementSeconds() {
  seconds += 1;
  if (seconds >= 15) {
    clearInterval(timer);
    ga(
      "send",
      "event",
      "15_seconds",
      "Read",
      "Better moments make the world smile"
    );
  }
}

var timer = setInterval(incrementSeconds, 1000);
})
