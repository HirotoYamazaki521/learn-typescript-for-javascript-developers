export {};

// reducerは、アキュムレータとカレントバリューを受け取って、アキュムレータにカレントバリューを足していく関数
const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue})
  return accumulator + currentValue;
}

// restパラメータhは、引数の数が可変長であることを表す
const sum: (...values: number[]) => number = (...values: number[]):number => {
  return values.reduce(reducer);
}

const answer: number = sum(1, 2, 3, 4, 5);

console.log({answer});