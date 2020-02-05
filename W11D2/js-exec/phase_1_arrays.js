// declaring function like name = function()
// ! should have parenthesis before it.

Array.prototype.myUniq = function () {
  const resultArray = [];

  for (let i = 0; i < this.length; i++){
    if ( !( resultArray.includes(this[i]) ) ){ resultArray.push(this[i]) };
  };

  return resultArray;
}; 

//[1, 2, 2, 3, 4, 4, 5].myUniq(); //[ 1, 2, 3, 4, 5 ]

// Array.prototype.twoSum = function() {
//     const pairSum = [];
//     this.forEach ( function (el) {
//         let currentEl = this[this.indexOf("el")];
//         let nextEl = this[this.indexOf("el") + 1];
//         if ((currentEl + nextEl  ) === 0 ) {
//             let temp = [currentEl, nextEl ];
//             pairSum.push(temp);
//         };
//     })
//  };

Array.prototype.twoSum = function () {
    const pairSum = [];
    for(let i = 0; i < this.length - 1; i++){
        if ( (this[i] + this[i+1]) === 0 ){
            let temp = [this[i],this[i+1]];
            pairSum.push(temp);
        };
    };
    return pairSum;
};

 // [1,2,-2,-3,-1].twoSum() // [ [ 2, -2 ] ]

 Array.prototype.transpose = function (arr) {
  const transposedArray = Array.from( {length: this.length}, () => Array.from({length: this[0].length} ) );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
        // console.log(`i = ${i}, j = ${j}`);
      transposedArray[j][i] = this[i][j];
    };
  };

  return transposedArray;
 };
// Array{length: 5 , () => Array{length: 5}}