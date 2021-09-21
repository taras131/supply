import React, {FC} from 'react';
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;
  padding: 1rem;
  background-color: dodgerblue;
`
const Footer: FC = () => {
    return (
        <FooterWrapper>
            Footer
        </FooterWrapper>
    );
};

export default Footer;