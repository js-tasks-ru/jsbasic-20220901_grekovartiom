function getMinMax(str) {
  function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
  }
 let inputData = str
.split(" ")
.filter(item => +item)
.map(item => Number(item))
 .sort(compareNumeric);
  let result =
      {min: inputData.shift(), 
       max: inputData.pop(),
             }
  return result
 }