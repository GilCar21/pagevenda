import styled from "styled-components"
import logo from "../assets/hp.png"

const Section = styled.div`
    padding: .5rem;

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


                    <button>Compre já</button>
                </div>
            </div>

        </Section>
    )
}