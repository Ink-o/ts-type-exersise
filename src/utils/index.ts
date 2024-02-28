// 判断 X Y 泛型是否相等
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

// 期望 T 为 true
type Expect<T extends true> = T

export type {
  Equal,
  Expect,
}
