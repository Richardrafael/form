import styled from 'styled-components';

export const AreaForm = styled.div`
position: static;
float: right;
width: 80%;
height: 135vh;
background: ffff;


.titulo{
  font-weight: 400;
  text-align: center;
  font-style: normal;
  font-size: 20px;
  }
.section{

  display: flex ;
  align-items: center;
  flex-direction: column;
}

.conta_agua{
flex-direction: column;
margin: 1px 0px 0px;
}
#fornecimento,
#CNPJ,
#CPF,
#economias,
#condicao,
#VtAgua,
#multa,
#valortributos,
#concessionaria,
#documento,
#nome,
#consumo,
#Vlesgoto,
#jurosm,
#Vt,
#dataemi,
#proximaleitura,
#PConsumo,
#VtConsumo,
#taxa,
#datavencimento,
#TLigação,
#MediaConsumo,
#dataapre {
  height: 27px;
  width: 230px;
  border: none;
  border-radius: 5px;
  background-color: #e1e1e1;
  padding: 6px;
}

/* botão - cadastrar */
#upload,
#botao_cad {
  width: 150px;
  height: 30px;
  background-color: #1dd9b1;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 16px;
  cursor: pointer;
  // margin:10px auto;
}
#upload:hover,
#botao_cad:hover {
  background: #22334d;
  box-shadow: #22334d;
  text-shadow: none;
}

/* tabela do formulário */
.bt-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  gap:20px;
  // flex-direction : row;
}
#tab_cadastro {
  display: flow-root;
  justify-content: center;
}

fieldset {
  border: 0;
}

fieldset.grupo .campo {
  float:  left;
}
`;
