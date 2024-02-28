/**
 * 实现内置的 `Exclude<T, U>` 类型，但不能直接使用它本身。
 * 从联合类型 `T` 中排除 `U` 中的类型，来构造一个新的类型。
 */

// extends 的作用
// 一种是实数 extends
// 另一种是像三元表达式一样使用 T 的遍历，称为分布式条件类型
// 这里会将 T 中的类型逐个拆分开来，依次去执行 extends U，这就达成了剔除的一个效果
type MyExclude<T, U> = T extends U ? never : T

type a = MyExclude<'a' | 'b' | 'c', 'a'> // "b" | "c"
type b = MyExclude<'a' | 'b' | 'c', 'a' | 'b'> // "c"

type a1 = 'a' | 'b' | 'c'
type a2 = 'a' | 'b'
type a3 = a1 extends a2 ? never : a1

export {};
