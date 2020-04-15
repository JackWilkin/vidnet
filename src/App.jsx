import React from 'react';
import styled from 'styled-components';
import HomeScreen from './Components/HomeScreen';
import VideoStream from './Components/VideoStream';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Background = styled.div`
  display: flex;
  height: 100%;
  background-color: #2300e2;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Background>
    <Router>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/video-stream" component={VideoStream} />
    </Router>
    </Background>
  );
}

export default App;
