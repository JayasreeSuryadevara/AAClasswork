Array.prototype.myEach = function (callback) {
  for(let i = 0; i < this.length; i++ ){
    callback(this[i]);
  }
}

// a = [1, 2, 3, 4, 5]; 
// a.myEach((el) => { 
//   el *= 2;
//   console.log(el);
//  });

Array.prototype.myMap = function (callback) {
  resultArr = []
  this.myEach(el => resultArr.push(callback(el)));
  return resultArr;
}

// a = [1, 2, 3, 4, 5]; 
// a.myEach((el) => { 
//   el *= 2;
//   console.log(el);
//  });

Array.prototype.myReduce = function (callback, initialValue) {
  arr = this;
  if (!initialValue){
    initialValue = arr[0];
    arr.slice(1);
  };
  for( let i = 0; i < arr.length; i++ ){
    initialValue = callback(initialValue, arr[i]);
  }
  return initialValue;
}

// // without initialValue
// a = [1, 2, 3].myReduce(function (acc, el) {
//   return acc + el;
// });
// console.log(a);

// // with initialValue
// b = [1,2,3].myReduce(function (acc, el) {
//   return acc + el;
// }, 25);
// console.log(b);
