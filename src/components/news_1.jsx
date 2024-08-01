import styles from "./news_1.module.css"
const News_1=({news})=>{
    return(<>
    <h5 className={styles["news"]}>{news}</h5>
    </>)
}
export default News_1;