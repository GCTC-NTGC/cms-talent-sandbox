import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

function Users({ users, error }) {
  return (
    <div>
      <Head>
        <title>GraphQL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>GraphQL test</h1>
        {error && <div>There was an error.</div>}
        {!error && users && (
          <ul>
            {users.map((user, key) => (
              <li key={key}>{user.id} - {user.firstName} {user.lastName}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: process.env.GRAPHQL_URI,
        cache: new InMemoryCache()
    });
    const { data } = await client.query({
        query: gql`
            query {
                users {
                    id
                    firstName
                    lastName
                }
            }
        `
    });
    return {
      props: {
        users: data.users
      }
    }
}

export default Users