import styles from './Projects.module.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import RickAndMorty from '/RickAndMorty.png'
import Tykkera from '/Tykkera.png';
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
                <span>Top Projects</span>
                <Carousel {...carouselSettings}>
                    <Slide image={RickAndMorty} url={'https://tykkera.com'}/>
                    <Slide image={Tykkera} url={'https://tykkera.com'}/>
                </Carousel>
            </div>
        </>
    )
}