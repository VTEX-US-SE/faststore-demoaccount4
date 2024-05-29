import React from 'react'
import Image from 'next/image';
import styles from './styles/categories-offers.module.css'
import image1 from "./assets/images/categories-offers/image1.jpg";
import image2 from "./assets/images/categories-offers/image2.jpg";
import image3 from "./assets/images/categories-offers/image3.jpg";


const categoriesList = [
    {
      id: 1,
      src: image1,
      name: "OUTDOOR LIGHTING",
    },
    {
      id: 2,
      src: image2,
      name: "BATHROOM LIGHTING",
    },
    {
      id: 3,
      src: image3,
      name: "CEILING LIGHTS",
    }
]

function CategoriesOffers() {

  return (
    <div className={styles.containerCategoriesOffers}>
      <ul className={styles.containerContentCategoriesOffers}>
        {categoriesList.map((category):any => (
            <li key={category.id} className={styles.categoryOffersItemList}>
                <a href="#" title="Go to category page" className={styles.categoryOffersItemListlink}>
                    <div className={styles.categoryOffersContentImage}>
                        <Image className={styles.categoryOffersImage} src={category?.src} alt={`Go to ${category.name}`} />
                    </div>
                    <span className={styles.categoryOffersName}>{`${category.name} >`}</span>
                    <p className={styles.categoryOffersText}>Up to 50% off</p>
                </a>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesOffers