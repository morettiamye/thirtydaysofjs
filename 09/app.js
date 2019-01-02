const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
};

p.addEventListener("onclick", makeGreen);


// Regular
console.log("Hello!");

// Interpolated
console.log("Hello! I am a %s string!", "💩");

// Styled
console.log("%c I am some great text", "font-size: 12px; color: blue")

// warning!
console.warn("Oh no!");

// Error :|
console.error("Big error!");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
console.assert(1 === 2,  "wrong! you are fake news");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7 } human years old`);
  console.groupEnd(`${dog.name}`);
})

  console.table(dogs);
// counting
console.count(p);

// timing
console.time("fetching data");
fetch("https://api.github.com/users/morettiamye")
.then(data => data.json)
.then(data => {
  console.timeEnd("fetching data");
  console.log(data);
});