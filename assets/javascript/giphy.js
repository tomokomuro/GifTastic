$(document).ready(function() {
    $('button').on('click', function() {
  
      var giphyAddress = 'https://api.giphy.com/v1/gifs/';
      var searchParameter = 'search?&q=parrots&';
      var apiKey = "api_key=n7KxNv8eX4bwbOQPqtciP38IpDsiaJda";
  
      var queryUrl = giphyAddress + searchParameter + apiKey + '&limit=10&offset=0&rating=R&lang=en';
  
      var giphyDiv = $('#giphy-div');
  
      $.ajax({
        url: queryUrl,
        method: 'GET'
      }).then(function(response) {
        var results = response.data;
  
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
          var resultDiv = $('<div>');
          var resultTitle = $('<h2>').text(results[i].title);
          var resultImg = $('<img>').attr('src', results[i].images.original.url);
          resultDiv.append(resultTitle);
          resultDiv.append(resultImg);
          giphyDiv.append(resultDiv);
        }
  
    });
  });
  
  
  
  });