import styled from "styled-components";
import tela from '../assets/tela1.png'
const Section = styled.section`
    ${props => {
        return `background: url(${tela});`
    }}
    background-size: cover;
    background-attachment: fixed;
    background-position: 75%;
    @media only screen and (max-width: 900px){
        background-size: auto;
    }

    .filter{
    background: rgba(0,0,0,.4);
    background-image:linear-gradient(0deg, rgba(0,0,0,.8) 0, transparent 60%, rgba(0,0,0,.8));
    }

    .content{
        width: 90vw;
        max-width: 1240px;
        margin: 0 auto;
        padding: 4rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    h2{
        margin-bottom: 1rem;
    }
    .price{
        display: flex;
        gap: 1rem;
        margin-top: .5rem;

        @media only screen and (max-width: 750px){
            flex-direction: column;
        }
        .priceLost{
            text-decoration: line-through;
            color: #ccc;
        }

        button{
            background: blueviolet;
            color: white;
            padding: 1rem 1.5rem;
            font-size: 1.1rem;
        
            border: solid 1px black;
            border-radius: 8px;
            margin: .25rem 0;
        }
        input{
            margin-top: .5rem;
            margin-right: .5rem;
        }
    }
`

export function Shell() {

    return (
        <Section>
            <div className="filter">
                <div className="content">
                    <h2>Se você agir rápido, garante acesso à todo conhecimento necessário para transformar o seu conhecimento em dinheiro.</h2>
                    <div className="price">
                        <div>
                            <p className="priceLost">De: R$ 210,00</p>
                            <h2>Por: R$ 119,90 </h2>

                            <span>oferta por tempo limitado <br /></span>

                        </div>
                        <div>
                            <button>Comece agora sua jornada</button>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <span>incluido pacote de auxilio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}