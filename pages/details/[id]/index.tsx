import Head from 'next/head'
import DetailsPage from 'components/Pages/DetailsPage'

const Detail = () => {
  return (
    <div>
      <Head>
        <title>Detail Posts</title>
        <meta name="description" content="Create Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DetailsPage />
    </div>
  )
}

export default Detail
