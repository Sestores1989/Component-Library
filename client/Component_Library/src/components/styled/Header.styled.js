import styled from "styled-components"

const StyledHeader = styled.div`
font-family: Roboto, sans-serif;
padding: 40px 0;
margin:0;
background-color:  rgb(253, 251, 122);
`
const Nav = styled.nav`
display: flex; 
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
width: 100%;

@media(max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

const Logo = styled.img`
width: 100px;
height: 100px;
margin-left: 20px;
background-color: #fff;
border-radius: 50%;
margin-right: 10px;

@media(max-width: 768px) {
   margin-bottom: 40px;
}
`
const StyledImage = styled.img`
width: 200px;
margin-right: 40px;

@media(max-width: 768px) {
    width: 90%;
    margin-right: 0;
}
`

export { StyledHeader, Nav, Logo, StyledImage }