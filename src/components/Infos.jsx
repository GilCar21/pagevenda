import varinha1 from '../assets/varinha1.jpg'
import styled from 'styled-components'

const Section = styled.section`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: black;
    
    h2{
        font-size: 2rem;
        margin: 5rem 0 1.5rem;
    }

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 90vw;
        max-width: 1240px;
        margin-bottom: 4rem;

        @media only screen and (max-width: 900px){
            flex-direction: column;
        }
        .varinha{
            width: 50%;

            @media only screen and (max-width: 900px){
                width: 80%;
            }

            img{
                width: 100%;
                border-radius: 12px;
            }
        }
        .description{
            width: 50%;

            @media only screen and (max-width: 900px){
                width: 100%;
            }

            h3{
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
            p{
                font-size: 1.1rem;
                text-align: justify;
            }
            p + P{
                margin-top: 1rem ;
            }
        }
    }
`

export function Infos(){

    return(
        <Section>
            <h2>Informações sobre o produto</h2>
            <div className="content">
                <div className='varinha'>
                    <img src={varinha1} alt="" />
                </div>
                <div className='description'>
                    <h3>Descrição</h3>
                    
                    <p>Interruptor de pulverização: spray interruptor duplo, interruptor de alternância + interruptor de botão silencioso, quando o interruptor de alternância é fechado, o interruptor de botão de pressão não disparará, e quando o interruptor de alternância está aberto, o interruptor de botão de pressão irá disparar.</p>
                    <p>As vantagens do interruptor duplo são em primeiro lugar mais seguro e evitar toques acidentais, em segundo lugar, é mais conveniente, como materiais de consumo pode ser carregado com antecedência e o interruptor de alternância é desligado, e em terceiro lugar, é mais economia de energia, impedindo a pressão acidental do interruptor de botão e fazendo com que a bateria se esgote.</p>
                    <p>Especificações do produto: cerca de ha li comprimento 345 na parte mais fina 7 na parte mais grossa 30mm deng bu comprimento 410 na parte mais fina 7 na parte mais grossa 26mm caixa 436*73*38mm peso 280g volume 650g tubo de aço oco interno resina externa.</p>
                    <p>Precauções: você deve observar o ensino antes de usá-lo. Os menores devem usá-lo sob a supervisão de um guardião. Não atire em pessoas ou objetos inflamáveis.</p>
                    <p>Você não pode ver diretamente a situação na porta de lançamento com seus olhos. Reflexão dentro do espelho para ver o que # x27;s dentro do tubo. Não bata ou bata a varinha.</p>
                </div>
            </div>
        </Section>
    )
}