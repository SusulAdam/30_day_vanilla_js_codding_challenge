
function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated

console.log('hello i am a %s string', 'VARIABLE');

// Styled

console.log('%c I am a great text', 'font-size: 30px; background: red;');

// warning!

console.warn('WORRRniiingg');

// Error :|

console.error('sorry for the error');

// Info
console.info('That\' a info')

// Testing
// we can for example check if element contains some class
console.assert(1 === 4, '1 it isn\'t 4');

// clearing

console.clear();

// Viewing DOM Elements

const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});
// counting

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing

console.time('fetching-data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json()
        .then(data => {
            console.timeEnd('fetching-data');
            console.log(data)
        }))

console.table(dogs);