import React from 'react'
import styles from './styles/get-inspired.module.css'


function GetInspired() {

  return (
    <div className={styles.containerCategories}>
      <div className={styles.containerCategoriesContent}>
        <h3 className={styles.containerCategoriesTitle}>Get Inspired</h3>
        <ul className={styles.containerContentList}>
            <li className={styles.socialItemList}>
                <a href="https://www.lampsplus.com/social/instagram/" title="Go to Instagram Page"  className={styles.socialItemListlink}>
                    <span className={styles.instagram}></span>
                </a>
            </li>
            <li className={styles.socialItemList}>
                <a href="https://ar.pinterest.com/lampsplus/" title="Go to Pinterest page"  className={styles.socialItemListlink}>
                    <span className={styles.pinterest}></span>
                </a>
            </li>
            <li className={styles.socialItemList}>
                <a href="https://www.youtube.com/LampsPlus" title="Go to social media"  className={styles.socialItemListlink}>
                    <span className={styles.youtube}></span>
                </a>
            </li>
            <li className={styles.socialItemList}>
                <a href="https://www.facebook.com/lampsplus" title="Go to social media"  className={styles.socialItemListlink}>
                    <span className={styles.facebook}></span>
                </a>
            </li>
            <li className={styles.socialItemList}>
                <a href="https://x.com/lampsplus" title="Go to social media"  className={styles.socialItemListlink}>
                    <span className={styles.twitter}></span>
                </a>
            </li>
            <li className={styles.socialItemList}>
                <a href="https://www.linkedin.com/company/lamps-plus/" title="Go to social media"  className={styles.socialItemListlink}>
                    <span className={styles.linkedin}></span>
                </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default GetInspired