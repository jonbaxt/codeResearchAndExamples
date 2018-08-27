// Challenge:
// Given a list of ten numbers, sort them from least to greatest.



// Step 1: Clarify - Understand the question
    // The list of 10 numbers are numbers, there are no strings that need to be converted into a number?
    //      I will say for this one yes.
    // Will the numbers be positive and negative?
    //      I will say yes.
    // Can there be the same numbers or are they all different?
    //      Will be all different.

// Step 2: What data structures are needed
    // Need a function that takes in an array of 10 numbers.
    // Need a local variable in the function that will store the data.
    // Need to use .sort() method with taking into account from the .sort method limitations of not being able to not sort correctly on its own.

// Step 3: Create sample data
// Step 4: Solve Sample Data
    // [-1, -4, -2, 5, 2, 0, 7, 1, 10, 9] => [-4, -2, -1, 0, 1, 2, 5, 7, 9, 10]
    // [-9, -1000, -20, 5, 4, 2000, 0, -1, 2, 10] => [-1000, -20, -9, -1, 0, 2, 4, 5, 10, 2000]
    // [7, 6, 8, -5, -1, 0, 1, 10, 11, 12] => [-5, -1, 0, 1, 6, 7, 8, 10, 11, 12]
    // [1, 2, 0, 3, 5, 6, -2, -3, -4, -5] => [-5, -4, -3, -2, 0, 1, 2, 3, 5, 6]

// Step 5: Function Signature
// Step 6: List code constructs
    // function leastToGreat(arr)
    // let tempStore
    // .sort( (a,b) => a-b)

// Step 7: Pseudo Code
    // function takes in array
    // array stores parameter in temporary variable.
    // use .sort() on array to get the numbers sorted correctly.
// Step 8: Solve
    function leastToGreat(arr){
        let tempStore = arr;
        return tempStore.sort( (a,b)=>a-b);
    }
    leastToGreat([-1, -4, -2, 5, 2, 0, 7, 1, 10, 9]); 
    leastToGreat([-9, -1000, -20, 5, 4, 2000, 0, -1, 2, 10]); 
    leastToGreat([7, 6, 8, -5, -1, 0, 1, 10, 11, 12]); 
    leastToGreat([1, 2, 0, 3, 5, 6, -2, -3, -4, -5]); 