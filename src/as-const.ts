export {};


let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 178
} as const; // as constをつけることで、profileオブジェクトのプロパティがreadonlyになる　ちょう楽になる


// profile.name = 'Ham';
// profile.height = 180;