Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    console.log( cb(this[i]) );
  };
};

function cb(el) {
  console.log(el);
};