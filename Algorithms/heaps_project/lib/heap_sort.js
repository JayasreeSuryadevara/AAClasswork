const {MaxHeap} = require("./max_heap");

function heapSort(arr) {
    let heap = new MaxHeap();

    arr.forEach((ele) => heap.insert(ele));
    let sortedArr = [];

    while (heap.array.length > 1) {
        sortedArr.unshift(heap.deleteMax());
    }
    return sortedArr;
}

console.log(heapSort([23,22,15,27,30,12,9]));