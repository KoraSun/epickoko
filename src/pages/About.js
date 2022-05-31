import styles from "../styles/About.module.css"
export const About=()=>{
    return (
        <div className={styles.layout}>
            <p>Epic project With <strong> React</strong>,<strong> JavaScript</strong>,<strong> Mobx</strong>.Designed and build by Kongkong~</p>
            <p>See more projects on my 
                <a className={styles.link} href="https://github.com/KoraSun"><strong>GitHub</strong></a>
                </p>
            Other projects
            <ul>
                <li><a className={styles.link} href="https://korasun.github.io/Kwheels-website/index.html#/"><strong>KOKOUI</strong></a></li>
                <li><a  className={styles.link}href="https://korasun.github.io/koNote/"><strong>KoNote</strong></a></li>
                <li><a className={styles.link} href="https://korasun.github.io/qianduoduo-website/#/money">钱多多账本</a></li>
                <li><a className={styles.link} href="https://korasun.github.io/VisualizeProject/#/">公安可视化大屏</a></li>
                
            </ul>
        </div>
    )
}