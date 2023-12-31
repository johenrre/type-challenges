// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]


// ============= Your Code Here =============
type Diff<obj1, obj2> = {
  [key in keyof obj1 | keyof obj2 as key extends keyof obj1 ? (key extends keyof obj2 ? never : key) : key] : (
    key extends keyof obj2 ? obj2[key] : (
      key extends keyof obj1 ? obj1[key] : never
    )
  )
}
// type Diff<O, O1> = {
//   [K in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]:
//   K extends keyof O ? O[K] :
//   K extends keyof O1 ? O1[K] : never
// }

// type test = Exclude<keyof Foo, keyof Bar> | Exclude<keyof Bar, keyof Foo>
