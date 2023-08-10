export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Yamato',
  age: 29,
};

// friend.age++;

// in keyofを使って、Tという型のプロパティの名前で構成されるunion typesを
// in keyofで割り出して、そのunion typesから一個ずつプロパティを取り出して、Pに代入する
// それで、そのPを使って、元々の型にアクセスしに行って、型を1つずつ取り出していく
type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyouProfile = YomitoriSenyo<Profile>;
