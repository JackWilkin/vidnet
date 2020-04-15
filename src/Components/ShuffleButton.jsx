import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import { shuffleVideos } from '../utils'

const ShuffleButton = styled.button`
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

export default function Shuffle() {
    const videoCount = 10;
    const { setClips } = useContext(Context);
    const nextVidIds = shuffleVideos(videoCount);

  return (
      <ShuffleButton onClick={() => setClips(nextVidIds)}>Shuffle</ShuffleButton>
  );
}
