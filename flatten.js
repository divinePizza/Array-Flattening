function flatten(arr) {
    return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flatten(val) : val);
    }, []);
  }
  
  const arr = [1, [2, [3, 4]]];
  const flattened = flatten(arr);
  console.log(flattened); 