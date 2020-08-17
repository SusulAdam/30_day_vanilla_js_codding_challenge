// start with strings, numbers and booleans
// let age = 100;
// let age2 = age;
// console.log(age, age2);
// age = 200;
// console.log(age, age2);

// Let's say we have an array
const players = ['Wes',
    'Sarah',
    'Ryan',
    'Poppy'];


const team = players;
console.log(team);

team[3] = 'Lux'

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

const team2 = players.slice()
// or
const team3 = [].concat(players)
console.log(team2);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread

const team4 = [...players]
console.log(team4);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
}


// and think we make a copy:

// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 })
console.log(cap2);
console.log(person);



// We will hopefully soon see the object ...spread

const cap3 = { ...person };
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'wes',
    age: 100,
    social: {
        twitter: '@wsbos',
        fb: 'wesbos.developer'
    }
}


console.clear()


const dev = Object.assign({}, wes)
dev.social.twitter = 'coolman'
console.log(dev);
console.log(wes);
// assigns works online in one lvl !!!!!!!!!!!!!

// Deeep clone
console.clear()
const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = 'niceman'
console.log(dev2);
console.log(wes);
