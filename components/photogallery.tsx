import style from './photogallery.module.css'


const PhotoGallery = ({ title, imgs }: { title: string, imgs: string[] }) => {
  return (
    <div className={style.container}>
      <div className={style.gallerySection}>
        <div className={style.innerWidth}>
          <h2>{title}</h2>
          <div className={style.border}></div>
          <div className={style.gallery}>
            {imgs.map(img =>
              <a className={style.image} key={img}>
                <img src={img} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery;