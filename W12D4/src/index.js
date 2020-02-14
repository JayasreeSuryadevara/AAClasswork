const DOMNodeCollection = require("./dom_node_collection");

window.$1 = arg => {
    if (typeof arg === "string") {
        const nodes = document.querySelectorAll(arg);
        const nodesList = Array.from(nodes);
        return new DOMNodeCollection(nodesList);
        
    } else if (arg instanceof HTMLElement) {
        // debugger;
        const nodes = document.querySelectorAll(arg.tagName);
        const nodesList = Array.from(arg);
        return new DOMNodeCollection(nodesList);
    }
}


