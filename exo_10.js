function removeDuplicates(arr){
return arr.filter((x, i) => arr.indexOf(x) === i);
 
}
var arr = [ 1, 3, 5, 1, 2, 3, 7, 4, 5];
console.log(removeDuplicates(arr));

