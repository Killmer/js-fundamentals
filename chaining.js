const add = (function() {
    let total = 0;
    return function(number) {
      totat += number;
      
      return {
        add: (number) => {
          totat += number;
          return this;
        },
        result: () => console.log(total);
      }
    }
  })();
  
  add(3).add(3).add(4).result() // 10