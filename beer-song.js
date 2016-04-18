function BeerSong() {}

BeerSong.prototype.sing = function(beerCount, range) {
  if (beerCount === 3) {
    return '3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
  }
  var song = []
  for (var beerCount; beerCount > range - 1; beerCount -= 1) {
    song.push(this.verse(beerCount))
  }
  return song.join("\n")
}

BeerSong.prototype.verse = function(beerCount) {
  oneLess = beerCount - 1
  if (beerCount === 0) {
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
  } else if (beerCount === 1) {
    return beerCount + " bottle of beer on the wall, " + beerCount +
    " bottle of beer.\nTake it down and pass it around, " +
    "no more bottles of beer on the wall.\n"
  } else {
    return beerCount + " bottles of beer on the wall, " + beerCount +
    " bottles of beer.\nTake one down and pass it around, " +
    oneLess + " bottles of beer on the wall.\n"
  }
}

module.exports = BeerSong
