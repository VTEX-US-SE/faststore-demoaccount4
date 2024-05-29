import React from 'react'
import Image from 'next/image';
import styles from './styles/landing-hero-2.module.css'
import image3 from "./assets/images/about-us/image3.jpg";
import image4 from "./assets/images/about-us/image4.jpg";

export interface LandingHeroTwoColumnsProps {
    bigtitle: string;
    title: string;
    subtitle: string;
    image: string;
}


function LandingHeroTwoColums(props: LandingHeroTwoColumnsProps) {
    let image = image3;
    if(props.image == "image4")  image = image4;

    return (
        <div className={styles.container}>
            {(props.image === "image3") && (
                <h2 className={styles.bigtitle}>Let Yourself Shine</h2>
            )}
            <div className={`${styles.contentFlex} ${(props.image !== "image3") && `${styles.contentFlexInvert}`}`}>
                <div className={styles.image}>
                    <Image src={image} alt={props.title} />
                </div>
                <div className={styles.contentInfo}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.subtitle}>{props.subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default LandingHeroTwoColums