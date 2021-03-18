/*Question - 
This challenge is based on a children's game used to teach division. 
Children sit in a circle. The player going first will say one, 
followed by the player next to them (going clockwise or 
  counter-clockwise) saying two, and so on, adding one each time. 
  However, any number divisible by three is replaced by the word 
  Fizz, any divisible by five by the word Buzz, and numbers 
  divisible by both three and five become FizzBuzz. A player who 
  hesitates or makes a mistake is eliminated from the game.

 
Coding Challenge
Write a program that prints the numbers from 1 to 100. But for 
multiples of three print Fizz instead of the number and for the 
multiples of five print Buzz instead of the number. For numbers 
which are multiples of both three and five print FizzBuzz instead 
of the number.

*/

function fizzBuzz(numbers) {
  for (var numbers = 1; numbers <= 100; numbers++) {
    if (numbers % 5 === 0 && numbers % 3 === 0) {
      console.log("FizzBuzz");
    } else if (numbers % 5 === 0) {
      console.log("Buzz");
    } else if (numbers % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(numbers);
    }
  }
  return;
}
