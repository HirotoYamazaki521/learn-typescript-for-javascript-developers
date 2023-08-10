export {};

// あってもなくてもいい引数をoptional argumentsという
// 本来は関数に設定した引数は、必ず渡す必要がある

let bmi: (height: number, weight: number, printable? : boolean) => number= (
  height:number,
  weight:number,
  printable? : boolean
) => {
  const bmi: number = weight / (height * height)
  if(printable){
    console.log({ bmi });
  }
  return bmi
};

bmi(1.70, 108, true);

// bmi(身長,　体重,　console.logで出力するかどうか?)
// bmi(1.70, 108, true);
// bmi(1.70, 108, false);
// bmi(1.70, 108);

