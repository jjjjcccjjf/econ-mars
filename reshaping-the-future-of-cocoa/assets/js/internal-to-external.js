
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
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

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