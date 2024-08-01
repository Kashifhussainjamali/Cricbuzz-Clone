import styles from "./feature.module.css"
const Featured=({pics})=>{
    return(<>
    <h5 className={styles["text"]}>FEATURED VIDEOS</h5>
    <div className={styles["pics"]}>
    {pics.map((pic)=> <img src={pic} alt="" className={styles["img1"]}/> )}
    </div>

    <div className={styles["div"]}></div>
    <button className={styles["more"]}>MORE VIDEOS</button>
    </>)
} 
export default Featured;