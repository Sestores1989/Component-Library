import React from "react";
import { StyledHeader, Nav, Logo, StyledImage} from "./styled/Header.styled";
import { Button } from "./styled/Button.styled";
import { Flex } from "./styled/Flex.styled";

import { Container } from "./styled/Container";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Container>
            <Logo src="../images/logo_Toast.svg" alt="" />
            <h1 style={{ textAlign: "center", margin: "auto 0", fontSize: "30px" }}>Toasted</h1>
          </Container>
          <Button>Try It Free</Button>
        </Nav>
      </Container>
        <Flex>
          <div >
            <h1>A place to talk about toast while being toasted!</h1>
            <p>
              Nothing like a good ol' buttered piece of toast. Crunchy
              deliciousness filled with love.  Buttered toast,  toast with jam,  toast with peanut butter,
              sugar and cinnamon,  even just plain.    
            </p>
            <Button  bg="#ffff00" color="#333">
              Find out more
            </Button>
          </div>
          <StyledImage style={{borderRadius: "50px"}} src="./images/toast.jpeg" />
        </Flex>
    </StyledHeader>
  );
};

export default Header;
