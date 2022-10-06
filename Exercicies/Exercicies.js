const { sortAndDeduplicateDiagnostics } = require("typescript");

let quote =
  "Laziness is the mother of all bad habits. But ultimately, she is a mother and we should respect her.";
let strCamelCase = "helloWorld";
let strSnakeCase = "best_pratices";
let stringURL = "mindera.com?a=1,2&b=3,4&c=four";

function triangleStars(num) {
  let str = "";

  if (typeof num !== "number") throw new Error("Not a number");

  for (let i = 0; i < num; i++) {
    str += "*";
    console.log(str);
  }
}

function reverseTriangleStars(num) {
  var str = "";

  if (typeof num !== "number") throw new Error("Not a number");

  for (let i = 0; i < num; i++) {
    str += "*";
  }
  for (let i = 0; i < num; i++) {
    console.log(str);
    str = str.slice(0, -1);
  }
}

function triangleStars2(num) {
  var str = "";

  if (typeof num !== "number") throw new Error("Not a number");
  for (let i = 0; i < num; i++) {
    str += "*";
    console.log(str.padStart(num));
  }
}

function fizzBuzz(num) {

  if (typeof num !== "number") throw new Error("Not a number");

  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function chessBoard(num, num2) {
  if (typeof num !== "number" || typeof num2 !== "number")
    throw new Error("Not a number");

  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num2; j++) {
      if ((i + j) % 2 == 0) {
        str += " ";
      } else {
        str += "#";
      }
    }
    str += "\n";
  }
  console.log(str);
}

function shorterStringWithEllipis(str, num) {
  if (typeof num !== "number") throw new Error("Not a number");
  if (typeof str !== "string") throw new Error("Not a string");

  if (str.length > num) {
    str = str.slice(0, num);
    str += "...";
  }
  return str;
}

function convertCamelcaseIntoSnakecaseFun(str) {
  if (typeof str !== "string") throw new Error("Not a string");

  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      str2 += "_";
      str2 += str[i].toLowerCase();
    } else {
      str2 += str[i];
    }
  }
  return str2;
}

convertCamelcaseIntoSnakecase = (str) => {
  if (typeof str !== "string") throw new Error("Not a string");

  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      str2 += "_";
    }
    str2 += str[i].toLowerCase();
  }
  return str2;
};

function convertSnakecaseIntoCamelcaseFun(str) {
  if (typeof str !== "string") throw new Error("Not a string");

  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "_") {
      str2 += str[i + 1].toUpperCase();
      i++;
    } else {
      str2 += str[i];
    }
  }
  return str2;
}

convertSnakecaseIntoCamelcase = (str) => {
  if (typeof str !== "string") throw new Error("Not a string");

  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "_") {
      i++;
      str2 += str[i].toUpperCase();
    } else {
      str2 += str[i];
    }
  }
  return str2;
};

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

//   "mindera.com?a=1,2&b=3,4&c=four";



function parseQueryString(url) {
  if (typeof url !== "string") throw new Error("Not a string");

const[_, queryString] = url.split('?');
const queryparams = queryString.split('&');

return queryparams.reduce((queryStringObject, queryParamater) => {
  const [name, value] = queryParamater.split('=');

  if(value.includes(',')) {
    const elements = value.split(',')
    .map((element) =>  {
      if (!isNaN(element)) {
        return Number(element);
      } else {
        return element;
      }
    })

    queryStringObject[name] = elements;
  } else {
    queryStringObject[name] = value;
  }

  return queryStringObject;
}, {})};

//   "mindera.com?a=1,2&b=3,4&c=four";