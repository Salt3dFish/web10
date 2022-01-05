import type { NextPage } from 'next'
import Display from '../components/VideoDisplay'

const Album = ({ text, vnames }: { text: string, vnames: string[] }) => {
  return (
    <div>
      <h2>
        {text}
      </h2>
      <div className='container'>
        {vnames.map(
          name => <Display vsrc={name} key={name} />
        )}
      </div>
      <style jsx>{`
        .container {
          display:flex;
          flex-wrap:wrap;
          justify-content:space-around;
          align-items:center;
        }
      `}</style>
    </div>
  )
}

const Gallery: NextPage = () => {
  const vns1 = ['v1.mp4', 'v2.mp4'];
  const vns2 = ['v3.mp4', 'v4.mp4'];


  return (
    <div className='container'>
      <div className='ab_container'>
        <Album text='A1' vnames={vns1} />
        <Album text='A2' vnames={vns2} />
      </div>
      <style jsx>{`
        ab_container {
          display:flex;
          flex-direction:column;
          
        }
      `}</style>
    </div>
  )
}

export default Gallery