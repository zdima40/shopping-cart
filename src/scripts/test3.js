const arr = [1, 2, 3];
function myF(arr, g) {
  for (let i = 0; i < length; i++) {
    g(arr[i]);
  }
}
function fu1(i) {
  console.log(i + 1);
}

function fu2(i) {
  console.log(i + "f");
}

myF(arr, fu1);
