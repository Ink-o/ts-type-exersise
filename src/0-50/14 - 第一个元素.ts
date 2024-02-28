// 实现一个`First<T>`泛型，它接受一个数组`T`并返回它的第一个元素的类型。

// 方法1：直接判断 T 是不是空数组
// type First<T extends any[]> = T extends [] ? never : T[0]
// 方法2：判断 T 的长度
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 方法3：判断数组至少有一个元素
type First<T extends any[]> = T extends [infer a, ...infer rest] ? T[0] : never

type a1 = First<[3, 2, 1]> // 3
type a2 = First<[() => 123, { a: string }]> // () => 123
type a3 = First<[]> // never
type a4 = First<[undefined]> // undefined

export {}
