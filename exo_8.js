function filterEven(arr) {
   return  arr.filter(x => x % 2 ===0);

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(filterEven(arr))