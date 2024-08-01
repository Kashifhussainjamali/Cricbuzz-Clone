import styles from "./nav3.module.css"

function Nav3(){
    return<nav nav class="navbar navbar-expand-lg " id={styles["main"]}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#" id={styles["current"]}>Current Matches <br /><div className={styles["div"]}></div></a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id={styles["text"]}>Current & Future Series</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id={styles["text"]}>Matches By Day</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id={styles["text"]}>Teams</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id={styles["text"]}>Series Archive</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}
export default Nav3