let i, j;
let count = 0;
for (j = 2; j <= 100; j++) {
  //outer loop by this we get the number to check
  for (i = 1; i <= j; i++) {
    // this number checks
    if (j % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(j);
  }

  count = 0;
}
// let count = 0;
// let i, j;
// for (j = 2; j <= 100; j++) {
//   for (i = 1; i <= j; i++) {
//     if (j % i == 0) count++;
//   }

//   if (count == 2) console.log(j);
//   count = 0;
// }
