module.exports = function countCats(kitty) {
 // throw 'Not implemented';
  // remove line with error and write your code here
   return kitty.flat().filter(ears=>ears==='^^').length;
};
