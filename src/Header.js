import React from 'react';
import styled from 'styled-components';

const MycomponentStyles = styled.header`
background-color: darkred;

.text{
    font-size:40px;
    color: white;
}
`;

function Mycomponent(props){
    return(
        <MycomponentStyles>
            <h1 class='text'>{props.title}</h1>
        </MycomponentStyles>
    )
}

export default Mycomponent