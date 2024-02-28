// 实现一个泛型 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。

import type { Equal, Expect } from '@type-challenges/utils'

// 直接枚举类型，对于引用类型的值，使用递归来进行 ReadOnly
type DeepReadonly<T> = {
  // 不能使用 xxx extends object 来判断 xxx 是否为对象类型，因为函数也是，但其不应该被深拷贝
  // 这里第 3 个测试用例无法通过
  // readonly [k in keyof T]: T[k] extends string | number | boolean | Function ? T[k] : DeepReadonly<T[k]>

  // 这里针对纯对象和数组来处理深克隆，其实还有 map，class，set，weakSet 之类的也需要进行判断
  readonly [k in keyof T]: T[k] extends Record<string, unknown> | unknown[]? DeepReadonly<T[k]> : T[k]
}

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>,
  Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}
type a = DeepReadonly<X1>
type X2 = { a: string } | { b: number }

type Expected1 = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}

type Expected2 = { readonly a: string } | { readonly b: number }

type X = {
  a: () => 22
  a1: Promise<string>
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly a1: Promise<string>
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
    }
  }
}
