import videoStore from './videos-store.js';
import { categories } from './videos-store.js';

export const shuffleVideos = (n) => {
    const keys = [...Array(97).keys()]
      // Shuffle array
    const shuffled = keys.sort(() => 0.5 - Math.random());
  
    // Get sub-array of first n elements after shuffled
    let selected = shuffled.slice(0, n);
  
    return selected;
}

export function getClip(id) {
  let hasClip = true;
  let clip = null;
  try {
    const images = require.context('./Videos', true);
    const clipName = videoStore[id].videoSource
    clip = images(`./${clipName}`);
  } catch (e) {
    hasClip = false;
  }
  return { hasClip, clip };
}

export function commonMembers(a, b) {
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

export function getRelatedVideoIds(name) {

  const categories = videoStore[name].categories;
  const relatedVids = videoStore.filter(video => commonMembers(video.categories, categories));
  const relatedVidIds = relatedVids.map(video => video.videoId);
  
  return relatedVidIds;
}