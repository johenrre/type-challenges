// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

// ============= Your Code Here =============
// type MyReadonly<T> = {
//   readonly [key in (keyof T)]: T[key]
// }
