import styled from "styled-components";
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
            a{
               font-size: 1.1rem;
            }
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
                            <button>
                                <a href="https://pt.aliexpress.com/item/1005004561355996.html?spm=a2g0o.productlist.0.0.75bb6686ugfCFs&algo_pvid=18bf2c87-f632-492a-81d6-47ba93bf2a8c&aem_p4p_detail=2022082414030917088411961708060003513694&algo_exp_id=18bf2c87-f632-492a-81d6-47ba93bf2a8c-1&pdp_ext_f=%7B%22sku_id%22%3A%2212000029622186356%22%7D&pdp_npi=2%40dis%21BRL%21276.16%21262.35%21%21%2145.49%21%21%40210318b916613749898168033e3686%2112000029622186356%21sea&curPageLogUid=5TB1M51zLcLI&ad_pvid=2022082414030917088411961708060003513694_2" target="_blank">                                    Comece agora sua jornada
                                </a>
                            </button>
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