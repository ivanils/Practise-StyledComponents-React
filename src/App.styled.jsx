import styled from "styled-components"

export const Section = styled.div`
    width: 100%;
    background-color: ${({ bg }) => bg};
    &.p-top{
        padding-top: 6rem;
        @media screen and (max-width:1200px) {
            padding: 0;
        }
    }
    &.p-bot{
        padding-bottom: 6rem;
        @media screen and (max-width:1200px) {
            padding: 0;
        }
    }
    `
export const Wrapper = styled.div`
    width: 1240px;
    margin: auto;
    /* background-color: black; */
    display: flex;
    flex-flow: row, nowrap;
    justify-content: space-between;
    align-items: flex-start;

    &.right{
        flex-direction: row-reverse;
    }
    @media screen and (max-width:1200px) {
        width: 100%;
        flex-flow: column nowrap;
        &.right{
            flex-direction: column;
        }
    }
`
export const ImgMain = styled.div`
    flex: 1;
    flex-basis: 50%;
    /* background-color: pink; */
    @media screen and (max-width:1200px) {
        flex-basis: 100%;
        width: 100%;
        &.p-top{
            padding-top: 3rem;
        }
        &.p-bot{
            padding-bottom: 3rem;
        }
        background-color: ${({ resbg }) => resbg};  
    }
`
export const TextMain = styled.div`

    flex: 1;
    flex-basis: 50%;
    /* background-color: turquoise; */
    display: flex;
    flex-flow: column, nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 5rem;
@media screen and (max-width:1200px){
width: 100%;
}
`
export const WrapperText = styled.div`
    width: 65%;
    margin: auto;
    @media screen and (max-width:1200px){
    width: 85%;
    }
`
export const Svg = styled.img`
    width  : 3rem;
    height : 3rem;
    &.large{
        width  : 5rem;
        height : 5rem;
    }
    &.footer{
        margin: 1.5rem 1rem;
        width  : 1.3rem;
        height : 1.3rem;
    }
    &.download{    
        margin: 1.5rem 0;
        width  : 11rem;
        height: auto;
    }
    @media screen and (max-width:1200px) {
        width: 2rem;
        height: 2rem;
    }
`
export const H1 = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
    margin: 1rem 0;
    @media screen and (max-width:1200px){
    font-size: 1.2rem;
    }
    &.large{
        font-size: 3rem;
        font-weight: 400;
        @media screen and (max-width:1200px){
        font-size: 1.8rem;
        }
    }
    &.black{
        color: black;
    }
    &.card{
        color: black;
        width: 1000px;
        margin: 2rem auto;
        padding-left: 1rem;
        @media screen and (max-width:1200px){
            width: auto;
            font-size: 1.3rem;
        }
    }
    `
export const P = styled.p`
    font-size: 1.5rem;
    color: #ffffff7d;
    line-height: 2rem;
    margin-bottom: 1rem;
    @media screen and (max-width:1200px){
    font-size: 1rem;
    }
    &.black{
        color: black;
    }
`
export const ImgImg = styled.img`
    width: 65%;
    margin: auto;
    @media screen and (max-width:1200px) {
     width: 400px;
    }
    @media screen and (max-width:500px) {
     width: 80%;
    }
`
export const TopCards = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    padding: 2rem 0;
`
export const BottomCards = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    padding: 5rem 0;
    @media screen and (max-width:1200px) {
        justify-content: center;
        align-items: center;
    }
`
export const WrapperCards = styled.div`
width: 1000px;
margin: auto;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
@media screen and (max-width:1200px) {
        width:600px;
}
@media screen and (max-width:1000px) {
        width: 320px;
}
@media screen and (max-width:500px) {
        width: 80%;
}
    `
export const Card = styled.div`
flex : 1 1 30%;
background-color: ${({ bg }) => bg};
margin: 1rem 1.5%;
border-radius: 1rem;
padding: 1.5rem;
@media screen and (max-width:1200px) {
    flex : 1 1 47%;    
    min-height: 9rem;
}
@media screen and (max-width:1000px) {
    flex : 1 1 100%;    
}
&.bot{
    min-height: 13rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width:1200px) {
    min-height : 10rem;
    }
    @media screen and (max-width:500px) {
    min-height : none;
    width: 90%;
    margin: 1rem auto;
    }
}
`
export const TextCard = styled.h4`
    color: white;
    margin: 1.5rem 2rem  0 0 ;
    font-size: 1.6rem;
    &.black{
        color: black;
    }
    @media screen and (max-width:1200px){
        font-size: 1.2rem;
    }
`
export const PCard = styled.p`
    font-size: 1.3rem;
    font-weight: 200;
    @media screen and (max-width:1200px){
        font-size: 1rem;
    }
    
`
export const Img = styled.img`
max-width: 50%;
`
export const Footer = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
align-items: center;
background-color: white;
padding: 2rem 0;
`
export const Links = styled.button`
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
`
export const Rrss  = styled.button`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
` 
export const Link = styled.button`
margin: 0 1rem;
&:hover{
    color: gray;
}
`
export const Rs  = styled.button`
` 