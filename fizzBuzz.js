function fizzBuzz(n) {
  const result = []
  for (var i = 1; i <= n; i++) {

    if ((i % 5 === 0) && (i % 3 === 0)) { 
      result.push('FizzBuzz')
    } else if (i % 5 === 0) result.push('Buzz')
    else if (i % 3 === 0) result.push('Fizz') 
    else result.push(i.toString())
  }
  return result
}



