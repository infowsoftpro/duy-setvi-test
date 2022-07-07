import Head from 'next/head'
import CreatePage from 'components/Pages/CreatePage'

const Create = () => {
  return (
    <div>
      <Head>
        <title>Create Posts</title>
        <meta name="description" content="Create Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreatePage />
    </div>
  )
}

export default Create
