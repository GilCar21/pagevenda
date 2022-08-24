import styled from "styled-components";

const Section = styled.section`
    padding: 1rem 0;
    background: #000;
    color: white;
    margin: auto;
    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export function Footer(){

    return(
        <Section>
            <div className="footer">
                <p>Feito por Gilberto</p>
                <p>Projeto de estudos</p>
            </div>
        </Section>
    )
}