import style from "./Banner.module.css";

function Banner({ img, color }) {
    return (
        <div className={style.capa} style={{ backgroundImage: `url("/img/banner-${img}.png")` }}>
            <div className={style.gradient} style={{ background: `${color}` }}>

            </div>

        </div>
    )
}
export default Banner;