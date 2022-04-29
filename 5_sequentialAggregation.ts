/**
 * 逐次的凝集な関数
 */
function sequentialAggregation(input: number) {
  // 特定の手順でかつ、手順間で値の受け渡しをする
  // 複数の処理がまとまっている
  const result1 = add(input);
  const result2 = times(result1, 2);
  const result3 = divide(result2, 2);

  return result3;
}

function add(input: number) {
  return input + 1;
}
function times(input: number, times: number) {
  return input * times;
}
function divide(input: number, divide: number) {
  return input / divide;
}
