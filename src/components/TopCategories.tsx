import React from 'react'
import Image from 'next/image';
import styles from './styles/top-categories.module.css'
import image1 from "./assets/images/top-categories/image1.jpg";
import image2 from "./assets/images/top-categories/image2.jpg";
import image3 from "./assets/images/top-categories/image3.jpg";
import image4 from "./assets/images/top-categories/image4.jpg";
import image5 from "./assets/images/top-categories/image5.jpg";
import image6 from "./assets/images/top-categories/image6.jpg";
import image7 from "./assets/images/top-categories/image7.jpg";
import image8 from "./assets/images/top-categories/image8.jpg";
import image9 from "./assets/images/top-categories/image9.jpg";
import image10 from "./assets/images/top-categories/image10.jpg";
import image11 from "./assets/images/top-categories/image11.jpg";
import image12 from "./assets/images/top-categories/image12.jpg";
import image13 from "./assets/images/top-categories/image13.jpg";
import image14 from "./assets/images/top-categories/image14.jpg";

export interface TopCategoriesProps {
  title: string;
}

const categoriesList = [
    {
      id: 1,
      src: image1,
      name: "Chandeliers",
    },
    {
      id: 2,
      src: image2,
      name: "Pendants",
    },
    {
      id: 3,
      src: image3,
      name: "Close to Ceiling",
    },
    {
      id: 4,
      src: image4,
      name: "Ceiling Fans",
    },
    {
      id: 5,
      src: image5,
      name: "Outdoor",
    },
    {
      id: 6,
      src: image6,
      name: "Mirrors",
    },
    {
      id: 7,
      src: image7,
      name: "Fountains",
    },
    {
      id: 8,
      src: image8,
      name: "Table Lamps",
    },
    {
      id: 9,
      src: image9,
      name: "Floor Lamps",
    },
    {
      id: 10,
      src: image10,
      name: "Bathroom Lighting",
    },
    {
      id: 11,
      src: image11,
      name: "Sconces",
    },
    {
      id: 12,
      src: image12,
      name: "Sculptures",
    },
    {
      id: 13,
      src: image13,
      name: "Wall Art",
    },
    {
      id: 14,
      src: image14,
      name: "Furniture",
    },
  ];

function TopCategories(props: TopCategoriesProps) {

  return (
    <div className={styles.containerCategories}>
      <div className={styles.containerCategoriesContent}>
        <h1 className={styles.containerCategoriesTitle}>{ props.title }</h1>
        <ul className={styles.containerContentList}>
        {categoriesList.map((category):any => (
            <li key={category.id} className={styles.categoryItemList}>
                <a href="#" title="Go to category page" className={styles.categoryItemListlink}>
                    <Image className={styles.categoryImage} src={category?.src} alt={`Go to ${category.name}`} />
                    <span className={styles.categoryName}>{category.name}</span>
                </a>
            </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default TopCategories