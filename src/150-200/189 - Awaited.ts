// 第二层递归判断一直取 promise 的传递参数，直到最后一个不为 promise 的参数
type MyAwaited2<T> = T extends PromiseLike<infer U> ? MyAwaited2<U> : T

// 第一层判断是不是 promise
type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited2<U> : never

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type a = MyAwaited<X> // string
type a1 = MyAwaited<Y> // { field: number; }
type a2 = MyAwaited<Z> // string | number
type a3 = MyAwaited<Z1> // string | boolean
type a4 = MyAwaited<T> // number

export {}
