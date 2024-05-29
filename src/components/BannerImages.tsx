import React from 'react'
import Image from 'next/image';
import styles from './styles/banner-images.module.css'
import image1 from "./assets/images/banner-images/image1.gif";
import image2 from "./assets/images/banner-images/image2.jpg";

export interface BannerImagesProps {
    link: string;
}

function BannerImages(props: BannerImagesProps) {

  return (
    <div className={styles.container}>
        <a href={props.link} title="Go to the Offer">
            <Image className={styles.imageFront} src={image1} alt='' />
            <Image className={styles.imageBackground} src={image2} alt='' />
        </a>
    </div>
  )
}

export default BannerImages