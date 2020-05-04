//find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
const {MaxHeap} = require('./max_heap.js');
// import MaxHeap from './max_heap';

// function findKthLargest(nums, k) {
//     let sortedNums = nums.sort((a,b) => a - b);
//     return sortedNums[nums.length - k];
// }

function findKthLargest(nums, k) {

  let heap = new MaxHeap();
  nums.forEach( el => heap.insert(el));

  let max;
  let i = 0;
  while(i < k){
    max = heap.deleteMax();
    i++;
  }
  return max;
}

console.log(findKthLargest([23, 5, 8,1, 3, 9], 3));

module.exports = {
    findKthLargest
}