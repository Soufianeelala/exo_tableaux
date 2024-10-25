
function countOccurrences(arr, value) {
    return arr.reduce((count, element) => element === value ? count + 1 : count, 0);}
 
    function mostFrequent(arr){
        let countmax=0 ;
        let elementmax= null;
        for (let element of arr){
            let countelement=countOccurrences(arr, element)
            if(countmax < countelement ) {

                    countmax=countelement
                    elementmax=element
            }
        }   
       
        return elementmax ;

    }
    
const tableau = [1, 2, 2, 3, ,2,2,2,4, 2, 5, 3, 3, 3];
const elementFrequent = mostFrequent(tableau);
console.log(elementFrequent); // Affiche 3
