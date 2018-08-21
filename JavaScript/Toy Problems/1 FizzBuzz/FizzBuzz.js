// FizzBuzz - Bob Ross edition
// write a function that takes in one number.
// Starting at 1, console log every number up to the number passed in.
// If the number being logged is divisible by 3 log 'Bob' instead.
// If the number is divisible by 5 we will log 'Ross' instead.
// If they are divisible by both 3 and 5 we will log 'Bob Ross'

// Challenge Mode
// Use a 'while' or 'do while' loop



// Step 1: Clarify - Understand the question

//      Function that takes in 1 number. 
//      Loop console logs starting at 1 and log every number up to the number passed in.
//          --> function fizzBuzz(num) - if -> let i = 1 and i <= num, then console log number.
//      If number is divisible by 3 log 'Bob', so 3, 6, 9, 12 === 'Bob'.
//      If num is divisible by 5, then 'Ross', so 5, 10, 15, 20 === 'Ross'.
//      If Divisible by 3 and 5, then console log 'Bob Ross', so 15, 30, 45 etc === 'Bob Ross'.

// Step 2: What data structures are needed

//      Stuctures are a function, a for loop, if statements inside the for loop to handle the different console logs.
//      function fizzBuzz(num) - for(let i=1; i<=num; i++) - if(num % 3 === 0 && num % 5 === 0 ){ return 'Bob Ross'} - else if( num % 3 === 0 ) { return 'Bob' } - else if(num % 5 === 0 ) { return 'Ross' } - else { return num }

// Step 3: Create sample data
// Step 4: Solve Sample Data

        //  num = 2 --> console logs out  1, 2.
        //  num = 3 --> console logs out  1, 2, 'Bob'.
        //  num = 5 --> console logs out  1, 2, 'Bob', 4, 'Ross'.
        //  num = 15 --> console logs out 1, 2, 'Bob', 4, 'Ross', 'Bob', 7, 8, 'Bob', 'Ross', 11, 'Bob', 13, 14, 'Bob Ross'.

// Step 5: Function Signature
        // function fizzBuzz(num)

// Step 6: List code constructs
        // for loop, if statements, and console logs for printing to the screen.

// Step 7: Pseudo Code

        // Function takes in a number
        // Passes number in a for loop where i = 0 and increments where i<=num.
        // If num currently evaluated is divisible by 3 and 5, then print 'Bob Ross' to console.
        // Else if current num is divisible by 3, then print 'Bob' to console.
        // Else if current num is divisible by 5, then print 'Ross' to console.
        // Else any other number, then print the number to the console.

// Step 8: Solve

    function fizzBuzz( num ) {
        for( let i=1; i <= num; i++ ){
            if( i % 3 === 0 && i % 5 === 0 ){
                console.log('Bob Ross');
            } else if( i % 3 === 0 ){
                console.log('Bob');
            } else if( i % 5 === 0 ){
                console.log('Ross');
            } else {
                console.log(i);
            }
        }
    }

    console.log('First pass of fizzBuzz with 2 passed in');
    fizzBuzz(2);
    console.log('First pass of fizzBuzz with 3 passed in');
    fizzBuzz(3);
    console.log('First pass of fizzBuzz with 5 passed in');
    fizzBuzz(5);
    console.log('First pass of fizzBuzz with 15 passed in');
    fizzBuzz(15);