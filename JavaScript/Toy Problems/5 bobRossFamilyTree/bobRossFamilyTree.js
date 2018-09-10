// This toy problem is somewhat different. This problem is about accessibility in nested objects and practicing how to access different objects in that object. Below in console logs is all the accesses I have made to make the correct accessing that was asked for.

const person = {
    firstName: 'Bob',
    lastName: 'Ross',
    age: '54',
    favoriteThings: ['Happy little Trees', 'Happy Accidents', 'Groves', 'Mountains'],
    children: [
      {
        firstName: 'Morgan',
        lastName: 'Ross',
        age: '32',
        favoriteThings: ['Hiking', 'singing'],
        children: [
          {
            firstName: 'Todd',
            lastName: 'Ross',
            age: '9',
            favoriteThings: ['Rain Dancing', 'Drawing'],
            birthday() {
              return ++this.age;
            },
            greet(greeter) {
              return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${
                this.favoriteThings[0]
              }?`;
            },
          },
          {
            firstName: 'Doug',
            lastName: 'Ross',
            age: '11',
            favoriteThings: ['Puddle Splashing', 'Getting Jiggy'],
            birthday() {
              return ++this.age;
            },
            greet(greeter) {
              return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${
                this.favoriteThings[0]
              }?`;
            },
          },
        ],
        birthday() {
          return ++this.age;
        },
        greet(greeter) {
          return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${
            this.favoriteThings[0]
          }?`;
        },
      },
      {
        firstName: 'Steve',
        lastName: 'Ross',
        age: '35',
        favoriteThings: ['Yodeling', 'Kareoke'],
        children: [],
        birthday() {
          return ++this.age;
        },
        greet(greeter) {
          return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${
            this.favoriteThings[0]
          }?`;
        },
      },
    ],
    birthday() {
      return ++this.age;
    },
    greet(greeter) {
      return `Hello ${greeter}, My name is ${this.firstName} ${this.lastName}. do you like ${this.favoriteThings[0]}?`;
    },
  };
  
  // Access 'Happy accidents' from Bob's favorite things.
  console.log('-------------------------------------------------');
  console.log('Bob Ross\' favorite things Happy Accidents access:');
  console.log(person.favoriteThings[1]);
  // Run Bob Ross' greet method.
  console.log('-------------------------------------------------');
  console.log('Bob Ross\' greet method:');
  console.log(person.greet('Chris'));
  // Access Morgan Ross's age.
  console.log('-------------------------------------------------');
  console.log('Morgan Ross\' age:');
  console.log(person.children[0].age);
  // Access 'Singing' from Morgan's favorite things.
  console.log('-------------------------------------------------');
  console.log('Morgan Ross\' favorite things is singing:');
  console.log(person.children[0].favoriteThings[1]);
  // Run Morgans Birthday method.
  console.log('-------------------------------------------------');
  console.log('Morgan Ross\' birthday method:');
  console.log(person.children[0].birthday());
  // Access 'Rain Dancing' from Todd Ross' favorite things.
  console.log('-------------------------------------------------');
  console.log('Todd Ross\' favorite things is rain dancing:');
  console.log(person.children[0].children[0].favoriteThings[0]);
  // Run Doug Ross' Greet method.
  console.log('-------------------------------------------------');
  console.log('Doug Ross\' greet method:');
  console.log(person.children[0].children[1].greet('Christopher'));
  
  // BONUS HARD MODE
  
  // redo all the above items but use nested destructuring to access the items.

  // Will do hard mode some other time.