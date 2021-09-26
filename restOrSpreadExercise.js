// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

/* Write an ES2015 Version */

// function filterOutOdds() {
//     const nums = Array.from(arguments).filter(num => num % 2 === 0);
//     // var nums = Array.prototype.slice.call(arguments);
//     // return nums.filter(function(num) {
//     //   return num % 2 === 0
//     // });
// }

// const filterOutOdds = Array.from(arguments).filter(num => num % 2 === 0);
const filterOUtOdss = (...args) => args.filter(num => num % 2 === 0);

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1


// Hannah's Response.
// **************************************************************************************
// function findMin(...nums) {
//     return nums.reduce((min, nextNum) => min < nextNum ? min : nextNum);
// }

// const findMin(...args) => args.reduce((min, nextNum) => min < nextNum ? min : nextNum);
// **************************************************************************************

// Correct Solution from Springboard.
const findMin = (...args) => Math.min(...args);



// mergeObjects
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2});

// doubleAndReturnArgs
// function doubleAndReturnArgs(arr, ...nextArr){
//     const doubles = nextArr.map(val => val * 2);
//     // const doubles = nextArr.map(function(val){
//     //     return val * 2;
//     // })
//     return arr.concat(doubles);
// }

const doubleAndReturnArgs = (arr, ...nextArr) => [...arr, nextArr.map(val => val * 2)];

// Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//     let randomVal = Math.floor(Math.random() * items.length);
//     let newArray = [...items];
//     newArray.splice(randomVal, 1);
//     // [...items.splice(randomVal, 1)];
//     return newArray;
// }

const removeRandom = items => {
    let randomVal = Math.floor(Math.random() * items.length);
    let newArray = [...items];
    newArray.splice(randomVal, 1);
    return newArray;
}

// From Springboard
// const removeRandom = items => {
//     let idx = Math.floor(Math.random() * items.length);
//     return [...items.slice(0, idx), ...items.slice(idx + 1)];
// }



/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {
//     return [...array1, ...array2];
// }

const extend = (arr1, arr2) => [...arr1, ...arr2];
/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {
//     let newObj = {...obj};
//     newObj[key] = val;
//     return newObj;
// }

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;    
}


/** Return a new object with a key removed. */

// function removeKey(obj, key) {
//     let newObj = {...obj};
//     delete newObj[key];
//     return newObj;
// }

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {


// }

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;    
}


