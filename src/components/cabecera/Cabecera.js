import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css"
import logo from "./logo-alura.png"


function Cabecera() {
    return(
        <header className={styles.Cabecera}>
            <Link to="/">
            <section className={styles.logoContainer}>
                <img src={logo} alt="Logo Alura" /> <span>Cinema</span>
            </section>
            </Link>
        </header>
)
}

export default Cabecera;