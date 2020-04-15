import React from 'react';
import styled from 'styled-components';
import { Player, ControlBar } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';
import { getClip } from '../utils';
import WordArt from 'react-wordart';
import { Link } from 'react-router-dom';

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1.75rem;
`;

const Home = styled(Link)`
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

const Video = styled.div`
    margin: auto;
    width: 100%;
    max-width: 40rem;
    padding: 1rem;
    background: black;
    filter: drop-shadow(10px 5px 4px #180096);
`;

export default function VideoStream() {

    const vidIds = [44, 22, 13];
    const videoIndex = 0;

    const source = getClip(vidIds[videoIndex])

    console.log(source);

  return (
    <Body>
        <Header>
            <WordArt text='Video-Net' theme='superhero' fontSize={80} />
            <Home to="/">HOME</Home>
        </Header>

    <Video>
        <Player
        muted
        autoPlay
        poster="/assets/poster.png"
      >
        <source src={source.clip} />
        <ControlBar disableCompletely className="my-class" />
      </Player>
      </Video>
    </Body>

  );
}
