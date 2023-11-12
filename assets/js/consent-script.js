window._cmp_ = {
    config: {
      baseHref: "https://consent.economist.com",
      propertyHref: "https://www.economist.com",
      gdpr: {},
      ccpa: {},
      accountId: 1747,
      privacyManager: 557304,
      events: {
        onReady:  function (type) {
if (window.consent.state !== 'visible' && window.consent.state !== 'manager') {
 window.consent.record('visible', true);
 }
},
        onCancel: function (type) {
window.consent.record('visible', false);
},
        onAction: function (type, data) {
setTimeout(function (){
 if (data.purposeConsent === 'none' && data.vendorConsent === 'none') {
 if (window.consent.state !== 'visible') {
 window.consent.record('declined', true);
 }
 }
 else {
 window.consent.record('provided', true);
 }
 }, 500);
},
        onSelect: function (type, choice) {
switch (choice.type) {
 case 11: // The user has chosen the "Accept All" option in a consent message
 window.consent.record('provided', true);
 break;
 case 12: // The user has chosen to view a privacy manager (consent preferences) UI.
 window.consent.record('manager', false);
 break;
 case 13: // The user has chosen the "Reject All" message from a consent message
 window.consent.record('declined', true);
 break;
 }
},
      },
    },
  };