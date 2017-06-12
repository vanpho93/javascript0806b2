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

veHinh(5, function(soDong) {
    return soDong
}, function(soDong, soCot, i, j) {
    return j <= i;
});