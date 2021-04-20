import Head from 'next/head'
import axios from 'axios';

const fetchData = async () => await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  .then(res => ({
    error: false,
    posts: res.data,
  }))
  .catch(() => ({
      error: true,
      posts: null,
    }),
  );

function Posts({ posts, error }) {
  return (
    <div>
      <Head>
        <title>getServerSideProps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>getServerSideProps test</h1>
        {error && <div>There was an error.</div>}
        {!error && posts && (
          <ul>
            {posts.map((post, key) => (
              <li key={key}>{post.id} - {post.title}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await fetchData();
  return {
    props: data,
  };
}

export default Posts