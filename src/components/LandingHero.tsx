import React from 'react'
import Image from 'next/image';
import styles from './styles/landing-hero.module.css'
import image1 from "./assets/images/about-us/image1.jpg";
import image2 from "./assets/images/about-us/image2.jpg";

export interface LandingHeroProps {
    title: string;
    subtitle: string;
    image: string;
}


function LandingHero(props: LandingHeroProps) {
    let image = image1;

    if(props.image == "image2")  image = image2;

    return (
        <div className={styles.container}>
            <div className={styles.contentInfo}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.subtitle}>{props.subtitle}</p>
                {(props.image === "image1") && (
                    <a href="#" title="Go to video" className={styles.button}>Watch Our Video: About Us</a>
                )}
            </div>
            <div className={styles.image}>
                <Image src={image} alt={props.title} />
            </div>
        </div>
    )
}

export default LandingHero