import { useState } from 'react';
import { AppConteiner, BotaoAdd, BotaoDeletar, CardConteiner, CardLembrete, FormConteiner, FormConteudo, Input, SubTitulo, TextoLembrete, TituloForm, styleData } from './EstiloLembrete';
function Lembrete() {
    const [nomeLembrete, setNomeLembrete] = useState('');
    const [dataLembrete, setDataLembrete] = useState('');
    const [listaLembrete, setListaLembrete] = useState([]);

    function Add(e) {
        e.preventDefault();

        if (nomeLembrete.length > 0 && dataLembrete.length > 0) {
            const numeroId = Math.random();
            const lembrete = {
                nome: nomeLembrete,
                data: new Date(dataLembrete), // converte para objeto Date
                id: numeroId
              }              

            setListaLembrete([...listaLembrete, lembrete]);
            setNomeLembrete("");
            setDataLembrete("");
        } else {
            alert("Os campos devem estar preenchidos!");
        }
    }

    function Deletar(id) {
        const listaFiltrada = listaLembrete.filter((item) => item.id !== id);
        setListaLembrete(listaFiltrada);
    }

    function AlterarTexto(e) {
        setNomeLembrete(e.target.value);
    }

    function AlterarData(e) {
        setDataLembrete(e.target.value);
    }

    function SubmeterForm(e) {
        e.preventDefault();
    }

    // Função para agrupar os lembretes por data
    function AgruparLembretesPorData(lista) {
        const grupos = {};
    
        lista.forEach((lembrete) => {
            const data = new Date(lembrete.data);
            data.setDate(data.getDate() + 1); // Adiciona 1 dia à data
            const dia = data.getDate().toString().padStart(2, '0');
            const mes = (data.getMonth() + 1).toString().padStart(2, '0');
            const ano = data.getFullYear().toString();
    
            const dataFormatada = `${dia}/${mes}/${ano}`;
    
            if (!grupos[dataFormatada]) {
                grupos[dataFormatada] = [];
            }
    
            grupos[dataFormatada].push(lembrete);
        });
    
        return grupos;
    }
    
    

    const LembretesPorData = AgruparLembretesPorData(listaLembrete);

    return (
        <AppConteiner>
            <TituloForm>Novo Lembrete</TituloForm>
            <FormConteiner onSubmit={SubmeterForm}>
                <FormConteudo>
                    <Input type="text" placeholder="Nome do lembrete" onChange={AlterarTexto} value={nomeLembrete} />
                    <Input
                        type="date"
                        placeholder="Data do lembrete (no formato dd/mm/yyyy)"
                        onChange={AlterarData}
                        value={dataLembrete}
                    />
                    <div>
                        <BotaoAdd onClick={Add}>Adicionar</BotaoAdd>
                    </div>
                </FormConteudo>
            </FormConteiner>

            <SubTitulo>
  <h2>Lista de Lembretes &#x1F4CC;</h2>
</SubTitulo>
{/* Agora, vamos exibir os lembretes agrupados por data */}
{Object.keys(LembretesPorData).map((data) => (

  <div key={data}>
    <styleData><dataLembrete>{data}</dataLembrete></styleData>
    <CardConteiner>
      {LembretesPorData[data].map((lembrete) => (
        <CardLembrete key={lembrete.id}>
          <TextoLembrete>
            <p>{lembrete.hora}</p>
            <p>{lembrete.nome}</p>
          </TextoLembrete>
          <BotaoDeletar onClick={() => Deletar(lembrete.id)}>X</BotaoDeletar>
        </CardLembrete>
      ))}
    </CardConteiner>
  </div>
))}
</AppConteiner>
);
}
export default Lembrete;