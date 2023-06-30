import {type ContextFunction as _ContextFunction} from '@apollo/server'

import {ExpressContextFunctionArgument} from '@apollo/server/express4'

export type ContextFunction<Context> = _ContextFunction<
  [ExpressContextFunctionArgument],
  Context
>
