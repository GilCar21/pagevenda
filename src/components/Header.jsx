import styled from "styled-components"
import logo from "../assets/hp.png"

const Section = styled.div`
    padding: 1rem 0;
    width: 100%;
    ::-webkit-scrollbar-thumb:hover {
        background: black;
    }


    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90vw;
        max-width: 1240px;
        margin: 0 auto;
        

        img{
            width: 180px;
        }
    
        .linksButton{
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 60%;
            @media only screen and (max-width: 900px){
                width: auto;
            }
        }
        .links{
            width: 70%;
            display: flex;
            justify-content: space-between;
            @media only screen and (max-width: 900px){
                display: none;
            }
        }
        button{
            background: blueviolet;
            color: white;
            padding: 1rem 1.5rem;
            font-size: 1.1rem;
    
            border: solid 1px black;
            border-radius: 8px;
            a{
                font-size: 1.1rem;
            }
        }
    }
`

export function Header() {

    return (
        <Section>
            <div className="content">
                <img src={logo} alt="" />

                <div className="linksButton">

                    <div className="links">
                        <p>O que é</p>

                        <p>Como funciona</p>

                        <p>Mais</p>
                    </div>

                        <button>
                        <a href="https://pt.aliexpress.com/item/1005004561355996.html?spm=a2g0o.productlist.0.0.75bb6686ugfCFs&algo_pvid=18bf2c87-f632-492a-81d6-47ba93bf2a8c&aem_p4p_detail=2022082414030917088411961708060003513694&algo_exp_id=18bf2c87-f632-492a-81d6-47ba93bf2a8c-1&pdp_ext_f=%7B%22sku_id%22%3A%2212000029622186356%22%7D&pdp_npi=2%40dis%21BRL%21276.16%21262.35%21%21%2145.49%21%21%40210318b916613749898168033e3686%2112000029622186356%21sea&curPageLogUid=5TB1M51zLcLI&ad_pvid=2022082414030917088411961708060003513694_2" target="_blank">
                            Compre já
                        </a>
                        </button>
                    
                </div>
            </div>

        </Section>
    )
}