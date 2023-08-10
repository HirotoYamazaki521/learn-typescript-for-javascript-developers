export {};

class Mahotsukai {}
class Souryo {}

// 2つのクラスを継承することはできない
// class Taro extends Mahotsukai,Souryo {}

// 複数箇所に分散する機能を集めて、1つのクラスにまとめることができる
// インターフェースは全てのクラスが抽象メソッドのようなもの
class Taro extends Mahotsukai {}

interface Kenja {
  // シグネチャ
  ionazun(): void;
}

interface Senshi{
  kougeki(): void;
}

class Makenshi implements Kenja, Senshi {
  ionazun(): void{
    console.log('ionazun');
  }

  kougeki(): void{
    console.log('kougeki');
  }
}

const makenshi = new Makenshi();
makenshi.ionazun();
makenshi.kougeki();