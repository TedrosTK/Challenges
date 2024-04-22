// function progrssiveSum(num){
//    let sum = 0;
//    for(i=1; i <= num; i++) {

//     sum = sum + i;
//    }

//    return sum
// }

// console.log(progrssiveSum(4))

// function arrSum(arr) {
//    for (let i=0; i < arr.length; ++i) {
//       sum = sum = arr[i]
//    }
//    return sum;
// }

// console.log(arrSum(9))

// function calcTime (sec) {

//    let timerMinutes = Math.floor(sec / 60);
//    let timerSeconds = sec % 60;

//    if (timerMinutes.toString().length === 1) {
//       timerMinutes = '0' + timerMinutes
//    }
//    return timerMinutes + ':' + timerSeconds;
// }

// console.log(calcTime(1100))

// function getMax(arr) {
//   let max = arr[0]
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }
//   return max
// }
// console.log(getMax([1, 2, 3, 4]));

// function reverseString(str) {
//    return str.split('').reverse().join('');
// }

// console.log(reverseString('Tedros'))

// function converToZeros(arr) {
//    newArr = arr.map(element => 0)
//    return newArr
// }

// console.log(converToZeros([1,2,3,4]))

// function converToBool(arr) {
//   return arr.map(elem => !!elem)
// }

// console.log(converToBool([1,'Apple',2,'']))

function showRating(rating) {
  a = "";
  for (i = 0; i < Math.floor(rating); i++) {
    if (i < Math.floor(rating) - 1) {
      a += "* ";
    } else {
      a += "*";
    }
  }

  if (rating > Math.floor(rating)) {
    a += " .";
  }

  return a;
}

console.log(showRating(3.5));
