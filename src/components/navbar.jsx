import styles from "./nav.module.css"

function NavBar(){
    return(<>
    <nav class="navbar navbar-expand-lg " id={styles["nav"]} >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="logo.png" alt="" className={styles["logo"]}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id={styles["navinner"]}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class=""  className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href="#">Live Score</a>
        </li>
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href="#">Schedula</a>
        </li>
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href="#">Archives</a>
        </li>
        <li class="nav-item dropdown" id={styles["nav-item"]}>
          <a class="nav-link dropdown-toggle" id={styles["nav-link"]} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News
          </a>
        </li>
        <li class="nav-item dropdown" id={styles["nav-item"]}>
          <a class="nav-link dropdown-toggle" id={styles["nav-link"]} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Series
          </a>
        </li>
        <li class="nav-item dropdown" id={styles["nav-item"]}>
          <a class="nav-link dropdown-toggle" id={styles["nav-link"]} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teams
          </a>
        </li>
        <li class="nav-item dropdown" id={styles["nav-item"]}>
          <a class="nav-link dropdown-toggle" id={styles["nav-link"]} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Videos
          </a>
        </li>
        <li class="nav-item dropdown" id={styles["nav-item"]}>
          <a class="nav-link dropdown-toggle" id={styles["nav-link"]} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rankings
          </a>
        </li><li class="nav-item dropdown" id={styles["nav-item"]}>
          <a class="nav-link dropdown-toggle" id={styles["nav-link"]} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><button className={`${styles["button"]}`}>Cricbuzz Plus</button></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><img src="icons.png" alt="" className={styles["logo"]}/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>)
}
export default NavBar;