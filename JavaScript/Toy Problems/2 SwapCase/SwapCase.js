// Swap Case
// Below is a function that takes in a string and reverses the case of every character and returns the new string.
// It is currently in a broken state and does not run properly.
// It is possible to fix the code by only modifying the existing code, not adding new lines.

//test data
//'This Is An Example' becomes 'tHIS iS aN eXAMPLE'
//'boB rOss IS thE OrIgInAl GanGster' Becomes 'BOb RoSS is THe oRiGiNaL gANgSTER'


// Step 1: Clarify - Understand the question

//      Need to fix a currently broken problem that is not functioning correctly.
//      Can fix code by just modifying existing code and not by adding code.

// Step 2: What data structures are needed

//      Structure already provided

// Step 3: Create sample data
// Step 4: Solve Sample Data

//      Test data given: 
//          'This Is An Example' becomes 'tHIS iS aN eXAMPLE'
//          'boB rOss IS thE OrIgInAl GanGster' Becomes 'BOb RoSS is THe oRiGiNaL gANgSTER'

// Step 5: Function Signature

//      function caseReverse(str)

// Step 6: List code constructs

//      strArray to split string into an array.
//      for loop to go through the array of characters
//      test cases for if the character is upper case or lower case.

// Step 7: Pseudo Code

//      Test code how it is functioning and see how it is going out.
//      Can console log what is happening in the program.

//      When code is currently ran, the code returns still an array that is not formatted differently. 
//          So split is splitting by word which makes the first if statement useless and so everything is being return in an else statement instead.

//      Need to split by letter: split('') and join('') after done with for loop.

// Step 8: Solve

// Solved below original code.

//      Original Code that was provided
// ----------------------------------------------------------------------
// function caseReverse(str) {
//     var strArray = str.split(' ');
//     for (var i = 1; i < strArray.length; i++) {
//       if (strArray[i] === strArray[i].toUpperCase()) {
//         strArray[i].toLowerCase();
//       } else {
//         strArray[i].toUpperCase();
//       }
//     }
//     return strArray
//   }

//   console.log(caseReverse('boB rOss IS thE OrIgInAl GanGster'));   

//  My Solution of working code.
// --------------------------------------------------------------------------------


function caseReverse(str) {
    var strArray = str.split(''); //Removed space from the split so splits by letter and not be word.
    for (var i = 0; i < strArray.length; i++) // Changed i to = 0 so that all characters are tested.
     {
        if (strArray[i] === strArray[i].toUpperCase()) { // Added both equals to actually change data stored in memory.
            strArray[i] = strArray[i].toLowerCase();
        } else {
            strArray[i] = strArray[i].toUpperCase();
        }
    }
    return strArray.join(''); // Added join at the end of the return to return a string instead of an array.
}
  
  console.log(caseReverse('boB rOss IS thE OrIgInAl GanGster'));