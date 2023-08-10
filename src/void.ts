export {};

// 戻り値のない関数の型定義をvoid型とする
function returnNothing(): void{
  console.log("I don't return anytthging!");
}

console.log(returnNothing());