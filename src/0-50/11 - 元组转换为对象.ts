/**
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.zh-CN.md
 */
import type { Equal, Expect } from '@type-challenges/utils'

type TupleToObject<T extends readonly any[]> = {
  // T[number] 可以获取元组中所有的实际值联合
  // in 可以对联合类型进行一一读取（仅限于 x | b 这种，[x, b] 是不行的），这样就可以使用实际值做 K 了
  [P in T[number]]: P
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const sym1 = Symbol(1)
const sym2 = Symbol(2)
const tupleSymbol = [sym1, sym2] as const
const tupleMix = [1, '2', 3, '4', sym1] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleSymbol>, { [sym1]: typeof sym1; [sym2]: typeof sym2 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4'; [sym1]: typeof sym1 }>>,
]
