import styles from "./match2.module.css"
import Extra from "./matchextra";

const Match_2=({match2,match2time,team11,team11score,team22,team22score,match2result})=>{
    return(<>
    <b className={styles["match1"]}>{match2}</b>   9th Match
    <p className={styles["match1time"]}>{match2time}</p>
    <div  className={styles["div"]}>
    <ul className={styles["team1"]}>
        <li>{team11}</li>
        <li className={styles["score"]}>{team11score}</li>
    </ul>
    <ul className={styles["team2"]}>
        <li>{team22}</li>
        <li className={styles["score"]}>{team22score}</li>
    </ul>
    <p className={styles["result"]}>{match2result}</p>
    <div className={styles["horizontal-line"]}></div>
    </div>
    <Extra></Extra>
    </>)

}
export default Match_2;