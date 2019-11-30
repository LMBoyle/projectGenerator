// Vars ===========================================================================================

var 
  key = secrets.API_KEY,
  wordUrl = 'https://random-word-api.herokuapp.com/word?key=' + key + '&number=3';

const
  wordOne = $('#wordOne'),
  wordTwo = $('#wordTwo'),
  wordThree = $('#wordThree');

// Functions ======================================================================================

var generate = () => {

  $.ajax({
    url: wordUrl,
    method: 'GET'
  }).then(function(res) {
    // TODO If returns 'wrong api key'
    console.log(res);
    wordOne.empty().append(res[0]);
    wordTwo.empty().append(res[1]);
    wordThree.empty().append(res[2]);
  });

};


// CALL ===========================================================================================

$('document').ready(function () {
  // User clicks button
  $('#genBtn').click(generate);
});