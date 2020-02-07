Array.prototype.uniq = function() {
  let resultArr = []
  for(let i = 0; i < this.length; i++){
    if (!resultArr.includes(this[i])){
      resultArr.push(this[i]);
    }
  }
  return resultArr;
}

// a = [1, 2, 2, 3, 3, 3].uniq();
// console.log(a);

Array.prototype.twoSum = function() {
  twoSumPairs = []
  for( let i = 0; i < this.length; i++){
    for(let j = i; j < this.length; j++){
      if (this[i] + this[j] === 0){
        twoSumPairs.push([i,j]);
      }
    }
  }
  return twoSumPairs;
}

// a = [1,2,4,-4,3,-3,-2,8].twoSum();
// console.log(a);

Array.prototype.transpose = function() {

  const resultArr = Array.from( { length: this.length }, () => Array.from({ length: this[0].length }));

  for(let i = 0; i < this.length; i++){
    for(let j = 0; j < this[0].length; j++){
      resultArr[j][i] = this[i][j];
    }
  }   

  return resultArr;    

}

a = [[1,2,3],[4,5,6],[7,8,9]].transpose();
console.log(a);
