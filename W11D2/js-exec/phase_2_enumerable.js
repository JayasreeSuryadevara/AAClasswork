Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]) ;
  };
};

function cb(el) {
  return el = el * 2;
  console.log(el);
};

// a =[1, 2, 3, 4, 5]
//  a.myEach(cb)
// 1
// 2
// 3
// 4
// 5
// undefined


Array.prototype.myMap = function(cb) {
    const resultsArray = [];
    
    const callBack = function(el) {
      resultsArray.push(cb(el));
    };

    this.myEach(callBack);

    return resultsArray;
};

// a = [1, 2, 3, 4, 5];

// function cb(el) {
//   return el = el * 2;
//   console.log(el);
// };


// a.myMap(cb);
// 2
// 4
// 6
// 8
// 10

Array.prototype.myReduce = function (callBackFunc, initialValue) {
  let currentArray= this;
  if (initialValue === undefined){
    initialValue = currentArray[0];
    currentArray = currentArray.slice(1);
  };
  let result = initialValue;
  currentArray.myEach(el => result = callBackFunc(el, result));
  return result;
};

// [1, 2, 3].myReduce(function (acc, el) {
//   return acc + el;
// });
// 6
// [1, 2, 3].myReduce(function (acc, el) {
//   return acc + el;
// }, 25);
// 31