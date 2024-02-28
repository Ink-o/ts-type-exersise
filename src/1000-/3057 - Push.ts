// 在类型系统里实现通用的 ```Array.push``` 。

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// 直接使用解构即可
type Push<T extends unknown[], U> = [...T, U]

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]
