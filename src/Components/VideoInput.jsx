import React from 'react';
import styled from 'styled-components';
// import Context from '../Context';

const Input = styled.input`
    width: 100%;
    height: 4rem;
    max-width: 5rem;
    font-size: inherit;
    font-size: 3rem;
    color: blue;
    border-style: outset;
    border-color: red;
    border-width: 5px;
    text-align: center;
    margin: 1rem;

  :hover {
    border-color: yellow;
  }

  :focus {
    border-color: yellow;
    background: yellow;
  }
`;


export default function InputComponent() {

    //TODO: capitalize

  return (
    <Input maxLength="1">
      
    </Input>

  );
}
