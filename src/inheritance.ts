export {};

class Animal{
  constructor(public name: string){}

  run(): string{
    return 'I can run';
  }
}

class Lion extends Animal{
  public speed: number;

  constructor(name: string, speed: number){
    // nameの初期化は親クラスのコンストラクタで行われる
    super(name);

    // speedの初期化は子クラスのコンストラクタで行われる
    this.speed = speed;
  }

  run(): string{
    // 親クラスのメソッドを呼び出す
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animl = new Animal();
// console.log(animl.run());
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba',100).run());