export {};

// tsconfig.jsonの設定で"strictNullChecks": true が入っていると、nullとundefinedを代入できない
// 秩序が消え失せるので、基本的にはtrueにしておく

// どうしてもnullを代入したい場合は、union型を使う
let profile :{name: string, age: number | null} = {
  name: 'Ham',
  age: null
};

