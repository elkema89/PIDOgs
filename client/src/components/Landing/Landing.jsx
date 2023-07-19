import { Link } from "react-router-dom";
import style from "../Landing/Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.overlay}></div>
      <div className={style.content}>
        <h1 className={style.title}>Bienvenidos a la pagina de perros</h1>
        <Link to="/home" className={style.link}>
          <button className={`${style.button} ${style.enterButton}`}>Entrar</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
