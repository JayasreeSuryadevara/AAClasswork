class Node {
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor(){
        this.root = new Node();
    }

    insertRecur(word, root = this.root){
        let fLetter = word[0];

        if (!(fLetter in root.children)) {
            root.children[fLetter] = new Node();
        }

        if (word.length === 1) {
            root.children[fLetter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[fLetter]);
        }
    }

    insertIter(word, root= this.root){
        for(let i = 0; i < word.length; i++){
            let letter = word[i];

            if (!(letter in root.children)) root.children[letter] = new Node();
            
            root = root.children[letter];
        }
        root.isTerminal = true;
    }

    searchRecur(word, root=this.root){
        if (word.length === 0) {
            return root.isTerminal;
        }

        let fLetter = word[0];

        if (!(fLetter in root.children)){
            return false;
        } else {
            return this.searchRecur(word.slice(1), root.children[fLetter]);
        }
    }

    searchIter(word, root=this.root){
        for(let i = 0; i < word.length; i++){
            let letter = word[i];

            if (!(letter in root.children)) return false;
            
            root = root.children[letter];
        }
        return root.isTerminal;
    }

    wordsWithPrefix(prefix, root= this.root){

        if (prefix.length === 0){
            let result = [];

            let children = Object.keys(root.children);

            if (root.isTerminal) result.push("");

            for ( let i = 0; i < children.length; i++){

                let child = children[i];
                // console.log("child", root.children[child]);

                let subtries = this.wordsWithPrefix(prefix, root.children[child]);
                let words = subtries.map(word => child + word);
                result.push(...words);
                // console.log("words", words);
            }
 
            return result;

        } else {
            let fLetter = prefix[0];
            let result = [];
            if (!(fLetter in root.children)) {
                return [];
            } else {
                let subtries = this.wordsWithPrefix(prefix.slice(1), root.children[fLetter]);
                let words = subtries.map(word => fLetter + word);
                result.push(...words)
            }
            return result;
        }

    }
}

module.exports = {
    Node,
    Trie
};

// ''  in', 'inn', 'inside', 'instructor', 'taco', 'tea', 'ten', 'tex'
// [t , i]
// t = [a, e] 
//a = [c]
//c = [o]=> terminal