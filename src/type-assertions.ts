export {};

let name: any = 'Hiro';

// let length = name.length as number;
// let length = (name as string).length;

// この書き方は、JSXの場合には、JSXの構文として認識されてしまうので、非推奨
let length = (<string>name).length;

console.log({length});

// length = 'foo';
