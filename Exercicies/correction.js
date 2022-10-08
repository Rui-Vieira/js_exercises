function range(start, end) {
    let array = [];
​
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
​
    return array;
}
​
function rangeWithStep(start, end, step) {
    let array = [];
​
    if (step < 0) {
        for (let i = start; i >= end; i = i + step) {
            array.push(i);
        }
    } else {
        for (let i = start; i <= end; i = i + step) {
            array.push(i);
        }
    }
​
​
    return array;
}
​
function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
}
​
console.log(sum(range(1, 10)));
console.log(rangeWithStep(5, 2, -1));
​
function reverseArray(array) {
    let reverse = [];
​
    for (let i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);
    }
​
    return reverse;
}
​
function reverseArrayInPlace(array) {
    const middle = Math.floor(array.length / 2);
    const end = array.length - 1;
​
    for (let i = 0; i < middle; i++) {
        let tmp = array[i];
        array[i] = array[end - i];
        array[end - i] = tmp;
    }
}
​
console.log(reverseArray([1, 2, 3, 4, 5]))
const digits = [1, 2, 3, 4, 5]
reverseArrayInPlace(digits);
console.log(digits);
​
//Linked List
​
function prepend(list, value) {
    return {
        value: value,
        rest: list,
    }
}
​
function arrayToList(array) {
    let list = null;
​
    for (let i = array.length - 1; i >= 0; i--) {
        list = prepend(list, array[i]);
    }
​
    return list;
}
​
console.log(arrayToList([1, 2, 3, 4, 5]));
​
// function listToArray(list) {
//     if (list === null) {
//         return [];
//     }
​
//     const array = [];
​
//     for (let node = list; node; node = node.rest) {
//         array.push(node.value);
//     }
​
//     return array;
// }
​
// console.log(listToArray(arrayToList([1,2,3,4,5])));
​
// function listToArray(list, array) {
//     if (list === null) {
//         return array;
//     }
​
//     return listToArray(list.rest, [...array, list.value]);
// }
​
function listToArray(list) {
​
    const doStuff = (list, array) => {
        if (list === null) {
            return array;
        }
​
        return doStuff(list.rest, [...array, list.value]);
    }
​
    return doStuff(list, []);
}
​
const list = arrayToList([1, 2, 3, 4, 5]);
console.log(listToArray(list));
​
// function nth(list, index) {
//     let current = 0;
​
//     for (let node = list; node; node = node.rest) {
//         if (current === index) {
//             return node.value;
//         }
​
//         current++;
//     }
​
//     return undefined;
// }
​
function nth(list, index) {
    if (index === 0) {
        return list.value;
    }
​
    if (list.rest === null) {
        return undefined;
    }
​
    return nth(list.rest, index - 1);
}
​
console.log(nth(list, 3));
​
//Binary Tree
function add(tree, value) {
    if (tree === null) {
        return {
            value,
            left: null,
            right: null,
        };
    }
​
    if (value < tree.value) {
        return {
            value: tree.value,
            left: add(tree.left, value),
            right: tree.right,
        }
    }
​
    return {
        value: tree.value,
        left: tree.left,
        right: add(tree.right, value),
    }
}
​
function arrayToTree(array) {
    let tree = null;
​
    for (const elem of array) {
        tree = add(tree, elem);
    }
​
    return tree;
}
​
function deepEqual(a, b) {
    if (a === b) return true;
​
    if (a === null || typeof a !== "object" ||
        b === null || typeof b !== "object") {
        return false;
    }
​
    const aProperties = Object.keys(a);
    const bProperties = Object.keys(b);
​
    if (aProperties.length !== bProperties.length) return false;
​
    for (const prop of aProperties) {
        if (!bProperties.includes(prop) || !deepEqual(a[prop], b[prop])) {
            return false;
        }
    }
​
    return true;
}
​
function binarySearch(arr, elem) {
    if (arr.length === 0) {
        return -1;
    }
​
    const middleIndex = Math.floor(arr.length / 2);
    const middleValue = arr[middleIndex];
​
    if (elem === middleValue) {
        return elem;
    }
​
    if (elem > middleValue) {
        return binarySearch(arr.slice(middleIndex+1), elem);
    }
​
    return binarySearch(arr.slice(0, middleIndex), elem);
}
​
console.log(binarySearch(quickSort([1,4,5,2]), 2));
​
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
​
    const pivot = array[0];
​
    const right = [];
    const left = [];
​
    for (let i = 1; i < array.length; i++) {
        if (array[i] > pivot) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
    }
​
    return [...quickSort(left), pivot, ...quickSort(right)];
}
​
console.log(quickSort([5,3,1,8,9]));