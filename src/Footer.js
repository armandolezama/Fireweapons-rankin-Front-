import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
background-color: #000000;
display: flex;
justify-content: center;
align-items: center;

.text{
    font-size:10px;
    color: white;
}

a{color: red}
`

function Footer(){
    return(
        <FooterStyles>
            <h4 class='text'>Inspired by <a href='https://www.youtube.com/user/DemolitionRanch'>Demolition Ranch</a></h4>
        </FooterStyles>
    )
}

export default Footer