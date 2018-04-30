var arr = [1, 2, 3];
var c;
var g = 0;
c = setInterval(function() {
  console.log(arr[g]);
  if (g === arr.length - 1) {
    g = 0;
  } else {
    g++;
  }
}, 3000);

var arr = [1, 2, 3],
  i = 0;

setInterval(() => {
  //console.log(arr[i]);
  i == arr.length - 1 ? (i = 0) : i++;
}, 3000);
