
(function () {

    window.addEventListener('scroll', function() {

      // var scrollPercent = Math.ceil(100 * window.scrollTop() / (document.height() - window.height()))
      var scrollPercent = 100 * window.scrollTop / (window.scrollHeight- window.clientHeight); 
      switch(scrollPercent) {

        case 25:

          ga('send','event', 'scroll-depth', scrollPercent + '%', 'Better moments make the world smile');

          break;

        case 50:

          ga('send','event', 'scroll-depth', scrollPercent + '%', 'Better moments make the world smile');

          break;

        case 75: 

          ga('send','event', 'scroll-depth', scrollPercent + '%', 'Better moments make the world smile');

          break;

        case 100:

          ga('send','event', 'scroll-depth', scrollPercent + '%', 'Better moments make the world smile');

          break; 

      }

    });

  })();

  

  
