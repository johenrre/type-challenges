// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type test1 = {
  key: 'cat'
  value: 'green'
}

type testExpect1 = {
  key: 'cat'
  value: 'green'
  home: boolean
}

type test2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
}

type testExpect2 = {
  key: 'dog' | undefined
  value: 'white'
  sun: true
  home: 1
}

type test3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
}

type testExpect3 = {
  key: 'cow'
  value: 'yellow'
  sun: false
  isMotherRussia: false | undefined
}

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<Equal<AppendToObject<test3, 'isMotherRussia', false | undefined>, testExpect3>>,
]


// ============= Your Code Here =============
// type AppendToObject<obj extends Object, key extends string, value> = {
//   [k in keyof (obj & Record<key, value>)]: (obj & Record<key, value>)[k]
// }
type AppendToObject<T extends Object, key extends string, value, obj = T & Record<key, value>> = {
  [k in keyof obj]: obj[k]
}
// type test = AppendToObject<test1, 'home', boolean>

// 对象合并用 &