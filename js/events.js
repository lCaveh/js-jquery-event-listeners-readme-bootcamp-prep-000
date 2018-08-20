function getIt() {
  $('p').on('click',
  function(){
    alert("Hey!");
  });
}
function frameIt() {
  $('img').on('load',
  function(){
    $('img').addClass('tasty');
    $('img.tasty').css({"border-style": "solid", "border-width": "1 em"});
  });
}
function pressIt() {
  $('input').on('keydown',
  function(key){
    if (key.which == 71) {
    alert("G key was pressed down!");
    }
  });
}
function submitIt() {
  $('input').on('submit',
  function(key){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
getIt();
frameIt();

submitIt();
});
