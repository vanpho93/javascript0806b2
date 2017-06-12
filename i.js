/*

*
**
***
****
*****

   *
  **
 ***
****

   *
  *** 
 *****
*******

*******
 *****
  ***
   *
  ***
 *****
*******
*/

function veHinh(soDong, getSoCot, check) {
    const soCot = getSoCot(soDong);
    for (i = 0; i < soDong; i++) {
        let str = '';
        for (j = 0; j < soCot; j++) {
            if (check(soDong, soCot, i, j)){
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

// veHinh(10, function(soDong) {
//     return soDong
// }, function(soDong, soCot, i, j) {
//     return j <= i;
// });

// veHinh(10, function(soDong) {
//     return soDong
// }, function(soDong, soCot, i, j) {
//     return soDong - i > j;
// });

const funcHinhNon = (soDong, soCot, i, j) => i >= soDong - 1 - j && i >= j - soDong + 1;

veHinh(
    10, 
    soDong => soDong * 2 - 1, 
    funcHinhNon
);