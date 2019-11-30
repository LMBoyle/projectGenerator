// Vars ===========================================================================================

var key = secrets.API_KEY;
var wordUrl = 'https://random-word-api.herokuapp.com/word?key=' + key + '&number=3';
console.log(wordUrl)

// Functions ======================================================================================

var generate = () => {

  $.ajax({
    url: wordUrl,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
  });
};


// CALL ===========================================================================================

$('document').ready(function () {
  // User clicks button
  $('#genBtn').click(generate);
});