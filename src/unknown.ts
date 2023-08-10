export {};

const kansu = ():number => 43; 

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// 等価演算子'=='は2つのオペランドの方が異なる場合、暗黙の型変換が行われ、それ同士を比較してtrueとなることがある
// 一方、厳密等価演算子'==='は、2つのオペランドの型が異なる場合、常にfalseとなるので、より厳密な一致判定が行える
// 型ガードを使うことで、型を絞り込むことができる
if (typeof numberUnknown === 'number'){
  let sumunknown = numberUnknown + 10;
}

// 型がわからない時に、anyばかりに頼るのではなくて、unknown型を使って、暫定的に型を絞りながら開発を進めることで、型安全を担保できる