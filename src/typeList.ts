/* eslint-disable */
// typescriptの基本の型

// boolean
let bool: boolean = true;

// number
let num: number = 1;

// string
let str: string = "string";

// Array
let ary1: Array<number> = [1, 2, 3, 4, 5];
let ary2: number[] = [1, 2, 3, 4, 5];

// tuple
let tuple: [number, string] = [1, "str"];

// any
let any: any = true;
any = 1;
any = "str";

// void
const funcA = (): void => {
  const TEST = "Test";
};

// null
let null1: null = null;

// undefined
let undef: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = {
  id: 1,
  name: "hogehoge"
};
