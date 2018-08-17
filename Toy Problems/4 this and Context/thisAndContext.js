 // Teacher notes
    // This one requires a good amount of knowledge of 'this' and how it works when we move
    // the fn of the object.
    // 'this' will always be the object to the immediate left of the function being invoked. That
    // is always the case, not just when we have a method on an object. Technically when you
    // just have a function on the global scope 'this' is the window/global object.
    // Below on step 2 when we save the method to the fn we can also invoke it using `window.fn()`.
    // This means if we have an object called state on the global scope the function will use that one,
    // but only if you use var, not let or const.
    // You may also be tempted to use an arrow function for the method, 'this' will always be the window
    // and can not be rebound.
    // On step 4 when we set it as a property of the props object 'this' becomes the prop object, not
    // personTwo

    
    var person = {
        state: {
          name: 'Bob Ross',
          favoriteThings: ['Happy little Trees', 'Happy Accidents', 'Groves', 'Mountains'],
          age: '54',
        },
        greet: function (greeter, guy, dude) {
          //Notice we will be checking what 'this' is every time we run the function
          console.log(this)
          return `Hello ${greeter} ${guy} ${dude}, My name is ${this.state.name}. do you like ${this.state.favoriteThings[0]}?`
        }
      }
      // Step 1
      // Run the greet method on the person object.
      // Pay close attention to what the console log of 'this' prints.
      person.greet()
      // Step 2
      // Now create a variable called fn and save person.greet to it.
      // Run the fn function and notice what 'this' is in the console.
      var x = person.greet
      // Step 3
      // If we pass person.greet as a parameter to a function and run
      // it we will see the same issue.
      function callerBack(greet, name) {
        console.log(this)
        return greet(name)
      }
      // Invoke callerBack and pass in person.greet and a name
      // You should see that it breaks all because of 'this'
      // 'this' is the window object and it does not have the state property.
      // How can we ensure that function uses the correct 'this' and let us
      // access persons state property?
      // Step 4
      // Now for this step create a new property on personTwo.props called greet
      // and give it the value of person.greet.
      const personTwo = {
        state: {
          name: 'Tim Allen',
          favoriteThings: ['Home Improvement'],
          age: '65',
        },
        props: {
          job: 'fixer',
          friends: ['Al Borland', 'Wilson Wilson Jr.'],
          greet: function (greeter) {
            //Notice we will be checking what 'this' is every time we run the function
            console.log(this)
            return `Hello ${greeter}, My name is ${this.state.name}. do you like ${this.state.favoriteThings[0]}?`
          }
        },
      }
      // Run personTwo.props.greet and notice what 'this' is.
      // Notice 'this' still does not see state! But it does see the job and
      // friend properties. Interesting.
      // Step 5
      // There is a fix to ensure you function remembers what 'this' should be.
      // look up '.bind' and try and redo steps 2, 3 and 4 but use your new found
      // knowledge about '.bind' to make sure it remembers what 'this' is.
      var boundFunction = person.greet.bind(person);