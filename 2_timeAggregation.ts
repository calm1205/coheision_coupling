/**
 * 時間的凝集な関数
 */
function timeAggregation(
  config: () => void,
  db: () => void,
  logger: () => void
) {
  // 初期化処理のように特定の時間に実行される複数の処理がまとまっている
  // 以下の処理は機能やデータにおいて関係がない
  // また実行順序に意味はない
  config();
  db();
  logger();
}
