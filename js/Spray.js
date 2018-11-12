const spray = (() => {
  const Spray = function() {};
  Spray.prototype.selectors = [];
  Spray.prototype.addToSelector = function(selector, sprayClass) {
    
    this.selectors.push({selector:selector, class:sprayClass})
    const elems = document.querySelectorAll(selector);
    for (let i = 0; i < elems.length; i++) {
      const elem = elems[i];
      this.addToElem(elem, sprayClass);
    }
  };
  Spray.prototype.addToSelectorLocal = function(parent,selector, sprayClass) {
    
    const elems = parent.querySelectorAll(selector);
    for (let i = 0; i < elems.length; i++) {
      const elem = elems[i];
      this.addToElem(elem, sprayClass);
    }
  };
  Spray.prototype.addToElem = (elem, sprayClass) => {
    const classes = sprayClass.split(" ");
    elem.classList.add(...classes);
  };
  Spray.prototype.removeFromSelector = function(selector, sprayClass) {
    const elems = document.querySelectorAll(selector);
    this.selectors = this.selectors.filter(a=>(a.selector!==selector && a.class!==sprayClass));
    for (let i = 0; i < elems.length; i++) {
      const elem = elems[i];
      this.removeFromElem(elem, sprayClass);
    }
  };
  Spray.prototype.removeFromElem = (elem, sprayClass) => {
    const classes = sprayClass.split(" ");
    elem.classList.remove(...classes);
  };
  Spray.prototype.watchFor = function(parent, tags) {
    const spray = this;
    const config = { childList: true, subtree: true };
    const observer = new MutationObserver(() => {
      for (tag of tags) {
        const selector = Object.keys(tag)[0];
        const sprayClass = tag[selector];
        spray.addToSelectorLocal(parent,selector, sprayClass);
      }
    });
    observer.observe(parent, config);
    return observer;
  };
  return new Spray();
})();
