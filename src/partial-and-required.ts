export {};

type Profile = {
  name: string;
  age?: number;
  zipcode: number;
}

// type Profile2 = {
//   name?: string;
//   age?: number;
// }

// オプショナルな方を作る メンテナンスコストがかからない
type PartialType = Partial<Profile>;

// 全て必須のプロパティになる
type RequiredType = Required<Profile>;