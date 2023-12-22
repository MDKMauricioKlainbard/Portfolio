import styles from './AboutMe.module.css'
import Gear from '/gear.png'

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <div className={styles.divText}>
                <p>
                    My name is <b>Mauricio Daniel Klainbard</b>; I'm from Argentina, Mendoza, and I'm 21 years old. I'm a student of
                    programming and engineering, passionate about logic and data handling—two areas that have shaped who I am today.
                </p>
                <p>
                    One of my strengths lies in teamwork. I pride myself on being an excellent team player, capable of fostering camaraderie
                    and optimism in the face of every challenge that arises within my group. I firmly believe that every problem has its solution;
                    it's just a matter of thinking calmly.
                </p>
                <p>
                    I approach each project with enthusiasm and commitment, aiming not only for efficient solutions but also to build a collaborative and positive
                    environment. I'm excited to continue learning and contribute to the world of software development.
                </p>
            </div>
            <div className={styles.gif}>
                <img src={Gear}/>
            </div>
        </div>
    )
}