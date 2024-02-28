/*
  10 - 元组转合集
  -------
  by Anthony Fu (@antfu) #中等 #infer #tuple #union

  ### 题目

  实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。

  例如

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  > 在 Github 上查看：https://tsch.js.org/10/zh-CN
*/
import type { Equal, Expect } from '@type-challenges/utils'

// 方法一：直接获取 number 的索引，因为元组都是 number 的索引，获取到的值就是联合类型
// type TupleToUnion<T extends unknown[]> = T[number]
// 方法二：推断 T 的数组类型，然后进行推断 Array 的类型
type TupleToUnion<T> = T extends Array<infer IArr> ? IArr : never

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
