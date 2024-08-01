import styles from "./match_1.module.css"
import Extra from "./matchextra";

const Match_1=({match1,match1time,team1,team1score,team2,team2score,match1result})=>{
    return(<>
    <b className={styles["match1"]}>{match1}</b> Eliminator
    <p className={styles["match1time"]}>{match1time}</p>
    <div  className={styles["div"]}>
    <ul className={styles["team1"]}>
        <li>{team1}</li>
        <li className={styles["score"]}>{team1score}</li>
    </ul>
    <ul className={styles["team2"]}>
        <li>{team2}</li>
        <li className={styles["score"]}>{team2score}</li>
    </ul>
    <p className={styles["result"]}>{match1result}</p>
    <div className={styles["horizontal-line"]}></div>
    </div>
    <Extra></Extra>
    </>)

}
export default Match_1;