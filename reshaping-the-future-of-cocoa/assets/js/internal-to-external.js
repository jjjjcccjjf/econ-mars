
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// TEST GA is 55, live GA is 54 -- 

var ga_id = 'UA-210874067-55'; //TEST

if (window.location.href.includes('impact.economist.com')) {
ga_id = 'UA-210874067-54'; //Live
}

ga('create', ga_id, 'auto');

setTimeout(function(){
ga('send', 'event', '15_seconds', 'Read', window.location.pathname);
}, 15000);

setTimeout(function(){
ga('send', 'event', '30_seconds', 'Read', window.location.pathname);
}, 30000);

setTimeout(function(){
ga('send', 'event', '45_seconds', 'Read', window.location.pathname);
}, 45000);

setTimeout(function(){
ga('send', 'event', '60_seconds', 'Read', window.location.pathname);
}, 60000);

setTimeout(function(){
ga('send', 'event', '75_seconds', 'Read', window.location.pathname);
}, 75000);

setTimeout(function(){
ga('send', 'event', '90_seconds', 'Read', window.location.pathname);
}, 90000);

console.log("Page GA ID: " + ga_id);



ga('set', 'dimension1', 'Article');
ga('set', 'dimension2', 'Client Branded');
ga('set', 'dimension3', '1942');
ga('set', 'dimension4', 'FOOD & DRINK');

ga('send', 'pageview');



//   hamburger

function toggleMenu () {
    document.getElementById('toggleMenu').classList.toggle('toggleMenu');
  }



//   scroll tracking
(function () {

    window.addEventListener('scroll', function() {

      // var scrollPercent = Math.ceil(100 * window.scrollTop() / (document.height() - window.height()))
      var scrollPercent = 100 * window.scrollTop / (window.scrollHeight- window.clientHeight); 
      switch(scrollPercent) {

        case 25:

          ga('send','event', 'scroll-depth', scrollPercent + '%', 'Reshaping the future of cocoa');

          break;

        case 50:

          ga('send','event', 'scroll-depth', scrollPercent + '%', 'Reshaping the future of cocoa');

          break;

        case 75: 

          ga('send','event', 'scroll-depth', scrollPercent + '%', 'Reshaping the future of cocoa');

          break;

        case 100:

          ga('send','event', 'scroll-depth', scrollPercent + '%', 'Reshaping the future of cocoa');

          break; 

      }

    });

  })();


//   @ads

/**
* GA Events
*/

   $("#toggle-sponsored-text").on("click", function() {
    $(".sponsored-content-text").slideToggle().toggleClass("advert-open");
    console.log($('.sponsored-content-text').hasClass('advert-open'));
    if ($('.sponsored-content-text').hasClass('advert-open')) {
      ga('send', 'event', 'Open-Content', 'Advertisement-Feature', 'open');
    }
    else {
      ga('send', 'event', 'Open-Content', 'Advertisement-Feature', 'close');
    }
  });
  $('#close-sponsored-text').on('click', function() {
    $('.sponsored-content-text').slideUp();
    ga('send', 'event', 'Open-Content', 'Advertisement-Feature', 'close');
  })

  // jQuery(function () {
  //  jQuery.scrollDepth({
  //    eventHandler: function (data) {
  //      if (data.event == 'ScrollDistance' && data.eventLabel == '25%') {
  //        ga('send', 'event', 'scroll-depth', '25%', 'Reshaping the future of cocoa-scroll25');
  //      } else if (data.event == 'ScrollDistance' && data.eventLabel == '50%') {
  //        ga('send', 'event', 'scroll-depth', '50%', 'Reshaping the future of cocoa-scroll50');
  //      } else if (data.event == 'ScrollDistance' && data.eventLabel == '75%') {
  //        ga('send', 'event', 'scroll-depth', '75%', 'Reshaping the future of cocoa-scroll75');
  //      } else if (data.event == 'ScrollDistance' && data.eventLabel == '100%') {
  //        ga('send', 'event', 'scroll-depth', '100%', 'Reshaping the future of cocoa-scroll100');

  //      }
  //    }
  //  });
  // });

  var seconds = 0;
  function incrementSeconds() {
    seconds += 1;
    if (seconds >= 15) {
      clearInterval(timer);
      ga('send', 'event', '15_seconds', 'Read', 'Reshaping the future of cocoa');
    }

  }

  var timer = setInterval(incrementSeconds, 1000);
  

  