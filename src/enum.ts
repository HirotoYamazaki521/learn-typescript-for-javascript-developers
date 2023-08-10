export {};

// enumの変数名は大文字で始め、複数形にするのが一般的
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  Octover,
  November,
  December
}

console.log(Months.January); // 0
console.log(Months.February); // 1
console.log(Months.December); // 11

// Jsだと値を振っていかないといけないが、Tsだと自動で値が振られる
// const MonthsJs = {
//   January: 0,
//   February: 1
// }

// console.log(Months.January);
// console.log(Months.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00'
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({green});

// 後から追加することもできる
enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

COLORS.YELLOW;