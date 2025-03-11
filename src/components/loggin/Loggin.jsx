import {useNavigate} from "react-router-dom"
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Loggin.module.scss";

function Loggin() {

const navigate = useNavigate()  //Iniciando o hook useNavigate

const irParaReembolsos = () => {
  navigate("/reembolsos")  //Redirecionando para a página de reembolsos
}

  return (
    <main>
      <section className={styles.Capa}></section>

      <section className={styles.containerLogin}>
        <div className={styles.containerTitulo}>
          <img className={styles.logo} src={Logo} alt="Logo da wilson sons" />
          <h1>Boas vindas ao Novo Portal SISPAR</h1>
          <p>Sistema de Emissão de Boletos e Parcelamento</p>
        </div>

        <form action="">
          <input type="email" name="email" id="iemail" placeholder="Email" />
          <input type="password" name="password" id="ipassword" placeholder="Senha" />
          <a href=""> Esqueci minha senha </a>
          
          <div className={styles.buttonGroup}>
          <button className={styles.buttonEscuro} onClick={irParaReembolsos}> Entrar</button>
            <button className={styles.buttonClaro}>Criar conta</button>
          </div>
        </form>
      </section>
    </main>
  );
}
export default Loggin;
