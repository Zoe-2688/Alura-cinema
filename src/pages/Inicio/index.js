
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css"; // Corrige la importación del estilo
import Videos from "data/db.json";

function Inicio() {
    return (
        <>
            
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>
            <section className={styles.container}>
            {Videos.map((video) => {
                return <Card {...video} key={video.id} />
            })}
            </section>
        </>
    );
}

export default Inicio;
