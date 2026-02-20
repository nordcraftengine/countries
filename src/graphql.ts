import { createYoga } from 'graphql-yoga'

import { schema } from './schema'

export const yoga = createYoga({
  schema,
  batching: true,
  graphqlEndpoint: '/',
})

export default {
  fetch: yoga.fetch,
}
