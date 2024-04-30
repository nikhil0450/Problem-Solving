// Explain the concept of prime numbers and write a function to check if a given number is prime.

// Concept: Prime numbers are natural numbers that are divisible by only 1 & themselves. Basically the number which is not multiple of any other number, that number is a Prime Number.

function isPrime(number){
  if(number<=1) return false
  if(number<=3) return false
  if(number%2==0 || number%3==0) return false 
  let count = 0
  for(let i = 5 ; i * i <= number ; i+=6){
    count++
    if(number%i==0 && number%(i+2)==0){
      return [count, false]
    }
  } 
  return [count, true]
}

console.log(isPrime(4));
console.log(isPrime(791));