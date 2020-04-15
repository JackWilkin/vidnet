import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context';

const EnterButton = styled.button`
    filter: drop-shadow(10px 5px 4px #180096);
    border-style: outset;
    border-width: 5px;
    border-color: yellow;
    background-color: yellow;
    padding: 1rem;
    font-size: 2rem;
    color: red;
    width: 100%;
    margin: 1rem;

    :hover {
    border-color: red;
    }
`;

function enterVideoSequence(narrative) {
    console.log(narrative);
};

export default function EnterButtonComponent() {
    const { narrative, setClips, setNarrative } = useContext(Context);

  return (
    <EnterButton onClick={() => {enterVideoSequence(narrative); setClips(narrative); setNarrative([]);}}>
      Enter
    </EnterButton>

  );
}
