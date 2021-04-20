import Head from 'next/head'

function Home({ users }) {
  return (
    <div>
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>getStaticProps test</h1>
        <ol>
        { users && users.map((user, key) => {
          return <li key={key}>{user.name}</li>;
        })}
        </ol>
      </main>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const users = await res.json()

  if (!users) {
    return {
      notFound: true,
    }
  }
  return {
    props: { users },
  }
}

export default Home