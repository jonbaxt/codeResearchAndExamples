// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples Given: 
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



// Need to take in a string, reverse string words letters by word. Word needs to still be in the same place after the string has been evaluated.

// Need a function. Need temporary variables to save the steps of breaking the string and reverse it.
// Need a for loop to evaluate each word and use reverse to reverse the string.

//Sample Data:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// 'The quick brown fox jumps over the lazy dog.' ==> 'ehT kciuq nworb xof spmuj revo eht yzal .god'
// 'apple' ==> 'elppa'
// 'a b c d' ===>'a b c d'
// 'double  spaced  words' ==> 'elbuod  decaps  sdrow'

//reverseWords(str)
// let tempStr => split(), newArr => [], final => join()
// for(let key in tempStr) => split() reverse() join()

//Solve
function reverseWords(str) {
    let tempStr = str.split(" ")
    let newArr = [];
    let final = '';
    for (let key in tempStr){
      newArr.push(tempStr[key].split("").reverse().join(""));
    }
    final = newArr.join(" ");
    // console.log(final);
    return final;
  }
  
// Tests
reverseWords('This is an example!');
reverseWords('double spaces');
reverseWords('The quick brown fox jumps over the lazy dog.');
reverseWords('apple');
reverseWords('a b c d');
reverseWords('double  spaced  words');