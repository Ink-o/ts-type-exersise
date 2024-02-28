/**
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 */

// 可以用展开运算符将 T 的类型和 U 的类型合并
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]

type Result = Concat<[1], [2]> // expected to be [1, 2]

export {}
