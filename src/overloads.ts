export {};

// オーバーロードは同じ関数名でも、引数の型や個数が違うものを複数定義することができる

// シグネチャは、関数の宣言部分のこと
function double(value: number):number;
function double(value: string):string;

// 型の制約は、実装部分には書かず、シグネチャに書く
// 型の担保はシグネチャでしっかり行われているので、実装部分ではany型を使っても問題ない
function double(value: any): any{
  if (typeof value === 'number'){
    return value * 2;
  }else if(typeof value === 'string'){
    return value + value;
  }
  // 以下は必要なし
  // }else{
  //   throw 'numberでもstringでもないので、引数の型を確認してください';
  // }
}

console.log(double(100))
console.log(double(`Go`))
// console.log(double(true))