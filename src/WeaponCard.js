import React, {Fragment} from 'react';
import styled from 'styled-components';

const WeaponCardStyles = styled.article`
border: 1px solid darkblue;
margin: 10px;
h3 {
  font-family: fantacy;
}
p {
  color: gray;
}
`;

function WeaponCard(props) {
return (
  <WeaponCardStyles>
    <h3>{props.name}</h3>
    <p>{props.type}</p>
    <p>{props.model}</p>
    <p>{props.caliber}</p>
    <p>{props.clipsize}</p>
    <p>{props.originPlace}</p>
  </WeaponCardStyles>
)
}

export default WeaponCard;

/*
<p>{props.name}</p>


*/