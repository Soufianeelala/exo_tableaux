function countOccurrences(arr, value) {
    return arr.reduce((count, element) => element === value ? count + 1 : count, 0);
}

const tableau = [1, 2, 3, 4, 2, 1, 2, 5];
const occurrences = countOccurrences(tableau, 1);
console.log(occurrences); // Affiche 2
