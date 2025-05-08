import {useNavigate} from "react-router-dom"
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Loggin.module.scss";
import api from "../../services/Api.jsx";
import { useState } from "react";

function Loggin() {

const navigate = useNavigate()  //Iniciando o hook useNavigate

const irParaReembolsos = () => {
  navigate("/reembolsos")  //Redirecionando para a página de reembolsos
}

const [email, setEmail] = useState("") //Criando o estado para o email
const [senha, setSenha] = useState("") //Criando o estado para a senha

const fazerLogin = async (e) =>  {
  e.preventDefault() //Previnindo o comportamento padrão do formulário

  if (!email.trim() || !senha.trim()) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  try {
    const resposta = await api.post("/colaborador/login", { email, senha }) //Fazendo a requisição para a api
    console.log(resposta.data) //Exibindo a resposta da api no console
    navigate("/reembolsos"); 
  } catch (error) {
    console.log("Erro ao fazer loguin", error)
    alert("Erro ao fazer login, tente novamente mais tarde")
  }
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

        <form onSubmit={fazerLogin}>
          <input
            type="email"
            name="email"
            id="iemail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="ipassword"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <a href="">Esqueci minha senha</a>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.buttonEscuro}>
              Entrar
            </button>
            <button type="button" className={styles.buttonClaro}>
              Criar conta
            </button>
          </div>
        </form>

      </section>
    </main>
  );
}
export default Loggin;
