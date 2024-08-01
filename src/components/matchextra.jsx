import styles from "./matchextra.module.css"
function Extra(){
    return(<>
    <ul className={styles["ul"]}>
        <li className={styles["listitem"]}><a href="#">Live Score</a></li>
        <li className={styles["listitem"]}>|</li>
        <li className={styles["listitem"]}><a href="#">Scorecard</a></li>
        <li className={styles["listitem"]}>|</li>
        <li className={styles["listitem"]}><a href="#">Full Commentary</a></li>
        <li className={styles["listitem"]}>|</li>
        <li className={styles["listitem"]}><a href="#">News</a></li>
    </ul>
    </>)
}
export default Extra;