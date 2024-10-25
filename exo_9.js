function mergeArrays(arr1 , arr2){
    return [...arr1, ...arr2];
}
let table1 = [1,2,3];
let table2 = [4,5,6];
let table1_table2=mergeArrays(table1 ,table2)
console.log(table1_table2)