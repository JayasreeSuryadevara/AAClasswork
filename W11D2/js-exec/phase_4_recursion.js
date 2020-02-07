function range(start, end) {
    if( start === end) {
        return[];
    }

    let r = range(start, end-1);
    r.push(end-1);
    return r;
}

// a = range(2,25)
// console.log(a);

function sumRec(arr) {
    if (arr.length === 0){
        return 0;
    }
    let sum = sumRec(arr.slice(1));
    sum += arr[0];
    return sum;
}

// console.log(sumRec([1,2,3,4,5]));

function exponent(base, exp) {

    if (exp === 0){
        return 1;
    }
    result = exponent(base, exp-1)
    result *= base;
    return result;
}

// console.log(exponent(5,5));

function fibonacci(n) {
    let fibs = [0, 1];
    if (n < 3) {
        return fibs.slice(0, n);
    }

    while (fibs.length < n) {
        fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
    }

    return fibs;
}

// console.log(fibonacci(7));



function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map((el) => {
        return deepDup(el);
    });
}

const array = [[2], 3];
const dupedArray = deepDup(array);
// console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

// console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
// console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

// bsearch
function bsearch(numbers, target) {
    if (numbers.length === 0) {
        return -1;
    }

    const probeIdx = Math.floor(numbers.length / 2);
    const probe = numbers[probeIdx];

    if (target === probe) {
        return probeIdx;
    } else if (target < probe) {
        const left = numbers.slice(0, probeIdx);
        return bsearch(left, target);
    } else {
        const right = numbers.slice(probeIdx + 1);
        const subProblem = bsearch(right, target);

        return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
    }
}

// console.log(`bsearch([1, 2, 3], 3) = ${bsearch([1, 2, 3], 3)}`);
// console.log(`bsearch([1, 2, 3], 2.5) = ${bsearch([1, 2, 3], 2.5)}`);

// merge, mergeSort
function merge(left, right) {
    const merged = [];

    while (left.length > 0 && right.length > 0) {
        let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
        merged.push(nextItem);
    }

    return merged.concat(left, right);
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        const middle = Math.floor(array.length / 2);

        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle));

        return merge(left, right);
    }
}

// console.log(`mergeSort([4, 5, 2, 3, 1]) = ${mergeSort([4, 5, 2, 3, 1])}`);

// subsets
function subsets(array) {
    if (array.length === 0) {
        return [[]];
    }

    const first = array[0];
    const withoutFirst = subsets(array.slice(1));
    // remember, we don't want to mutate the subsets without the first element
    // hence, the 'concat'
    const withFirst = withoutFirst.map(sub => [first].concat(sub));

    return withoutFirst.concat(withFirst);
}

// console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);
