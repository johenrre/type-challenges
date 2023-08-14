// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>,
]


// ============= Your Code Here =============
// type Merge<A extends object, B extends object> = {
//   [K in keyof A | keyof B]: K extends keyof B ? B[K] : (
//     K extends keyof A ? A[K] : never
//   )
// }
type Merge<obj1 extends object, obj2 extends object> = {
  [key in keyof obj1 | keyof obj2]: key extends keyof obj2 ? obj2[key]: (
    key extends keyof obj1 ? obj1[key] : never
  )
}

type test = Merge<Foo, Bar>