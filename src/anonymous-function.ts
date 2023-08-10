export {};

let bmi:(height: number, weight: number) => number = function(
  height : number,
  weight: number
):　number{
  return weight / (height * height);
};

console.log(bmi(1.70,108));