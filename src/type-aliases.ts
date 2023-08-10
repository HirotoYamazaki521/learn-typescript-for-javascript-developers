export {};

// 先頭は大文字で、型別名はキャメルケースで記述する
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};

type Profile = {
  name: string;
  age: number;
}

const example2:Profile = {
  name: 'Ham',
  age: 43
};

// example1の型を取得する
type Profile2 = typeof example1