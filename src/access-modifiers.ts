export {};

// クラスは、オブジェクト指向プログラミングの概念の1つ
class Person {
  // プライベートにしたいものにだけ、privateをつけ、基本的にはpublicは書かないのが一般的
  public name: string;
  protected age: number;
  // private age: number;
  protected nationality: string;

  // コンストラクタに引数は必要だが、戻り値はないので、アノテーションもいらない
  constructor(name:string, age:number, nationality:string){
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  // テンプレートリテラルを使うと、文字列の中に変数を埋め込むことができる
  profile(): string{
    return `name: ${this.name}, age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string){
    // 親クラスのコンストラクタを呼び出すときは、superを使う
    super(name, age, nationality);
  }

  profile(): string {
    // this.ageという書き方はPersonクラスしか許されないが、this.nationalityはPersonクラスとその子クラスにも許される
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

// インスタンスを作るときは、new演算子を使う
let taro = new Person('Taro', 30,'Japan');

console.log(taro.name);
console.log(taro.profile());

