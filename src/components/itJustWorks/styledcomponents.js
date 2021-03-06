import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    max-height: 600px;
    margin-top: 150px;

    @media (max-width: 1024px){
        max-width: 690px;
        max-height: 865px;
        margin-top: 200px;
    }

    @media (max-width: 600px) {
        margin-top: 450px;
    }

    @media (max-width: 520px) {
        margin-top: 400px;
    }

    @media (max-width: 420px) {
        margin-top: 370px;
    }
`

export const Work = styled.div`
    height: 545px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: #172339;
    border-radius: 15px; 
    position: relative;

    @media (max-width: 1024px){
        grid-template-columns: auto;
        grid-template-rows: repeat(2, 1fr);
    }
`

export const ImageJeremyStyled = styled.img`
    height: 600px;
    position: absolute;
    left: 50px;
    top: -55px;

    @media (max-width: 1024px){
        display: none;
    }
`

export const ImageJeremyStyledSmall = styled.img`
    height: 300px;
    position: absolute;
    left: 250px;
    top: -120px;

    @media (min-width: 1025px){
        display: none;
    }

    @media (max-width: 1024px){
        display: block;
    }

    @media (max-width: 680px) {
        top: 2%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

`

export const Line = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 40%;
    top: 30%;

    @media (max-width: 1024px){
        left: 45%;
        top: 35%;
    }

    @media (max-width: 680px) {
        top: 37%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: 2;
    grid-row: 1;

    @media (max-width: 1024px){
        margin-top: 0 auto;
        text-align: center;
        grid-row: 2;
    }
`

export const TitleStyled = styled.h1`
    font-weight: 200;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.5px;
    color: #FAF8F6;

    span{
        font-weight: 400;
    }

    @media (max-width: 420px){
        font-size: 38px;
    }
`

export const StyledDesc = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.1px;
    color: #F3EDE7;
    width: 80%;

    @media (max-width: 1024px){
        margin: 0 auto;
    }

    @media (max-width: 420px){
        font-size: 18px;
    }
`

export const DatasJeremy = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    color: #FAF8F6;
    font-weight: 300;

    @media (max-width: 420px){
        font-size: 12px;
    }
`

export const SpanBold = styled.span`
    font-weight: 700;
    padding-bottom: 15px;
`