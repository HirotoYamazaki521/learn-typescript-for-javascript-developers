export {};

class VisaCard {
  // 読み取り専用
  // readonly owner: string;

  // 一応、publicは省略できる。書いたほうがわかりやすい
  constructor(public readonly owner: string){}
}

let myVisaCard = new VisaCard('ひろさん');
// myVisaCard.owner ='ham';

console.log(myVisaCard.owner)