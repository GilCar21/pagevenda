import styled from "styled-components"
import logo from "../assets/houses.jpg"
import tela from '../assets/tela1.png'

const Section = styled.section`
    ${props => {
        return `background: url(${tela});`
    }}
    background-size: cover;
    background-attachment: fixed;
    background-position: 75%;
    .filter{
    background: rgba(0,0,0,.4);
    background-image:linear-gradient(0deg, rgba(0,0,0,.8) 0, transparent 60%, rgba(0,0,0,.8));
    }

    .container{
        width: 90vw;
        max-width: 1240px;
        margin: 0 auto ;
        padding: 3rem 0 6rem;
    }


    .logo{
        width: 300px;
        margin-bottom: 1rem;
    }

    .content{
        display: flex;
        align-items: center;
        gap: 2rem;

        @media only screen and (max-width: 900px){
            flex-direction: column;
        }

        .text{
            width: 50%;

            @media only screen and (max-width: 900px){
                width: 100%;
            }
            span{
                color: blueviolet;
                margin-bottom: .75rem;
            }
            h1{
                font-size: 2.5rem;
                margin-bottom: .5rem;
            }
            p{
                font-size: 1.2rem;
                margin-bottom: .5rem;
            }

            .price{

                margin-top: .5rem;
                .priceLost{
                    text-decoration: line-through;
                    color: #ccc;
                }

                button{
                    background: blueviolet;
                    color: #fff;
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
        }
        .video{
            width: 50%;
            margin: 0 auto;

            @media only screen and (max-width: 900px){
                width: 80%;
            }
            video{
                width: 100%;
                border: solid 4px blueviolet;
                border-radius: 12px;
            }
        }
    }
`

export function Section1() {

    return (
        <Section>
            <div className="filter">
                <div className="container">

                    <img className="logo" src={logo} alt="" />

                    <div className="content">
                        <div className="text">
                            <span>Aproveite</span>

                            <h1>Cosplay eletrônico fogo pisca varinhas truques chama mais leve dispositivo magia adereços mágicos truques profissionais acessórios </h1>

                            <p>spray interruptor duplo, interruptor de alternância + interruptor de botão silencioso</p>
                            <div className="price">
                                <p className="priceLost">De: R$ 210,00</p>
                                <h2>Por: R$ 119,90 </h2>

                                <span>oferta por tempo limitado <br /></span>

                                <button>Comece agora sua jornada</button>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <span>incluido pacote de auxilio</span>
                                </div>
                            </div>
                        </div>

                        <div className="video">
                            <video width={'100%'} controlslist="nodownload" src="https://video.aliexpress-media.com/play/u/ae_sg_item/1674104050/p/1/e/6/t/10301/341441250816.mp4" controls="true" data-spm-anchor-id="a2g0o.detail.1000017.i1.1ca92141tGMop9"></video>
                        </div>

                    </div>

                </div>
            </div>
        </Section>
    )
}