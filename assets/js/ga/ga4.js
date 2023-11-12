jQuery(document).ready(function($) {

/**
* GA Events
*/

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

/** Menu items */

$("#menu-item-16 a").on("click", function () {
  ga("send", "event", "Open-Content", "Infographic", "Class of 2020");
});

$("#menu-item-14 a").on("click", function () {
  ga(
    "send",
    "event",
    "Open-Content",
    "Article",
    "The Kellogg-HKUST executive MBA"
  );
});

$("#menu-item-679 a").on("click", function () {
  ga(
    "send",
    "event",
    "Open-Content",
    "Article",
    "A global connection for Asian business leaders"
  );
});

$("#menu-item-678 a").on("click", function () {
  ga("send", "event", "Open-Content", "Article", "The high-flyer’s choice");
});

$("#menu-item-677 a").on("click", function () {
  ga(
    "send",
    "event",
    "Open-Content",
    "Article",
    "A role model for leadership and diversity"
  );
});

$("#menu-item-15 a").on("click", function () {
  ga(
    "send",
    "event",
    "Open-Content",
    "Video",
    "The first week of KH22 (class of 2020)"
  );
});

$(".social-links li a").on("click", function () {
  var link = $(this).attr("href");

  var regex_youtube = new RegExp("(youtube)");

  var regex_linkedin = new RegExp("(linkedin)");

  var regex_facebook = new RegExp("(facebook)");

  if (regex_youtube.test(link)) {
    ga("send", "event", "Sponsor", "Sponsor-Link", "Youtube");
  }

  if (regex_linkedin.test(link)) {
    ga("send", "event", "Sponsor", "Sponsor-Link", "Linkedin");
  }

  if (regex_facebook.test(link)) {
    ga("send", "event", "Sponsor", "Sponsor-Link", "Facebook");
  }
}); 

})