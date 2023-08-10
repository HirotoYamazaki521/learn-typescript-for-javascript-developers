export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude
// Excludeは、第一引数に指定した型から、第二引数に指定した型を除外する
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;

// Functionは関数の総称で、作られた型を除外する
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract 抽出
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// NonNullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
