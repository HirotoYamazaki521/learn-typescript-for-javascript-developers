export {};

// たくさんの場面で使われているので、union型は覚えておくと良い
let value: number | string = 1;
value = 'foo';
value = 100;
