export {};

class Person{
  // 初期化するために、引数の前にアクセス修飾子をつける
  constructor(public name:string, protected age:number){}
}

const me = new Person('hiro',29)
console.log(me);