export {};

// never型は、決して何も返さない型
function error(message: string): never{
  throw new Error(message);
}

try{
 let result = error('test')
 // 例外により、この行は実行されない
  console.log({result});
}catch (error){
  console.log({error});
}

let foo: void = undefined;
let bar: never = error('only me!');