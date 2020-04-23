function swap(arr, index1, index2) {
    let firstEl = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = firstEl;
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let mainIdx = i;
        for(let j = i; j < arr.length; j++) {
            if ( arr[mainIdx] > arr[j]) {
                mainIdx = j;
            }
        }
        swap(arr,i, mainIdx)
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};