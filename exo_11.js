
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Le tableau n'est pas trié
        }
    }
    return true; // Le tableau est trié
}

// Exemple d'utilisation
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];

console.log(isSorted(arr1)); // Affiche true, car arr1 est trié
console.log(isSorted(arr2)); // Affiche false, car arr2 n'est pas trié
