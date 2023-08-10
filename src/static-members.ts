export {};

// 静的メンバとは、クラス自身が持つメンバのことで、変わらない値を保持したい時に使う

class Me{
  static isProgrammer: boolean = true;
  static firstName: string = 'Hiroto';
  static lastName: string = 'Yamazaki';

  static work(): string{
    // return "Hey, guys! This is Hiroto! Are you interested in TypeScript? Let's dive into TypeScript!"
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバへのアクセスは、クラス名.静的メンバ名でアクセスできる
// New演算子で毎回インスタンを作らなくても、クラス自身が持つメンバにアクセスできる
console.log(Me.isProgrammer);

console.log(Me.work());
