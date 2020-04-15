import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import Video from './Video';


const VideoList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Videos() {
    const { clips } = useContext(Context);

    const videoList = clips.map((clip) => (
        <Video key={clip} name={clip} />
      ));

  return (
    <VideoList>
     {videoList}
    </VideoList>

  );
}
