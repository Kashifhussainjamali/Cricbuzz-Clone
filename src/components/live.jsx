import styles from "./live.module.css"
function Live(){
    return(<>
    <h3 className={styles["main"]}>Live Cricket Score</h3>
    <ul className={styles["names"]}>
        <li className={styles["data"]}>Live</li>
        <li className={styles["data1"]}>Recent <div className={styles["div"]}></div></li>
        <li className={styles["data"]}>Upcoming</li>
    </ul>
    </>)
}
export default Live;