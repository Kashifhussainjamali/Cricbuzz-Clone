import styles from "./nav2.module.css"
const Nav2=({matche1})=>{

    return<nav class="navbar navbar-expand-lg " id={styles["main"]} >
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id={styles["mtch"]}>MATCHES</a>
        </li>

        <li className={styles["matches"]}>
          {matche1.map((matche)=><a class="nav-link active" aria-current="page" href="#" className={styles["matces_data"]}>{matche }</a>)}  
        </li>

       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id={styles["all"]}>
            All
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
}
export default Nav2;