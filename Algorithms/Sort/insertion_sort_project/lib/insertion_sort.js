// function insertionSort(arr) {
    
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i - 1; j >= 0 && arr[i] < arr[j]; j--) {
//             if ( j === 0){
//                 let el = arr.splice(i, 1);
//                 arr.unshift(el[0]);
//             } else if (arr[i] > arr[j-1]){
//                 console.log("entered other", arr[i], arr[j]);
//                 let el = arr.splice(i, 1);
//                 arr.splice(j, 0, el[0]);
//                 console.log(arr);
//             } else {
//                 console.log("this is 3");
//             }
//         }
//     }
//     return arr;
// }
function insertionSort(arr) {
    // the `i` loop will iterate through every element of the array
    // we begin at i = 1, because we can consider the first element of the array as a
    // trivially sorted region of only one element
    // insertion sort allows us to insert new elements anywhere within the sorted region
    for (let i = 1; i < arr.length; i++) {
        // grab the first element of the unsorted region
        let currElement = arr[i];

        // the `j` loop will iterate left through the sorted region,
        // looking for a legal spot to insert currElement
        for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
            // keep moving left while currElement is less than the j-th element
            // console.log(i,j);
            // console.log(arr[j+1], arr[j], currElement);
            arr[j + 1] = arr[j];
            // the line above will move the j-th element to the right, 
            // leaving a gap to potentially insert currElement
        }
        // console.log("j-outside", j);
        // insert currElement into that gap
        arr[j + 1] = currElement;
    }
    return arr;
}
// console.log(insertionSort([2, -1, 4, 3, 7, 3]));

module.exports = {
    insertionSort
};
// [5,4,3,6,2,1] 