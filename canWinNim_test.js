/*You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

For example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.*/

mocha.setup('bdd');
var expect = chai.expect;
var should = chai.should();

describe('canWinNim: ', function() {
  it('is a function', function() {
    expect(canWinNim).to.be.a.Function
  })

  it('returns a value', function() {
    var result = canWinNim()
    expect(result).to.exist
  })

  it('Handles values that are less than 0', function() {
    var result = canWinNim(-1)
    expect(result).to.be.false
  })

  it('Will return false for an undefined input', function() {
    var result = canWinNim()
    expect(result).to.be.false
  })

  it('Will return false for input of 4', () => {
    var result = canWinNim(4)
    expect(result).to.be.false
  })

  it('Will return true for an input of 3', () => {
    var result = canWinNim(3)
    expect(result).to.be.true
  })

  it('Will return true for an input of 2', () => {
    var result = canWinNim(2)
    expect(result).to.be.true
  })

})