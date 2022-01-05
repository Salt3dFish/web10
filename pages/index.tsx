import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/layout'
import Display from '../components/VideoDisplay'



const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>10 Studio</title>
        <link rel="icon" href="/ico10.svg" />
      </Head>
      <h1>一零影像工作室</h1>
      <div>
        <h2>画廊</h2>
        <div className='gallery'>
          <Display vsrc='v1.mp4' />
          <Display vsrc='v2.mp4' />
        </div>
      </div>
      <style jsx>{`
        .gallery {
          display:flex;
          flex-wrap:wrap;
          justify-content: space-around;

        }
      `}</style>
    </Layout>
  )
}

export default Home
