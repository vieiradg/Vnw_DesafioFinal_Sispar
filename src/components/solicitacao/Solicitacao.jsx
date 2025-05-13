import React, { useState, useEffect } from 'react';
import Api from "../../services/Api.jsx";
import styles from "./Solicitacao.module.scss";

import NavBar from "../navbar/NavBar.jsx";
import Home from "../../assets/Dashboard/Vector (1).png";
import Seta from "../../assets/Dashboard/Vector.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Mais from "../../assets/Solicitacao/mais.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Check from "../../assets/Solicitacao/check.png";
import imgX from "../../assets/Solicitacao/x.png";

function Solicitacao() {

  const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
  const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
  const [data, setData] = useState(""); // Estado para o campo data
  const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
  const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
  const [ordemInterna, setorOrdemInterna] = useState(""); // Estado para o campo ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
  const [pep, setPep] = useState(""); // Estado para o campo pep
  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa

  const [dadosReembolso, setDadosReembolso] = useState([]); // Estado para armazenar os dados do reembolso

  const handleSubmit = () => {
    const objetoReembolso = {
      colaborador,
      empresa,
      nPrestacao,
      descricao,
      data,
      motivo,
      tipoReembolso,
      centroCusto,
      ordemInterna,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa,
    };
    setDadosReembolso(dadosReembolso.concat(objetoReembolso));
    limparCampos(); 
  }

  const limparCampos = () => {
    setColaborador(""),
    setEmpresa(""),
    setnPrestacao(""),
    setDescricao(""),
    setData(""),
    setMotivo(""),
    setTipoReembolso(""),
    setCentroCusto(""),
    setorOrdemInterna(""),
    setDivisao(""),
    setPep(""),
    setMoeda(""),
    setDistanciaKm(""),
    setValorKm("");
    setValorFaturado(""),
    setDespesa(""); // Limpa todos os campos após o envio
  };

  const [foiEnviado, setFoiEnviado] = useState(false); 
  // Estado para verificar se o formulário foi enviado

  const enviarParaAnalise = async () => { 
    // async espera a resposta do servidor
    try { 
      // enviamos os dados para a api
      // await = espera a resposta da api
      // dentro do api.post primeiro argumento é o caminho da rota, segundo argumento é o dado que queremos enviar
      const response = await Api.post("/refunds/new", dadosReembolso);
      console.log("Dados enviados com sucesso:", response);
      alert("Dados enviados com sucesso!");
      setFoiEnviado(true); 
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  }

  useEffect(() => {
    if (foiEnviado) {
      setDadosReembolso([]); // Limpa os dados após o envio
      setFoiEnviado(false); // Reseta o estado para que o useEffect não seja chamado novamente
      console.log("Formulário enviado com sucesso!");
    }
  }, [foiEnviado]); // O useEffect é chamado quando o estado foiEnviado muda

  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />

      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="Vetor de uma casinha" />
          <img src={Seta} alt="Vetor de uma setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="Vetor de uma setinha" />
          <p>Solicitação de Reembolsos</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form onSubmit={(evento) => evento.preventDefault()} className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input value={colaborador} onChange={(evento)=> setColaborador(evento.target.value)} type="text" name="" id="nome-completo" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input value={empresa} onChange={(evento) => setEmpresa(evento.target.value)} type="text" name="" id="empresa" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input value={nPrestacao} onChange={(evento) => setnPrestacao(evento.target.value)} type="text" name="" id="prestacao-contas" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea value={descricao} onChange={(evento) => setDescricao(evento.target.value)} name="" id="">
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <input value={data} onChange={(evento) => setData(evento.target.value)} type="date" name="" id="" />
              </div>

              <div className={styles.tipoDeDespesa}>
                <label htmlFor="">Tipo de Despesa</label>

                <select value={tipoReembolso} onChange={(evento) => setTipoReembolso(evento.target.value)} name="" id="">
                  <option value="Selecionar">Selecionar</option>
                  <option value="alimentacao"> Alimentação </option>
                  <option value="combustivel"> Combustível</option>
                  <option value="conducao"> Condução</option>
                  <option value="estacionamento"> Estacionamento</option>
                  <option value="viagemAdmin."> Viagem Admin.</option>
                  <option value="viagemOperacional"> Viagem Operacional</option>
                  <option value="eventosDeRepresentacao"> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="">Centro de Custo</label>

                <select value={centroCusto} onChange={(evento) => setCentroCusto(evento.target.value)} name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor="">Ord. Int.</label>
                <input value={ordemInterna} onChange={(evento) => setorOrdemInterna(evento.target.value)} type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="">Div.</label>
                <input value={divisao} onChange={(evento) => setDivisao(evento.target.value)} type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input value={pep} onChange={(evento) => setPep(evento.target.value)} type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="">Moeda</label>
                <select value={moeda} onChange={(evento) => setMoeda(evento.target.value)} name="" id="">
                  <option value="Selecionar">Selecionar</option>
                  <option value="BRL">BRL</option>
                  <option value="ARS">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="">Dist / Km</label>
                <input value={distanciaKm} onChange={(evento) => setDistanciaKm(evento.target.value)} type="number" name="" id="" />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="">Valor / Km</label>
                <input value={valorKm} onChange={(evento) => setValorKm(evento.target.value)} type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="">Valor Faturado</label>
                <input value={valorFaturado} onChange={(evento) => setValorFaturado(evento.target.value)} type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="">Despesa</label>
                <input value={despesa} onChange={(evento) => setDespesa(evento.target.value)} type="number" name="" id="" />
              </div>

              <div className={styles.botoes}>
                <button onClick={handleSubmit} className={styles.buttonEscuro}><img src={Mais} alt="Vetor de uma casinha" />Salvar</button>

                <button onClick={limparCampos} className={styles.buttonClaro}><img src={Deletar} alt="Vetor de uma casinha" /></button>
              </div>
            </div>
          </form>

          {/* Table é a tag principal que define a tabela */}
          {/* Thead é a tag que agrupa o cabeçalho */}
          {/* Tr é a linha da tabela */}
          {/* Th cabeçalho da tabela, cada coluna receberá um th -  */}
          {/* tBody agrupa o corpo da tabela, ou seja, a parte principal onde armazena os dados */}
          {/* Td representa uma célula onde cada dado é colocado */}

          <table>
            <thead>
              <tr>
                <th> </th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>
            
            <tbody>
              {dadosReembolso.map((item, index) => (
                <tr key={index}>
                  <td><img src={Lixeira} alt="ícone da lixeira" /></td>
                  <td>{item.colaborador}</td>
                  <td>{item.empresa}</td>
                  <td>{item.nPrestacao}</td>
                  <td>{item.data}</td>
                  <td> <img src={Motivo} alt="ícone do motivo" /></td>
                  <td>{item.tipoReembolso}</td>
                  <td>{item.centroCusto}</td>
                  <td>{item.ordemInterna}</td>
                  <td>{item.divisao}</td>
                  <td>{item.pep}</td>
                  <td>{item.moeda}</td>
                  <td>{item.distanciaKm}</td>
                  <td>{item.valorKm}</td>
                  <td>{item.valorFaturado}</td>
                  <td>{item.despesa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        <footer className={styles.containerFooter}>
          <div className={styles.inputFooterFaturado}>
            <label htmlFor="">Total Faturado</label>
            <input type="text" />
          </div>

          <div className={styles.inputFooterDespesa}>
            <label htmlFor="">Total Despesa</label>
            <input type="text" />
          </div>

          <div>
            <button onClick={enviarParaAnalise} className={styles.buttonCheck}>
              <img src={Check} alt="ícone de check" />
              <p>Enviar para Análise</p>
            </button>
          </div>

          <div>
            <button className={styles.buttonX}>
              <img src={imgX} alt="ícone de cancelar" />
              <p>Cancelar Solicitação</p>
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Solicitacao;
