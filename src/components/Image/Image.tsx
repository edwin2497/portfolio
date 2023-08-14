import { ReactElement } from 'react'
import { LogoProps } from './Image.model'
import styles from './Styles/Image.module.css'

export const Image = ({
  src,
  alt,
  width,
  height,
  style,
}: LogoProps): ReactElement => {
  return (
    <picture className={styles.picture}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.logo}
        style={style}
      />
    </picture>
  )
}
