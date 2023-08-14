// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

// type MyPick<T, K in keyof T> = {
//   [P in K]: T[P]
// }
// type MyPick<T, K> = {
//   [P in (keyof T) & K]: T[P]
// }
type MyPick<obj, pickKey extends string> = {
  [key in keyof obj as (pickKey extends key ? key : never)] : obj[key]
}


// ============= Your Code Here =============
// type MyPick<T, K> = {
//   [P in (keyof T) as (K extends P ? P : never)]: T[P]
// }

// 这段代码中的 (keyof T) as (K extends P ? P : never) 是一个条件表达式，它在映射类型中进行类型过滤。条件表达式的作用是根据条件 (K extends P) 来决定属性名是否保留。
