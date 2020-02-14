class DOMNodeCollection {
    constructor(htmlEl) {
        this.htmlEl = htmlEl;
    }
}
DOMNodeCollection.prototype.html = function(arg){
    if(arg){
        return this.htmlEl.map( el => {
            el.innerHTML(arg);
        });
    } else {
        return this.htmlEl[0].innerHTML();
    }
}
DOMNodeCollection.prototype.empty = function(){
    return this.htmlEl.map(el =>  el = "");
}

DOMNodeCollection.prototype.append = function(htmlArr) {
    htmlArr.forEach(el1 => {
        this.htmlEl.forEach(el2 => {
            el2.innerHTML.append(el1.outerHTML);
        });
    });
    return this.htmlEl;
    //.each(el) this.htmlEl(el).innerHTML.append(el.outerHTML)
}

DOMNodeCollection.prototype.attr = function (...args) {
    if ((args.length === 1) && (typeof args !== Object)){
        this.htmlEl.forEach( el => {
            return el.getAttribute(args[0]);
        });
    } else if (args.length === 2) {
        if (args[1] instanceof Function){
            const callback = args[1];
            const el = args[0];
            return callback(args.indexOf(el), el.value);
        } else {
            this.htmlEl.map(el => {
                return el.setAttribute(args[0],args[1]);
            })
        }
    } else {
        const attributes = Object.keys(args);
        const values = Object.values(args);
        for(let i = 0; i < args.length; i++){
            this.htmlEl[i].setAttribute(attributes[i],values[i]);
        }
    }
}


DOMNodeCollection.prototype.addClass = function (...args) {
    if (args.length === 1) {
        this.htmlEl.map (el => {
            return el.classList.add(args[0]);
        });
    } else {
        if (args[1] instanceof Function) {
            const callback = args[1];
            this.htmlEl.map((el, index) => {
                return callback(index, el.className);
            })
        } else {
            this.htmlEl.map (el => {
                return args.forEach(el1 => el.classList.add(el1));
            });
        }
    }
}

DOMNodeCollection.prototype.removeClass = function (...args) {
    if (args.length === 1) {
        this.htmlEl.map (el => {
            return el.classList.remove(args[0]);
        });
    } else {
        if (args[1] instanceof Function) {
            const callback = args[1];
            this.htmlEl.map((el, index) => {
                return callback(index, el.className);
            })
        } else {
            this.htmlEl.map (el => {
                return el.classList.remove(...args);
            });
        }
    }
}
// element.classList


// Syntax

// Return content:
// $(selector).html()

// Set content:
// $(selector).html(content)

module.exports = DOMNodeCollection;