import styles from "./match_1.module.css"
import Extra from "./matchextra";

const Match_3=({match3,match3time,team111,team111score,team222,team222score,match3result})=>{
    return(<>
    <b className={styles["match1"]}>{match3}</b> Eliminator
    <p className={styles["match1time"]}>{match3time}</p>
    <div  className={styles["div"]}>
    <ul className={styles["team1"]}>
        <li>{team111}</li>
        <li className={styles["score"]}>{team111score}</li>
    </ul>
    <ul className={styles["team2"]}>
        <li>{team222}</li>
        <li className={styles["score"]}>{team222score}</li>
    </ul>
    <p className={styles["result"]}>{match3result}</p>
    <div className={styles["horizontal-line"]}></div>
    </div>
    <Extra></Extra>
    </>)

}
export default Match_3;