export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

// any型は、どんな型とも互換性があり、今回の場合は、string型代入することでstring型になる
fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

// 文字リテラル型は、文字列型の一部だから、互換性がある
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

// 数値型も同様
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal{
  age: number;
  name: string;
}

class Person{
  constructor(public age: number,public name: string){}
}

let me: Animal;
// オブジェクトを代入できるかどうかは、オブジェクトの型は関係ない
// このケースでは、PersonクラスはAnimalインターフェースを実装していないが、代入できる
// クラスの継承関係や、実装している云々は関係ない　⇨ 構造的部分型

// 代入されるオブジェクトの内部でもつメンバが、代入するオブジェクトの内部でもつメンバを全て持っているかどうかが重要
me = new Person(43, 'はむさん');
console.log({me})

