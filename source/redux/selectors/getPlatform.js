import { createSelector } from 'reselect';

const getPlatform = (state) => state.platform;

export default createSelector(
  [ getPlatform ],
  (platform) => {
    return platform;
  }
);
