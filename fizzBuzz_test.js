/*Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]*/


mocha.setup('bdd');
var expect = chai.expect;

describe("fizzbuzz : ", function() {

  it("exists", function() {
    expect(fizzBuzz).to.be.a('function');
  });

  it('Returns a an Array', function() {
    expect(fizzBuzz(5)).to.be.an.instanceOf(Array)
  })

  it('Returns the correct output for a certain input', function() {
    expect(fizzBuzz(3)).to.deep.equal(['1', '2', 'Fizz'])

  })

})

