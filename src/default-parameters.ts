export {};

// 引数のデフォルト値を設定することができる
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
}

console.log(nextYearSalary(1000));