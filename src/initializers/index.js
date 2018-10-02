import storage from './storage';
import customEvent from './custom_event';
import initFullStory from './full_story';
import initMixpanel from './mixpanel';

const initialize = () => {
  storage();
  customEvent();
  initFullStory();
  initMixpanel();
}

export default initialize;
