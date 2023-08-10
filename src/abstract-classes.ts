export {};

// 抽象クラス
abstract class Animal{
  // 抽象メソッド
  abstract cry(): string;
}

// abstractは必ず(オーバーライド)継承しなければならない
class Lion extends Animal{
  cry(){
    return 'roar';
  }
}

class Tiger extends Animal{
  cry(){
    return 'meow';
  }
}