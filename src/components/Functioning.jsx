import styled from "styled-components"

import reliquias from '../assets/reliquias.png'
import reliquias2 from '../assets/reliquias2.png'

const Section = styled.section`
    background: #fff;
    color: black;
    padding: 4rem 0;
    text-align: center;
    h2{
        margin-bottom: 2rem;
    }
    .content{
        display: flex;
        align-items: center;
        gap: 2rem;
        width: 90vw;
        max-width: 1240px;
        margin: 0 auto;

        @media only screen and (max-width: 750px){
            flex-direction: column;
        }
        
        .text{
            width: 60%;
            text-align: justify;

            @media only screen and (max-width: 750px){
                width: 100%;
            }
            p{
                font-size: 1.1rem;
            }
            p + p{
                margin-top: 1rem;
            }
        }
        .image{
            width: 40%;

            @media only screen and (max-width: 750px){
                width: 75%;
            }
            img{
                width: 100%;
            }
        }
    }
    .beneficios{
        width: 90vw;
        max-width: 1240px;
        margin: 0 auto;
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        text-align: justify;
        gap: 2rem;

        @media only screen and (max-width: 900px){
            grid-template-columns: 1fr 1fr;
        }

        .card{
            display: flex;
            flex-direction: column;
            align-items: center;
            border: solid 1px #ccc;
            padding: 1rem;
            border-radius: 12px;

            img{
                width: 50px;
            }
    
            h3{
                margin: 1rem;
                color: #740001;
            }
        }
    }
`

export function Functioning() {

    return (
        <Section>
            <h2>Como usar a Varinha</h2>
            <div className="content">
                <div className="text">
                    <p>Varinha mágica, cantando o feitiço "incendio" (chamas quentes), toque no interruptor para atirar pequenas chamas. (Flame é um suporte mágico. veja nosso vídeo para efeitos específicos)</p>
                    <p>
                        Esta varinha wypas feita fora da resina etubulação de aço de alta qualidade, não-tóxico, insípido e excelente acabamento.
                    </p>
                    <p>
                        A varinha é embalada em uma caixa de varinha elegante, perfeita como um presente, e você será encantado por sua forma.
                    </p>
                    <p>
                        Proibir o uso de crianças, porque o efeito de chama será gerado durante o uso, manter longe de itens inflamáveis e explosivos e líquidos durante o uso.
                    </p>
                </div>
                <div className="image">
                    <img src={reliquias} alt="" />
                </div>
            </div>

            <div className="beneficios">
                <div className="card">
                    <img src={reliquias2} alt="" />
                    <h3>Uma aranha de brinde</h3>
                    <p>Você vai levar uma linda aranha de pelucia de brinde </p>
                </div>
                <div className="card">
                    <img src={reliquias2} alt="" />
                    <h3>Uma aranha de brinde</h3>
                    <p>Você vai levar uma linda aranha de pelucia de brinde </p>
                </div>
                <div className="card">
                    <img src={reliquias2} alt="" />
                    <h3>Uma aranha de brinde</h3>
                    <p>Você vai levar uma linda aranha de pelucia de brinde </p>
                </div>
                <div className="card">
                    <img src={reliquias2} alt="" />
                    <h3>Uma aranha de brinde</h3>
                    <p>Você vai levar uma linda aranha de pelucia de brinde hdshjs jhkjsa kjhaskd </p>
                </div>
            </div>
        </Section>
    )
}