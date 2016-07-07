$(document).ready(function() {
  'use strict';

  // // Create the XHR object.
  // function createCORSRequest(method, url) {
  //   var xhr = new XMLHttpRequest();
  //   if ("withCredentials" in xhr) {
  //     // XHR for Chrome/Firefox/Opera/Safari.
  //     xhr.open(method, url, true);
  //   } else if (typeof XDomainRequest != "undefined") {
  //     // XDomainRequest for IE.
  //     xhr = new XDomainRequest();
  //     xhr.open(method, url);
  //   } else {
  //     // CORS not supported.
  //     xhr = null;
  //   }
  //   return xhr;
  // }

  // // Helper method to parse the title tag from the response.
  // function getTitle(text) {
  //   return text.match('<title>(.*)?</title>')[1];
  // }

  // // Make the actual CORS request.
  // function makeCorsRequest() {
  //   // All HTML5 Rocks properties support CORS.
  //   var url = 'https://cache.techhub.com/events';

  //   var xhr = createCORSRequest('GET', url);
  //   if (!xhr) {
  //     alert('CORS not supported');
  //     return;
  //   }

  //   // Response handlers.
  //   xhr.onload = function() {
  //     var text = xhr.responseText;
  //     var title = getTitle(text);
  //     alert('Response from CORS request to ' + url + ': ' + title);
  //   };

  //   xhr.onerror = function() {
  //     alert('Woops, there was an error making the request.');
  //   };
  //   xhr.setRequestHeader('X-Custom-Header', 'value');
  //   xhr.send();
  // }

  // makeCorsRequest();



  // var client = new XMLHttpRequest();
  // client.open("GET", "https://cache.techhub.com/events", true);
  // client.onreadystatechange = function(response) { 
  //   printEvents(response);
  // };
  // client.send();
  
  // function printEvents(events) {
  //   $('tbody').append('yeaaaah');
  // }




  getEvents();

  function getEvents () {

    var request = $.get('https://cache.techhub.com/events');

    function onRequestSuccess (response) {
      printEvents(response);
      console.log('request ok');
      return response;
    }

    function onRequestFailure (response) {
      console.log('request error: ' + response.statusText);
      console.log(response);
    }

    request.done(onRequestSuccess);
    request.fail(onRequestFailure);

    function printEvents(events) {

    }
  }




  // $.ajax({

  //   // The 'type' property sets the HTTP method.
  //   // A value of 'PUT' or 'DELETE' will trigger a preflight request.
  //   type: 'GET',

  //   // The URL to make the request to.
  //   url: 'https://cache.techhub.com/events',

  //   // The 'contentType' property sets the 'Content-Type' header.
  //   // The JQuery default for this property is
  //   // 'application/x-www-form-urlencoded; charset=UTF-8', which does not trigger
  //   // a preflight. If you set this value to anything other than
  //   // application/x-www-form-urlencoded, multipart/form-data, or text/plain,
  //   // you will trigger a preflight request.
  //   contentType: 'text/plain',

  //   xhrFields: {
  //     // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
  //     // This can be used to set the 'withCredentials' property.
  //     // Set the value to 'true' if you'd like to pass cookies to the server.
  //     // If this is enabled, your server must respond with the header
  //     // 'Access-Control-Allow-Credentials: true'.
  //     withCredentials: false
  //   },

  //   headers: {
  //     // Set any custom headers here.
  //     // If you set any non-simple headers, your server must include these
  //     // headers in the 'Access-Control-Allow-Headers' response header.
  //   },

  //   success: function() {
  //     // Here's where you handle a successful response.
  //     alert('yeah');
  //   },

  //   error: function() {
  //     // Here's where you handle an error response.
  //     // Note that if the error was due to a CORS issue,
  //     // this function will still fire, but there won't be any additional
  //     // information about the error.
  //     alert('error');
  //   }
  // });

});