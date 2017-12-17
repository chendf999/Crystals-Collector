$(document).ready(function() {

var winNum = 0;
var lossNum = 0;
var userScore = 0;
var pokerNum = [];

newGame();
  function newGame() {
  goalNum = Math.floor(Math.random()*110+10);
  $('.goal h2').html(goalNum);
  $('.user-score h2').html(0);

  pokerNum = [
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1)
  ]

  function checkRepeat() {
    for (i=0; i<pokerNum.length; i++) {
      for (j=0;j<pokerNum.length; j++) {
        if (pokerNum[i] === pokerNum[j] && i!==j){
          pokerNum[j] = Math.floor(Math.random()*9+1);
          checkRepeat();
        }
      }
    }

  }

  console.log(pokerNum);
  $('.box').hide();
}

$('.poker img').on('click', function(){
  var index = $(this).attr('data-index');
  userScore = userScore + pokerNum[index];
  $('.user-score h2').html(userScore);

  if (userScore === goalNum) {
    winNum = winNum + 1;
    $('.wins p:eq(1)').html(winNum);
    $('.header h1').html('Ok, You Win');
    $('.box img').attr({'src':'./assets/images/win.png'});
    $('.box').show();
  }
  else if (userScore > goalNum) {
    lossNum = lossNum + 1;
    $('.wins p:eq(3)').html(lossNum);
    $('.header h1').html('Game Over');
    $('.box img').attr({'src':'./assets/images/lose.png'});
    $('.box').show();
  }
});

$('.box h2').on('click', function(){
  userScore = 0;
  $('.header h1').html('You wanna play a game?');
  newGame();
});


});
