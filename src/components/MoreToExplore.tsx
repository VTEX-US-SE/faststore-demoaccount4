import React from 'react'
import Image from 'next/image';
import styles from './styles/more-to-explore.module.css'
import image1 from "./assets/images/more-to-explore/icon1.svg";
import image2 from "./assets/images/more-to-explore/icon2.svg";
import image3 from "./assets/images/more-to-explore/icon3.svg";
import image4 from "./assets/images/more-to-explore/icon4.svg";
import image5 from "./assets/images/more-to-explore/icon5.svg";

export interface MoreToExploreProps {
  title: string;
}

const MoreToExploreList = [
    {
      id: 1,
      src: image1,
      name: "Press Room",
    },
    {
      id: 2,
      src: image2,
      name: "Lamps Plus Reviews",
    },
    {
      id: 3,
      src: image3,
      name: "Charity Work",
    },
    {
      id: 4,
      src: image4,
      name: "Partner With Us",
    },
    {
      id: 5,
      src: image5,
      name: "Careers We're Hiring",
    }
  ];

function MoreToExplore(props: MoreToExploreProps) {

  return (
    <div className={styles.containerCategories}>
      <div className={styles.containerCategoriesContent}>
        <h1 className={styles.containerCategoriesTitle}>{ props.title }</h1>
        <ul className={styles.containerContentList}>
        {MoreToExploreList.map((category):any => (
            <li key={category.id} className={styles.categoryItemList}>
                <a href="#" title={`Go to ${category.name}`} className={styles.categoryItemListlink}>
                    <div className={styles.categoryItemListImage}>
                        <Image className={styles.categoryImage} src={category?.src} alt={`Go to ${category.name}`} />
                    </div>
                    <span className={styles.categoryName}>{category.name}</span>
                </a>
            </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default MoreToExplore