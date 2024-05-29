import React from 'react'
import Image from 'next/image';
import styles from './styles/brands-line.module.css'
import logo1 from "./assets/images/brands-line/logo1.jpg";
import logo2 from "./assets/images/brands-line/logo2.jpg";
import logo3 from "./assets/images/brands-line/logo3.jpg";
import logo4 from "./assets/images/brands-line/logo4.jpg";
import logo5 from "./assets/images/brands-line/logo5.jpg";
import logo6 from "./assets/images/brands-line/logo6.jpg";



function CategoriesOffers() {

  return (
    <div className={styles.container}>
      <ul className={styles.containerContent}>
            <li className={styles.itemList}>
                <a href="#" title="Go to brand page" className={styles.itemListlink}>
                    <Image className={styles.image} src={logo1} alt='Go to Brand' />
                </a>
            </li>
            <li className={styles.itemList}>
                <a href="#" title="Go to brand page" className={styles.itemListlink}>
                    <Image className={styles.image} src={logo2} alt='Go to Brand' />
                </a>
            </li>
            <li className={styles.itemList}>
                <a href="#" title="Go to brand page" className={styles.itemListlink}>
                    <Image className={styles.image} src={logo3} alt='Go to Brand' />
                </a>
            </li>
            <li className={styles.itemList}>
                <a href="#" title="Go to brand page" className={styles.itemListlink}>
                    <Image className={styles.image} src={logo4} alt='Go to Brand' />
                </a>
            </li>
            <li className={styles.itemList}>
                <a href="#" title="Go to brand page" className={styles.itemListlink}>
                    <Image className={styles.image} src={logo5} alt='Go to Brand' />
                </a>
            </li>
            <li className={styles.itemList}>
                <a href="#" title="Go to brand page" className={styles.itemListlink}>
                    <Image className={styles.image} src={logo6} alt='Go to Brand' />
                </a>
            </li>
      </ul>
    </div>
  )
}

export default CategoriesOffers