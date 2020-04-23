function swap(array, idx1, idx2) {
    let firstEle = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = firstEle;
    return array;
}

//[2, 1, 3, 7, 5] = [1, 2, 3, 5, 7]
// [7, 23, 1, 89, 5, 3, 12]
function bubbleSort(array) {
    let sorted = false;
    while(!sorted){
        sorted = true;
        for (let i = 0; i < array.length; i++) {
            let el1 = array[i];
            let el2 = array[i+1];
            if (el1 > el2) {
                swap(array, i, i+1);
                sorted = false;
            }     
        }
    }
    return array;
}

module.exports = {
    bubbleSort,
    swap
};