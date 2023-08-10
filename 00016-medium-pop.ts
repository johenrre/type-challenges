// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]


// ============= Your Code Here =============
// type Pop<T extends any[]> = T extends [...infer other, infer last] ? other : []
type Pop<T extends any[]> = T extends [] ? [] : T extends [...infer P, infer K] ? P : never
