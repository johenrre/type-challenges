// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type TrimLeft<s extends string> = s extends `${' ' | '\n' | '\t'}${infer other}` ? TrimLeft<other> : s
type TrimRight<s extends string> = s extends `${infer other}${' ' | '\n' | '\t'}` ? TrimRight<other> : s
type Trim<S extends string> = TrimLeft<TrimRight<S>>
