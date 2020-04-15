import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import videoStore from '../videos-store.js';

const Tag = styled.button`
filter: drop-shadow(10px 5px 4px #180096);
    margin: 0.25rem;
  width: 100%;
  border: none;
  height: 2rem;
  max-width: 5.5rem;
  font-size: inherit;
  background: red;
  border-style: outset;
  border-color: red;
  border-width: 5px;

  :hover {
    border-color: yellow;
  }

  :focus {
    border-color: yellow;
    background: yellow;
  }
`;

const getAllTaggedIds = (category) => {
    const taggedVideos = videoStore.filter(video => video.categories.includes(category));
    const taggedIds = taggedVideos.map(video => video.videoId);
    return taggedIds;
};

export default function TagComponent(props) {
  const { category } = props;
  const { setClips } = useContext(Context);

  const taggedIds = getAllTaggedIds(category);

  return (
    <Tag onClick={() => setClips(taggedIds)}>
      {category}
    </Tag>

  );
}
