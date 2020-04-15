import React from 'react';
import styled from 'styled-components';
import VideoInput from './VideoInput';
import EnterButton from './EnterButton';

const EndComponent = styled.div`
  width: 100%;
  max-width: 45rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
`;

const Initials = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function End() {
  return (
    <EndComponent>
      <Initials>
        <VideoInput/>
        <VideoInput/>
        <VideoInput/>
      </Initials>
      <EnterButton/>
    </EndComponent>

  );
}
