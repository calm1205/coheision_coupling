/**
 * 通信的凝集な関数
 */
function communicationAggregation(input: string) {
  // 手順に意味があり、手順間で同じ値を利用する
  // 複数の処理がまとまっている
  changeA(input);
  changeB(input);
  changeC(input);

  return input;
}

function changeA(input: string) {}
function changeB(input: string) {}
function changeC(input: string) {}
