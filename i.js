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

veHinh(5, function(soDong) {
    return  soDong * 2 - 1;
}, function(soDong, soCot, i, j) {
    return i >= 4 - j && i >= j - 4;
    // return  i >= j - 4;
});