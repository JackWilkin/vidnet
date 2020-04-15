import React from 'react';
import styled from 'styled-components';
import Context from '../Context';
import Videos from './Videos';
import End from './End';
import Start from './Start';
import WordArt from 'react-wordart';
import {shuffleVideos} from '../utils';
import { Link } from 'react-router-dom';

const HomeScreen = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const VideoEntries = styled(Link)`
  filter: drop-shadow(10px 5px 4px #180096);
  height: fit-content;
  font-size: inherit;
  background: red;
  border-style: outset;
  border-color: red;
  border-width: 5px;
  text-decoration: none;
    color: blue;
    text-align: center;
    padding: 0.25rem;
    margin-left: 1.5rem;

  :hover {
    border-color: yellow;
  }

  :focus {
    border-color: yellow;
    background: yellow;
  }
`;

export default function Home() {
  const [clips, setClips] = React.useState(shuffleVideos(10));
  const [narrative, setNarrative] = React.useState([]);

  const start = narrative.length < 1;
  const end = clips === narrative;

  const context = {
    clips, setClips, narrative, setNarrative, done: end
  };

  return (
    <HomeScreen>
      <Header>
        <WordArt text='Video-Net' theme='superhero' fontSize={100} />
        <VideoEntries to="/video-stream">Video Collection</VideoEntries>
      </Header>
      <Context.Provider value={context}>
        {start && <Start/>}
        {end && <End/>}
        <Videos/>
      </Context.Provider>
    </HomeScreen>
  );
}
