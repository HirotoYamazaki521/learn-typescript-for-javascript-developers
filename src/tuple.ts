export {};

let profile = ['ham', 43];
// profile = [43, 'ham']; // エラーにならない

let profile2: [string, number] = ['ham', 43];
// profile2 = [43,'ham']; // 型の順序性の制約によりエラーになる