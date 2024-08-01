import styles from "./buttons.module.css"

function Buttons(){
    return(<>
        <ul className={styles["main"]}>
            <li><button className={styles["button1"]}>International</button></li>
            <li><button className={styles["button"]}>League</button></li>
            <li><button className={styles["button"]}>Domestic</button></li>
            <li><button className={styles["button"]}>Women</button></li>
        </ul>
    </>)
}
export default Buttons;