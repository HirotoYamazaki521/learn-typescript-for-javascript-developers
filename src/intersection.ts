export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

// 既存の方を組み合わせて新しい型を作ることができる
type TwoWayPlayer = Pitcher1 & Batter1;

const OotaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}
