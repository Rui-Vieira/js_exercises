//* New exercises date: 2021-03-10
/**
 * Set of exercises to check if a person is legal age
 */

const LEGAL_AGE = 18;
const people = [
  {
    name: "John",
    age: 22,
  },
  {
    name: "Jane",
    age: 18,
  },
  {
    name: "Bob",
    age: 16,
  },
  {
    name: "Scarlett",
    age: 24,
  },
  {
    name: "Bruce",
    age: 15,
  },
  {
    name: "Angelina",
    age: 19,
  },
];


/**
 * Determines if all ages are legal
 * @param {object[]} people
 * @returns {boolean} - true if all ages are legal; false otherwise
 */

const allLegalAge = (people) => {
  if (people.every((person) => person.age >= LEGAL_AGE)) {
    console.log("All have legal age");
    return true;
  }
  console.log("Not all have legal age");
  return false;
};


/**
 * Determines if at least one person is of legal age
 * @param {object[]} people - the people
 * @returns {boolean} - true if at least one age is legal; false otherwise
 */

const atLeastOneLegalAge = (people) => {
  if (people.some((person) => person.age >= LEGAL_AGE)) {
    console.log("At least one person is of legal age");
    return true;
  }
  console.log("No one is of legal age");
  return false;
};


/**
 * Returns the oldest person
 * @param {object[]} people - the people
 * @returns {object} - the oldest person
 */

const getOldestPerson = (people) => {
  let oldestPerson = people[0];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age > oldestPerson.age) {
      oldestPerson = people[i];
    }
  }
  console.log("The oldest person is " + oldestPerson.name);
  return oldestPerson;
};


/**
 * Returns an array of people of legal age
 * @param {object[]} people - the people
 * @returns {object[]} - the people of legal age
 */

const getLegalAgePeople = (people) => {
  return people.filter((person) => person.age >= LEGAL_AGE);
};


/**
 * Returns an object containing an array of underage and another array of legal ages
 * I. e. {underage: [16, 15], legal: [22, 18, 24, 19]}
 * @param {object[]} people - the people
 */

const splitAges = (people) => {
  let splitAges = { underage: [], legal: [] };
  
  splitAges.underage = people
    .filter((person) => person.age < LEGAL_AGE)
    .map((person) => person.age)
    .sort((a, b) => a - b);
  splitAges.legal = people
    .filter((person) => person.age >= LEGAL_AGE)
    .map((person) => person.age)
    .sort((a, b) => a - b);
    
  return splitAges;
};

const splitAgesWithFor = (people) => {
  let splitAges = { underage: [], legal: [] };

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= LEGAL_AGE) {
      splitAges.legal.push(people[i].age);
    } else {
      splitAges.underage.push(people[i].age);
    }
  }
  return splitAges;
};


/**
 * Returns the first person of legal age
 * @param {object[]} people - the people
 * @return {object} - the first person of legal age
 */

const getFirstLegalAgePerson = (people) => {
  return people.find((person) => person.age >= LEGAL_AGE);
};


/**
 * Returns the people's names
 * @param {object[]} people - the people
 * @return {string[]} - the people's names
 */

const getNames = (people) => {
  return people.map((person) => person.name);
};

const getNames2 = (people) => {
  let names = [];

  for (let i = 0; i < people.length; i++) {
    names.push(people[i].name);
  }

  console.log(names);
  return names;
};


/**
 * Returns the sum of all ages
 * @param {object[]} people - the people
 * @return {number} - the sum of all ages
 */

const getAgeSum = (people) => {
  return people.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0
  );
};

const getAgeSum2 = (people) => {
  let sum = 0;

  for (let i = 0; i < people.length; i++) {
    sum += people[i].age;
  }
  console.log("Sum of all ages: " + sum);
  return sum;
};


/**
 * Returns an array of the names of people of legal age
 * @param {object[]} people - the people
 * @return {string[]} - the people's names
 */
const getLegalAgePeopleNames = (people) => {
  return people
    .filter((person) => person.age >= LEGAL_AGE)
    .map((person) => person.name);
};

const getLegalAgePeopleNames2 = (people) => {
  let legalAgePeopleNames = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= LEGAL_AGE) {
      legalAgePeopleNames.push(people[i].name);
    }
  }
  console.log("List of the pleople with legal age :" + legalAgePeopleNames);
  return legalAgePeopleNames;
};


function callAllFunctions() {
  console.log("\n-------Function allLegalAge-------");
  console.log(allLegalAge(people));

  console.log("\n-------Function atLeastOneLegalAge-------");
  console.log(atLeastOneLegalAge(people));

  console.log("\n-------Function getOldestPerson-------");
  console.log(getOldestPerson(people));

  console.log("\n-------Function getLegalAgePeople-------");
  console.log(getLegalAgePeople(people));

  console.log("\n-------Function splitAges-------");
  console.log(splitAges(people));

  console.log("\n-------Function splitAgesWithFor-------");
  console.log(splitAgesWithFor(people));

  console.log("\n-------Function getFirstLegalAgePerson-------");
  console.log(getFirstLegalAgePerson(people));

  console.log("\n-------Function getNames-------");
  console.log(getNames(people));

  console.log("\n-------Function getNames2-------");
  console.log(getNames2(people));

  console.log("\n-------Function getAgeSum-------");
  console.log(getAgeSum(people));

  console.log("\n-------Function getAgeSum2-------");
  console.log(getAgeSum2(people));

  console.log("\n-------Function getLegalAgePeopleNames-------");
  console.log(getLegalAgePeopleNames(people));

  console.log("\n-------Function getLegalAgePeopleNames2-------");
  console.log(getLegalAgePeopleNames2(people));
}

callAllFunctions();
