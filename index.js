// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = []
  var i
  for (i = 0 ; i < musicians.length ; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}
