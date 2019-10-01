module.exports = function zeros(expression) {
  let arr1 = []
  let arr2 = []
  let number = 0
  let number2 = 0

  expression.split('*').map(v => v[v.length - 2] === '!' ? arr2.push(v.substr(0, v.length - 2)) : arr1.push(v.substr(0, v.length - 1)));

  function countNumberAndNumber2(v, version) {
    for (v; v > 0; v -= version) {
      let num = v;
      while (true) {
        if (num % 2 === 0) {
          number += 1;
          num /= 2;
        } else if (num % 5 === 0) {
          number2 += 1;
          num /= 5;
        } else break;
      }
    }
  }

  arr1.map(v => countNumberAndNumber2(v, 1));
  arr2.map(v => countNumberAndNumber2(v, 2));
  return number - number2 > 0 ? number2 : number;
}
