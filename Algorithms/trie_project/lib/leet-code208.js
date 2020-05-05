// Implement a trie with insert, search, and startsWith methods.

//   Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a - z.
// All inputs are guaranteed to be non - empty strings.

class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}
// Initialize your data structure here.
var Trie = function () {
  this.root = new Node();
};
// /**
//  * Inserts a word into the trie. 
//  * @param {string} word
//  * @return {void}
//  */
Trie.prototype.insert = function (word, root=this.root) {
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (!(letter in root.children)) root.children[letter] = new Node();

    root = root.children[letter];
  }
  root.isTerminal = true;
};

// /**
//  * Returns if the word is in the trie. 
//  * @param {string} word
//  * @return {boolean}
//  */
Trie.prototype.search = function (word, root = this.root){
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (!(letter in root.children)) return false;

    root = root.children[letter];
  }
  return root.isTerminal;
};

// /**
//  * Returns if there is any word in the trie that starts with the given prefix. 
//  * @param {string} prefix
//  * @return {boolean}
//  */
Trie.prototype.startsWith = function (prefix, root = this.root){
  if (prefix.length === 0) return true;
  let fLetter = prefix[0];
  if (fLetter in root.children) {
    return this.startsWith(prefix.slice(1), root.children[fLetter]);
  } else {
    return false;
  }
};

// /**
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */