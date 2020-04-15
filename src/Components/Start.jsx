import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import ShuffleButton from './ShuffleButton';
import { categories } from '../videos-store.js';

const StartComponent = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default function Start() {
    const tagList = categories.map((category) => (
        <Tag key={category} category={category}/>
      ));

  return (
    <StartComponent>
      <ShuffleButton/>
      <Tags>
        {tagList}
        </Tags>
    </StartComponent>

  );
}
