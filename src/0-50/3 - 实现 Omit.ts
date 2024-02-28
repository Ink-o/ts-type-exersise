//   不使用 `Omit` 实现 TypeScript 的 `Omit<T, K>` 泛型。
// `Omit` 会创建一个省略 `K` 中字段的 `T` 对象。

import type { Equal, Expect } from '@type-challenges/utils'

// 从 T 中排除 U
type MyExclude<T, U> = T extends U ? never : T
type MyOmit<T, K> = {
  // 遍历排除后的 T，然后对类型进行赋值
  [k in MyExclude<keyof T, K>]: T[k]
}

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}
