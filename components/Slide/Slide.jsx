import styles from './Slide.module.css'

export default function Slide({ image, url }) {
    const background = {
        backgroundImage: `url(${image})`,
    }
    const handleClick = () => window.open(url)
    return (
        <div className={styles.slide} style={background}>
            <button className={styles.button} onClick={handleClick}>Go to the website</button>
        </div>
    )
}