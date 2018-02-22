module.exports = function getZerosCount(number, base) {
  let zero = number;
  let buf = base;
  let pow = 0;
  let con = 0;
  let k = 0;
  for (let i = 2; i <= base; i++){
    if (buf % i === 0){
      pow = 0;
      while (buf % i === 0){
        pow++
        buf = ~~(buf/i)
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
