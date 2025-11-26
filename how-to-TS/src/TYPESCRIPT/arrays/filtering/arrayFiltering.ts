
const colours = ['red','green','blue']

// .map is a transformation method
const uppercaseColours = colours.map(colour => colour.toUpperCase());
console.log(uppercaseColours);

// filter
const filteredColours = colours.filter(colour => colour === 'red');
console.log(filteredColours);

const filteredColoursThatContainsE = colours.filter(
    colour => colour .includes('e'));
console.log(filteredColoursThatContainsE
);

const multipleFilters = colours.filter(
    colour => colour.includes('e') && colour.includes('r'));
console.log(multipleFilters
);

const multipleOrFilters = colours.filter(
    colour => colour === 'red' || colour === 'blue'
);
console.log(multipleOrFilters)

// checking - some. some = at least 1 matches in the list
const checkIfRedExists = colours.some(
    colour => colour === 'red')
console.log(checkIfRedExists
)

// checking - every. every = does all data match
const checkAllareREd = colours.every(colour => colour === 'red')
console.log(checkAllareREd
)

const checkAllAreValid = colours.every(
    colour => colour.length >1)
console.log(checkAllAreValid)


// -----

const dog = {
    breed: 'lab',
    age:3
}

const cat = {
    breed: 'persian',
    age:2
}

const cart= [dog,cat];

const getAllAnimalsOver2 = cart.filter(
    animal => animal.age > 2);
console.log(getAllAnimalsOver2
)

const getPersion = cart.find(
    animal => animal.breed === 'persian'
);
console.log(getPersion)