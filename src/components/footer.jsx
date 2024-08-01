import styles from "./footer_1.module.css"

function Footer_1(){
    return(<>
    <div className={styles["main"]}>
    <div>
    <img src="logo1.png" alt="" />
    </div>
    <div>
    <table  class={styles["table"]}>
  <thead>
    <tr className={styles["tr"]}>
      <th className={styles["th"]}>MOBILE SITE & APPS</th>
      <th className={styles["th"]}>FOLLOW US</th>
      <th className={styles["th"]}>COMPANY</th>
    </tr>
  </thead>
  <tbody>
    <tr className={styles["tr"]}>
      <td className={styles["td"]}><img src="language.png" alt="" />m.cricbuzz</td>
      <td className={styles["td"]}><img src="fb.png" alt="" />facebook</td>
      <td className={styles["td"]}>Careers</td>
    </tr>
    <tr className={styles["tr"]}>
      <td className={styles["td"]}><img src="android.png" alt="" />Android</td>
      <td className={styles["td"]}><img src="tw.png" alt="" />twitter</td>
      <td className={styles["td"]}>Advertise</td>
    </tr>
    <tr className={styles["tr"]}>
     <td className={styles["td"]}><img src="apple.png" alt="" />IOS</td>
      <td className={styles["td"]}><img src="yt.png" alt="" />Youtube</td>
      <td className={styles["td"]}>terms & use</td>
    </tr>
    <tr className={styles["tr"]}>
     <td className={styles["td"]}></td>
     <td className={styles["td"]}><img src="p.png" alt="" />Pinterest</td>
      <td className={styles["td"]}>Cricbuzz TV Adds</td>
    </tr>
  </tbody>
</table>
    <p className={styles["last"]}>© 2024 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Time</p> 
    </div>
    </div>
    
    </>)
}
export default Footer_1;