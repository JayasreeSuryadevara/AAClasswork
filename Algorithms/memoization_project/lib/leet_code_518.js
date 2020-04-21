// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins, memo = {}) {

  if ( amount === 0 ) return 1;
  if ( coins.length === 0 ) return 0;

  let key = amount + "/" + coins;
  if (memo.hasOwnProperty(key)) return memo[key];

  let comboCount = 0;
  const lastCoin = coins[coins.length-1];

  if(amount - lastCoin >= 0){
    comboCount += change(amount - lastCoin, coins, memo);
  }

  comboCount += change(amount, coins.slice(0, -1), memo);

  memo[key] = comboCount;
  return comboCount;

};

console.log(change(5, [1, 2, 5]));