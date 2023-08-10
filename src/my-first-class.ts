export {};

// クラスは、オブジェクト指向プログラミングの概念の1つ
class Person {
  name: string;
  age: number;

  // コンストラクタに引数は必要だが、戻り値はないので、アノテーションもいらない
  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }

  // テンプレートリテラルを使うと、文字列の中に変数を埋め込むことができる
  profile(): string{
    return `name: ${this.name}, age: ${this.age}`
  }
}

// インスタンスを作るときは、new演算子を使う
let taro = new Person('Taro', 30);
let hanako = new Person('Hanako', 20);

console.log(taro.profile());

