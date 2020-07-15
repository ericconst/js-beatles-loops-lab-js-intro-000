// add solution here
function theBeatlesPlay(musicians, instruments){
  array = []
  for (i = 0 ; i < musicians.length ; i++) {
    var l = musicians[i] + "plays" + instruments[i];
    array.push(l)
  }
  return array
}
