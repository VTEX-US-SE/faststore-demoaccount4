import React from 'react'
import Image from 'next/image';
import styles from './styles/featured-lighting.module.css'
import image1 from "./assets/images/featured-lighting/image1.jpg";
import image2 from "./assets/images/featured-lighting/image2.jpg";
import logo1 from "./assets/images/featured-lighting/logo1.gif";
import logo2 from "./assets/images/featured-lighting/logo2.png";


const featuredLighthingList = [
    {
      id: 1,
      src: image1,
      name: "OUTDOOR LIGHTING",
      description: "The new look of excellence.",
      logo: logo1
    },
    {
      id: 2,
      src: image2,
      name: "BATHROOM LIGHTING",
      description: "Classic Stiffel designs exclusive to Lamps Plus.",
      logo: logo2
    },
]

function FeaturedLighthing() {

  return (
    <div className={styles.container}>
      <ul className={styles.containerContent}>
        {featuredLighthingList.map((item):any => (
            <li key={item.id} className={styles.ItemList}>
                <a href="#" title="Go to item page" className={styles.ItemListlink}>
                    <div className={styles.ContentImage}>
                        <Image className={styles.Image} src={item?.src} alt={`Go to ${item.name}`} />
                    </div>
                    <span className={styles.Name}>{`${item.name} >`}</span>
                    <p className={styles.Text}>{item.description}</p>
                    <Image className={styles.logo} src={item?.logo} alt={`Go to ${item.name}`} />
                </a>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedLighthing