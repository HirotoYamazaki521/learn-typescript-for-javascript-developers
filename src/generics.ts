export {};

// const echo = (arg: number): number =>{
//   return arg;
// } 

// const echo = (arg: string): string =>{
//   return arg;
// } 

// genericsの適用
// <T>は、number型でもstring型でも、どんな型でも受け取れるようにする抽象的な型
// 引数の型も戻り値の型も同じになる
// また、型引数と呼ばれる
const echo = <T>(arg: T): T =>{
  return arg;
} 

console.log(echo<number>(15));
console.log(echo<string>('100'));
console.log(echo<boolean>(true));

// リテラルも可能
console.log(echo<'aaaaa'>('aaaaa'));

// classの場合
class Mirror<T> {
  constructor(public value: T){}

  echo(): T{
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('moji').echo());
console.log(new Mirror<boolean>(true).echo());
