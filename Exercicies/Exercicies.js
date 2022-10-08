const {
  sortAndDeduplicateDiagnostics,
  isEmptyBindingElement,
} = require("typescript");

//* exercicies day 1

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

function parseQueryString(url) {
  if (typeof url !== "string") throw new Error("Not a string");

  const [_, queryString] = url.split("?");
  const queryparams = queryString.split("&");

  return queryparams.reduce((queryStringObject, queryParamater) => {
    const [name, value] = queryParamater.split("=");

    if (value.includes(",")) {
      const elements = value.split(",").map((element) => {
        if (!isNaN(element)) {
          return Number(element);
        } else {
          return element;
        }
      });

      queryStringObject[name] = elements;
    } else {
      queryStringObject[name] = value;
    }

    return queryStringObject;
  }, {});
}

//* Array exercises day 2

const arrayExemple = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayExemple3 = [2, 7, 9, 23, 876, 999, 666];
const arrayDuplicateExemple = [2, 2, 2, 6, 6, 6, 3, 3, 3];


function range(start, end) {
  
  if (typeof start !== "number" || typeof end !== "number")
    throw new Error("Not a number");

  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

function sumOfARange(initialRange, EndRange) {

  if (typeof initialRange !== "number" || typeof EndRange !== "number")
    throw new Error("Not a number");

  let sum = 0;
  for (let i = initialRange; i <= EndRange; i++) {
    sum += i;
  }
  return sum;
};


function rangeWithStep(start, end, step) {
  if (typeof start !== "number" || typeof end !== "number" || typeof step !== "number")
    throw new Error("Not a number");
  

  let array = [];
  if(step < 0) {
  for (let i = start; i >= end; i = i + step ) {
    array.push(i);
    }
  } else {
    for (let i = start; i <= end; i = i + step) {
      array.push(i);
      }
    } 
  return array;
  };


function sumOfRangeWithStep(initialRange, EndRange, stepNumber) {
  if (
    typeof initialRange !== "number" ||
    typeof EndRange !== "number" ||
    typeof stepNumber !== "number"
  )
    throw new Error("Not a number");
  if (stepNumber === 0) throw new Error("Step number can't be 0");
  if (undefined) throw new Error("Step number can't be undefined");

  let sum = 0;

  if (stepNumber < 0 && initialRange > EndRange) {
    for (let i = initialRange; i >= EndRange; i = i + stepNumber ) {
      sum += i;
      console.log(i);
    }
    return sum;
  } else {
    for (let i = initialRange; i <= EndRange; i = i + stepNumber ) {
      sum += i;
    }
    return sum;
  }
}


function reverseArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  let arr2 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
}

function reverseArray2(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  newArr = [];
  arr.forEach((element) => {
    newArr.unshift(element);
  });
  return newArr;
}

function reverseArray3(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  newArr = [];
  arr.forEach((element) => {
    newArr.push(element);
  });
  return newArr.reverse();
}

function reverseArray4(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");
  return arr.reverse();
}

function reverseArrayInPlace(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

function removeArrayDuplicateElements(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

function removeArrayDuplicateElements2(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) === -1) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

function removeArrayDuplicateElements3(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  return arr.filter((element, index) => arr.indexOf(element) === index);
}

/*
console.log("___________________ Reverse Array____________________________________\n");
console.log(reverseArray(arrayExemple));
console.log(reverseArray(arrayExemple3))
console.log("___________________ Reverse Array2___________________________________\n");
console.log(reverseArray2(arrayExemple));
console.log(reverseArray2(arrayExemple3))
console.log("____________________Reverse Array3__________________________________\n");
console.log(reverseArray3(arrayExemple));
console.log(reverseArray3(arrayExemple3))
console.log("____________________Reverse Array4__________________________________\n");
console.log(reverseArray4(arrayExemple));
console.log(reverseArray4(arrayExemple3))
console.log("____________________Remove Duplicate________________________________\n");
console.log("----------------------------");
console.log(removeArrayDuplicateElements(arrayDuplicateExemple));
console.log(removeArrayDuplicateElements2(arrayDuplicateExemple));
console.log(removeArrayDuplicateElements3(arrayDuplicateExemple));
console.log("----------------------------");

*/

function arrayToList(arr) {

  if (!Array.isArray(arr)) throw new Error("Not an array");
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};



function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    obj1 == null || typeof obj1 != "object" ||
    obj2 == null || typeof obj2 != "object"){
    return false;}

  let keysObj1 = Object.keys(obj1),
      keysObj2 = Object.keys(obj2);

  if (keysObj1.length != keysObj2.length) return false;

  for (let key of keysObj1) {
    if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key]))
      return false;
  }

  return true;
}

//* SeconPart

function quickSort(arr) {
  if (!Array.isArray(arr)) throw new Error("Not an array");

  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [],
      right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log("\n________________Binary Tree_______________ \n");

class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(bst.root, 1));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 10));
