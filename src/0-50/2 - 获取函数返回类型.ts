import type { Equal, Expect } from '@type-challenges/utils'
/* _____________ 你的代码 _____________ */
// 对参数进行不确定类型赋予，使用 infer 推断 Return 最终进行返回
type MyReturnType<T> = T extends (...args: unknown[]) => infer IRturn ? IRturn : never

/* _____________ 测试用例 _____________ */
type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => (v ? 1 : 2)
const fn1 = (v: boolean, w: any) => (v ? 1 : 2)
