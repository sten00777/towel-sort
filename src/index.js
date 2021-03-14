
// You should implement your task here.

module.exports = function towelSort (matrix) {
 // return matrix.flat().sort(function compareNumbers(a, b) {
   // return a - b;
  //});

  /*if (matrix){
    return matrix.flat().sort(function compareNumbers(a, b) {
      return a - b;
    });
  } else if (matrix === undefined){
    return [];
  } return [];*/
let res = [];
  if (matrix){
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        matrix[i].reverse();
      }
    }
   return matrix.flat(Infinity);
    } else if (matrix === undefined){
    return [];
  } return [];
  
}
