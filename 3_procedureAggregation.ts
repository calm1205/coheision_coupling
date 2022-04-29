/**
 * 手順的凝集な関数
 */
function procedureAggregation(fileName: string) {
  // 特定の時間でかつ、実行順序に意味のある複数の処理がまとまっている
  if (!existFile(fileName)) throw new Error();
  if (!checkFilePermission(fileName)) throw new Error();
  const file = fileOpen(fileName);
  return file;
}

function existFile(fileName: string) {
  return !!fileName;
}
function checkFilePermission(fileName: string) {
  if (fileName === "admin") {
    return true;
  }
  return false;
}
function fileOpen(fileName: string) {
  return "file";
}
