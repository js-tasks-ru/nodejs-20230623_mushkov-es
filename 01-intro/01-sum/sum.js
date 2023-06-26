function sum(...rest) {
  if(rest.some(arg => typeof arg !== 'number')) {
    throw TypeError('some type error')
  }
  return rest.reduce((acc, curr) => {
   return acc + curr
   
  },0)
}

module.exports = sum;
