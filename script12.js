$(document).ready(function(){
  var options = [];
  var winningNumber;
  
  function generateUniqueRandomNumbers() {
    while (options.length < 3) {
      var randomNumber = Math.floor(Math.random() * 100) + 1;
      if (!options.includes(randomNumber)) {
        options.push(randomNumber);
      }
    }
    winningNumber = options[Math.floor(Math.random() * 3)];
  }

  function displayOptions() {
    for (var i = 0; i < options.length; i++) {
      $('#option' + (i + 1)).text(options[i]);
    }
  }

  generateUniqueRandomNumbers();
  displayOptions();

  $('#submitBtn').click(function() {
    var selectedGuess = $('input[name="guess"]:checked').parent().find('span').text();

    if (parseInt(selectedGuess) === winningNumber) {
      $('#result').text('Congratulations! You win!').css('color', 'green').show();
    } else {
      $('#result').text('Commiserations! Better luck next time! The correct answer was ' + winningNumber).css('color', 'red').show();
    }
  });
});
