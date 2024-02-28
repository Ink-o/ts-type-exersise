// 实现一个泛型`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。

// 类型 `K` 指定 `T` 中要被设置为只读 (readonly) 的属性。如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。

/* _____________ 测试用例 _____________ */
import type { Alike, Expect } from '@type-challenges/utils'

// 先从 T 中排除掉 K，然后再用 ReadOnly 来进行合并（如果 K 没传的话，则会默认排除掉）
// & 运算符，后面只会将前面漏缺的只读类型给补上去
type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<T>

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description' >, Expected>>,
]

// @ts-expect-error
type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}
