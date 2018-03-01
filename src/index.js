module.exports = function getZerosCount(number, base) {
  let zero = number;
  let rem = base;
  let pow = 0;
  let con = 0;
  let k = 0;
  for (let i = 2; i <= base; i++){
    if (rem % i === 0){
      pow = 0;
      while (rem % i === 0){
        pow++
        rem = ~~(rem/i)
      }
      con = 0
      k = number
      while (k/i > 0){
        con += ~~(k/i)
        k = ~~(k/i)
      }
      zero = Math.min(zero, ~~(con/pow))
    }
  }
  return zero
}
