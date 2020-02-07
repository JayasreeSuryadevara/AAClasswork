Array.prototype.bubbleSort = function() {
    arr = this
    let sorted = false;
    while(!sorted){
        sorted = true;
        for(let i = 0; i < arr.length; i++ ){
            if (arr[i] > arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
                sorted = false;
            }
        }
    }
    return arr;
}

// a = [1,5,2,8,3,5,9].bubbleSort();
// console.log(a);

String.prototype.substrings = function() {
    let substrings = [];
    for(let i = 0; i < this.length; i++ ){
        for(let j = i+1; j < this.length; j++ ){
            substrings.push(this.substring(i,j));
        }
    }
    return substrings;
}

subs = "destruction".substrings();
console.log(subs);
