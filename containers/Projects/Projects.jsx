import styles from './Projects.module.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import RickAndMorty from '/RickAndMorty.png'
import Slide from '../../components/Slide/Slide'

export default function Projects() {
    const carouselSettings = {
        showArrows: true,
        transitionTime: 500,
        autoPlay: true,
        infiniteLoop: true,
        showThumbs: false,
        emulateTouch: true,
        showIndicators: true,
        showStatus: false,
        stopOnHover: true,
        interval: 5000
    }
    return (
        <>
            <div className={styles.carouselContainer}>
                <span>Top 3 Projects</span>
                <Carousel {...carouselSettings}>
                    <Slide image={RickAndMorty} url={'https://tykkera.com'}/>
                </Carousel>
            </div>
        </>
    )
}