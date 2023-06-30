import {ExpressContextFunctionArgument} from '@apollo/server/express4'
import {createJwt, JwtContext} from './jwt'
import {createRequestInfo, RequestInfoContext} from './request-info'
import {ContextFunction} from 'src/types'

export interface Context<
  User extends Record<string, any> = Record<string, any>,
> {
  jwt: JwtContext
  requestInfo: RequestInfoContext
  user?: User
}

export interface CreateContextFunctionOptions {
  jwt: {
    key: string
  }
}

export const createContextFunction = (
  options: CreateContextFunctionOptions,
): ContextFunction<Context> => {
  const jwtFactory = createJwt(options.jwt.key)
  const requestInfo = createRequestInfo()
  return async (
    expressContext: ExpressContextFunctionArgument,
  ): Promise<Context> => {
    return {
      jwt: await jwtFactory(expressContext),
      requestInfo: await requestInfo(expressContext),
    }
  }
}
