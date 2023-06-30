import {AuthChecker} from 'type-graphql'
import {Context} from 'src/context'

export const authChecker: AuthChecker<Context> = async (resolverData) => {
  const {context} = resolverData
  const {jwt, requestInfo} = context

  if (!requestInfo.jwtToken) {
    return false
  }

  const decodedData = await jwt.verify(requestInfo.jwtToken)
  if (!decodedData || typeof decodedData !== 'object') {
    return false
  }

  context.user = {
    ...(decodedData as any),
  }

  return true
}
