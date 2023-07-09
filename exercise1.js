function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [value1, , value2] = arr;
  
    return {
      name,
      age
    };
}