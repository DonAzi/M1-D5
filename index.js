

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/


/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

/* WRITE YOUR ANSWER HERE */

const area = function (l1, l2) {
    return l1 * l2;
  };
  const areaResult = area(3, 4);
  console.log(areaResult);
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* WRITE YOUR ANSWER HERE */

const crazySum = function (num1, num2) {
    if(num1 === num2)
    {
        return num1+num2 * 3
    }
    else
    {
        return num1 + num2
    }
}
console.log(crazySum(4, 9))

 // THSI IS ANOTHER VARIANT FOR EX2 CALLED ternary operation

// const crazySum2 = function (n1, n2) {

//  return n1 === n2 ? (n1 + n2) * 3 : n1 + n2
// }
// console.log(crazySum2(6, 6))


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */
// const crazyDiff = function(givenNumber) {
//     if 
//      (givenNumber>19) {
//        return (givenNumber%19)*3
//        }
//     else 
//     {
//         return 19%givenNumber
//     }
// }
// console.log(crazyDiff(2))


    const crazyDiff = (num) => {
    return num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19)
    }
console.log(crazyDiff(2))

    // return givenNumber>19 ? (givenNumber - 19) *3 : 19 - givenNumber ======== Ternary operation



/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

const boundary = (n) => 
true ? (20<n && n<=100) || (n === 100) : false

    console.log(boundary(234))

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

const striviFy = function(str) 
{
 if (str.startsWith("Strive")) {
    return striviFy 
}
 else { 
     return "Strive" + str
 }
}

// ternary operation didnt work ?????? WHY //???????????????????????????????????????????
          // const striviFy = function(str) {
        //     return str.stratsWith("Strive") ? str : "Strive" + str  }
 console.log(striviFy(" Hello"))


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

/* WRITE YOUR ANSWER HERE */

// const check3and7 = (posNum) => 
//  posNum >= 0 && (posNum % 3 === 0 || posNum % 7 ===0) ? true : false

//  console.log(check3and7(0))

const check3and7 = function (iFpositiveNumber) {
    if (iFpositiveNumber>=0 && (iFpositiveNumber % 3 === 0  ||  iFpositiveNumber % 7 === 0))
    { return true}

    else { 
        return false
    }
}
console.log(check3and7(29))
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR ANSWER HERE */

const reverseString = function (givenStr) {
    return givenStr.split("").reverse().join("")

    // let splitString = givenStr.split("")
    let reverseString = splitString.reverse()
    let finalString = reverseString.join("")
}
console.log(reverseString("Strive"))


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

// const upperFirst = function (str) {
//     return str.charAt(0).toUppercase() 

//           let firstChar = str.charAt(0)
//           let upperCase = firstChar.toUppercase()
//           let cutString = str.sclice(1) 
// }

// console.log(upperFirst("strivers"))


const upperFirstPhrase = function(str) { //phrase as param
    let words = str.split(" ")
    let finalString = []
    // console.log(finalString)
    for(let i = 0; i < words.length; i++) {
      let firstChar = words[i].charAt(0)
      console.log(firstChar)
      let uppercaseChar = firstChar.toUpperCase()
      console.log(uppercaseChar)
      let cutString = words[i].slice(1)
            console.log(cutString)

      let finalWord = uppercaseChar + cutString
                  console.log(finalWord)
      
      finalString.push(finalWord)
        console.log(finalString)

    }
    console.log(finalString.join(""))
  }
  
  upperFirstPhrase("hello world")

  //     i have  QUESTIONS REGARDING THE HOME WORK IN ALL PARTS

  



/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

    const cutFirstnLastString = function (str){
    return str.slice(1 , str.length -1)

}

console.log(cutFirstnLastString("Aziza"))

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */
//  NOT MY CODE
// const giveMeRandom = (n) => 
//     {
//         const arr = []
//         for (let i=0; i<=n; i++);
//          { arr.push(Math.floor(Math.random())* 10);  }
//         return arr;
//     }
// console.log(giveMeRandom(5));

 

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/