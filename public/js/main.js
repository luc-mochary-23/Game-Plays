var gamePlays = document.getElementById('game-plays');
var form = document.getElementById('add-game-play');
var input = document.getElementById('game-title');
var inputDate = document.getElementById('us')
var lino = document.getElementById('lino')
form.addEventListener('submit', function(e){
  e.preventDefault();
  
  var gameName = input.value;
  var date = inputDate.value;
  var linkURL = lino.value;
  
  $(gamePlays).append('<div class="game-play">' +
       '<div class="game-play-title">' +
         '<h2>'+ gameName +'</h2>' +
         '<div>' + fixDate( date ) + '</div>'+
      ' </div><\!-- top -->'+
       '<div>'+
       '</div> <\!-- middle -->'+
      ' <div>'+
         '<a href="' + linkURL + '" target="_blank"> view video </a>'+
      ' </div> <\!-- end -->')  
});
function fixDate( date ){
//     "yyyy-mm-dd"
  
  var dateParts = date.split('-')
  //["yyyy", "mm", "dd"]
  
  return dateParts[ 1 ] + "-"+ dateParts[ 2 ] + '-' + dateParts[ 0 ];
}

