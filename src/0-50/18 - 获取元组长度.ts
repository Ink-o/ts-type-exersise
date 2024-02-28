// 创建一个`Length`泛型，这个泛型接受一个只读的元组，返回这个元组的长度。

// T 继承 unkown[] 获得 length 属性，然后进行返回
type Length<T extends readonly unknown[]> = T['length']

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type a = Length<typeof tesla> // 4
type b = Length<typeof spaceX> // 5

export {}
