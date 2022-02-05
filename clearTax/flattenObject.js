let Input = {
    a: [1, 2, 3],
    b: {
      c: {
        d: {
          e: 4
        }
      }
    },
    f: 5,
    g: {
      h: [6, 7]
    }
  };
  let output = [];
  console.log("outputs", flattenTheObject(Input));

  function flattenTheObject(data) {
     
    for (let key in data) {
        const value = data[key]
        if (Array.isArray(value)) output = [...output, ...value];
        else if (typeof value == "number") output.push(value);
        else if(typeof value == 'object') flattenTheObject(value);
      
    }
    return output
  }
  