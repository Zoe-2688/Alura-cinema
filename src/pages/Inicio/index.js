import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css"; 
import { useEffect, useState } from "react";

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Zoe-2688/Alura-cinema/videos")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched videos:", data); // Log para verificar los datos
                setVideos(data);
            })
            .catch(error => {
                console.error("Error fetching videos:", error);
            });
    }, []);

    return (
        <>
            <Banner img="home" color="#154580" />
            <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <Card {...video} key={video.id} />
                    ))
                ) : (
                    <p>No hay videos disponibles.</p>
                )}
            </section>
        </>
    );
}

export default Inicio;

