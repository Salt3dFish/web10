
const Display = ({ vsrc }: { vsrc: string }) => {
  return (
    <div className='video'>
      <video src={`/gallery/${vsrc}`} controls>
        升级下你的b浏览器吧求你了
      </video>
      <style jsx>{`
        div{
          padding:15px 15px 15px 15px;
          background-color:aliceblue;
          margin:10px 10px 10px 10px;
        }
        div:hover{
          background:rgb(0, 183, 255);
        }
      `}</style>
    </div>
  )
}

export default Display