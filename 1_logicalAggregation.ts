/**
 * 論理的凝集な関数
 */
function logicalAggregation(flag: boolean) {
  // 論理的に似ている複数の処理が関数にまとまっている
  // フラグで実施する処理を分岐する
  // 同時に実行することのない処理が同じ関数内に存在する
  // 利用者は内部構造を意識してフラグを渡す必要がある。

  if (flag) {
    a();
  } else {
    b();
  }
}

function a() {}
function b() {}
