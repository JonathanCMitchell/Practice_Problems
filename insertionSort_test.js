
mocha.setup('bdd');
var expect = chai.expect;
var should = chai.should();


describe("insertionSort : ", function() {

  it("exists", function() {
    expect(insertionSort).to.be.a('function');
  });

  it('Returns a an Array', function() {
    expect(insertionSort([1,2,3])).to.be.an.instanceOf(Array)
  })

  it('Sorts the input array', () => {
    expect(insertionSort([3,2,4,1,5,6])).to.deep.equal([1,2,3,4,5,6])
  })

  it('should do this in linear time', () => {
    var startTime, endTime;
  
    startTime = new Date();
    var unsorted = Array(100).fill(1).map((elem, index, array) => {
    return Math.floor(Math.random(10) * index +1)
    })
    var result = insertionSort(unsorted)
    endTime = new Date();

    expect(endTime - startTime).to.be.below(50)

  })
})