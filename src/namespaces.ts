export {};

namespace Japanese{
  // exportをつけることで、外からアクセスできるようになる
  export namespace Tokyo{
    export class Person {
      constructor(public name:string){}
    }
  }
  export namespace Osaka{
    export class Person {
      constructor(public name:string){}
    }
  }
}

namespace English{
  export class Person {
    constructor(
      public firstName:string,
      public middleName:string,
      public LastName: string
    ){}
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

const enMe = new English.Person('Ham', 'Middle', 'Ham');
console.log(enMe);