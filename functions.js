//Polifill for bind 
if (!Function.prototype.bind) {
  Function.prototype.bind = function(context, ...bindArgs) {
    return function(...fnArgs) {
      if (typeof this !== 'function') {
        throw new Error('EROOR');
      }
      const args = [...bindArgs, ...fnArgs];
      const fn = this;
      return fn.apply( context, args )
    }
  } 
}

//Polifill for call
if (!Function.prototype.call) {
  Function.prototype.call = function(context, ...callArgs ) {
    if (typeof this !== 'function') {
      throw new Error('Error')
    }
   const fn = this;
    context.fn = fn;
   return context.fn(...callArgs);
  }
}
  
//Polifill for apply
if (!Function.prototype.apply) {
  Function.prototype.apply = function(context, ...applyArgs ) {
    if (typeof this !== 'function') {
      throw new Error('Error')
    }
   const fn = this;
   const args = [...applyArgs];
    context.fn = fn;
   return context.fn(args);
  }
}
  
//Polifill for map 
  if (!Array.prototype.map) {
    Array.prototype.map = function(fn) {
      const resultArray = [];
      const array = this;
      
      array.forEach((el, i , arr) => {
         const result = fn(el, i , arr);
          resultArray.push(result);
      });
      
      return resultArray;
    }
  }
  
  //Polifill for filter
  if(!Array.prototype.filter) {
    Array.prototype.filter = function(fn) {
      const resultArray = [];
      array = this;
      
      array.forEach((el, i, arr) => {
        if(fn(el, i, arr)) {
          resultArray.push(el);
        }
      });
      
      return resultArray
    }
  }
  
  //Polifill for reduce
  if(!Array.prototype.reduce) {
    Array.prototype.reduce = function(fn, initialValue) {
      const array = this;
      const acc = initialValue;
      if(initialValue == undefined) {
        initialValue = array[0];
      }
      array.forEach((el, i, arr) => {
        acc = fn(acc, el, i, arr);
      })
        return acc;
    }
  }