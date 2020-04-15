import React, { useContext } from 'react';
import styled from 'styled-components';
import { Player, ControlBar } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';
import Context from '../Context';
import videoStore from '../videos-store.js';

const VideoPlayer = styled.div`
  width: 100%;
  max-width: 20rem;
  filter: drop-shadow(10px 5px 4px #180096);
  border-style: inset;
  border-width: 5px;
  border-color: #393939;
  margin: 0.5rem;

  display: flex;
  flex-direction: column;
  div {
    flex-grow: 1;
  }

  ${props => props.done ? '' : 
  `:hover {
    max-width: 40rem;
    flex-grow: 1;
  }
  `}
`;

const VideoButton = styled.button`
  width: 100%;
  border: none;
  height: 2rem;
  font-size: inherit;
  background: yellow;
  border-style: outset;
  border-color: yellow;
  border-width: 5px;

  :hover {
    border-color: yellow;
    background: red;
    color: blue;
  }
`;

export function getClip(id) {
  let hasClip = true;
  let clip = null;
  try {
    const images = require.context('../Videos', true);
    const clipName = videoStore[id].videoSource
    clip = images(`./${clipName}`);
  } catch (e) {
    hasClip = false;
  }
  return { hasClip, clip };
}

function commonMembers(a, b) {
    const aSet = new Set(a) 
    const bSet = new Set(b)
    const intersection = new Set([...aSet].filter(x => bSet.has(x)));

    if (intersection.size > 1) {
        return true 
    }
    else {
        return false
    }
}

function getRelatedVideoIds(name) {

  const categories = videoStore[name].categories;
  const relatedVids = videoStore.filter(video => commonMembers(video.categories, categories));
  const relatedVidIds = relatedVids.map(video => video.videoId);
  
  return relatedVidIds;
}

export default function Video(props) {
  const { name } = props;
  const source = getClip(name);
  const {
    setClips, narrative, done
  } = useContext(Context);

  const nextChapter = () => {
    const relatedVidIds = getRelatedVideoIds(name);

    if (!narrative.includes(name)) {
      narrative.push(name);
    }

    const nextVidIds = relatedVidIds.filter(id =>  !(narrative.includes(id)));

    if (nextVidIds.length > 0) {
      setClips(nextVidIds);
    }
    else {
      setClips(narrative);
    }
  };

  return (
    <VideoPlayer done={done}>
      <Player
        muted
        autoPlay
        loop
        poster="/assets/poster.png"
      >
        <source src={source.clip} />
        <ControlBar disableCompletely className="my-class" />
      </Player>
      {!done && 
      <VideoButton type="button" onClick={nextChapter}></VideoButton>
      }
    </VideoPlayer>

  );
}
