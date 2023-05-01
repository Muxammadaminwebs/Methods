// =============MAP=============//

// Array.prototype.customMap = function (callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.customMap(function (number) {
//     return number * number;
// });

// console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// =============MAP=============//




// =============FIND=============//

// Array.prototype.customFind = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             return this[i];
//         }
//     }
//     return undefined;
// }

// const numbers = [1, 2, 3, 4, 5];

// const foundNumber = numbers.customFind(function (number) {
//     return number > 3;
// });

// console.log(foundNumber); // 4

// =============FIND=============//




// =============FILTER=============//

// Array.prototype.customFilter = function (callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5];

// const filteredNumbers = numbers.customFilter(function (number) {
//     return number % 2 === 0;
// });

// console.log(filteredNumbers); // [2, 4]

// =============FILTER=============//







// =============POP=============//


// Array.prototype.customPop = function () {
//     if (this.length === 0) {
//         return undefined;
//     }
//     const lastIndex = this.length - 1;
//     const lastItem = this[lastIndex];
//     this.length = lastIndex;
//     return lastItem;
// }

// const numbers = [1, 2, 3, 4, 5];

// const lastNumber = numbers.customPop();

// console.log(numbers); // [1, 2, 3, 4]
// console.log(lastNumber); // 5


// =============POP=============//







// =============PUSH=============//

// Array.prototype.customPush = function (...items) {
//     for (let i = 0; i < items.length; i++) {
//         this[this.length] = items[i];
//     }
//     return this.length;
// }

// const numbers = [1, 2, 3, 4];  mnh

// const newLength = numbers.customPush(5, 6, 7);

// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
// console.log(newLength); // 7

// =============PUSH=============//





// =============INCLUDES=============//

// Array.prototype.myiIncludes = function (x) {
//     for (let i = 0; i < this.length; i++) {
//         if (this[i] === x) {
//             return true;
//         }
//     }
//     return false;
// };

// const mevalar = ['olma', 'banan', 'uzum'];

// console.log(mevalar.myiIncludes('olma')); // true
// console.log(mevalar.myiIncludes('anor')); // false

// =============INCLUDES=============//
