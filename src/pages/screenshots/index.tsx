import { useState } from 'react';
import styles from './screenshots.module.css';
import Layout from '@theme/Layout';

class Screenshot {
    src: string
    description: string
}

function CarouselSlide({ screenshot }: { screenshot: Screenshot }) {
    return (
        <div className={styles.carouselSlide}>
            <center>
                <img
                    src={screenshot.src}
                    alt={screenshot.src}
                    className={styles.carouselImage}
                />
                <p>
                    {screenshot.description}
                </p>
            </center>
        </div>
    );
}

function Carousel({ screenshots }: { screenshots: Screenshot[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.carouselContainer}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <button onClick={prevSlide} className={styles.carouselButton} style={{ fontSize: '1.5rem' }}>
                        &lt;
                    </button>

                    <CarouselSlide screenshot={screenshots[currentIndex]} />

                    <button onClick={nextSlide} className={styles.carouselButton} style={{ fontSize: '1.5rem' }}>
                        &gt;
                    </button>
                </div>

                <div className={styles.carouselDots}>
                    {screenshots.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Screenshots() {
    const screenshots: Screenshot[] = [
        {
            src: require('@site/static/img/screenshots/main_page.png').default,
            description: "The main page of a device showing basic information and the device's encryption capabilities."
        },
        {
            src: require('@site/static/img/screenshots/edit_ranges.png').default,
            description: "Editing the locking ranges on an Opal 2.0 compliant device."
        },
        {
            src: require('@site/static/img/screenshots/edit_permissions.png').default,
            description: "Giving users permissions to the shadow MBR and locking ranges."
        },
        {
            src: require('@site/static/img/screenshots/shadow_mbr.png').default,
            description: "Uploading a PBA image to the shadow MBR."
        },
    ];

    return (
        <Layout title={`Screenshots`} description="Description will go into a meta tag in <head />">
            <main>
                <Carousel screenshots={screenshots} />
            </main>
        </Layout>
    );
}