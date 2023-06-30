import {ExpressContextFunctionArgument} from '@apollo/server/express4'

export type CreateContext<Options, Context> = (
  options?: Options,
) => (
  expressContext: ExpressContextFunctionArgument,
) => Context | Promise<Context>
