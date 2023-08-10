export {};

interface Profile{
  name : string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {name: 'Ham', underTwenty: false};

// How to write index signatures
// { [ index:typeForindex ]: typeForValue }
profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';


// 練習
interface NumberMap{
  name: string;
  [key: number]:string;
}

let numberMap: NumberMap = {name:'yamazaki',1:'1',3:'3'};

numberMap[4] = 'two';

console.log({numberMap});
