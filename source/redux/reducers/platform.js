import UAParser from 'ua-parser-js';
import keys from '../keys';

const refreshPlatform = (state) => {
  const result = new UAParser().getResult();
  return {
    ...state,
    ...result,
    is: {
      retina:   !!((window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1) > 1),
      mobile:   !!(window.innerWidth < 767 || (result.device && result.device.type == 'mobile')),
      tablet:   !!(result.device && result.device.type == 'tablet'),
      desktop:  !!(result.os.name == 'Windows' || result.os.name == 'Mac OS' || result.os.name == 'Linux'),
      android:  !!(result.os.name == 'Android'),
      ios:      !!(result.os.name == 'iOS'),
      edge:     !!(result.browser.name == 'Edge'),
      ie:       !!(result.browser.name == 'IE')
    }
  };
};

const INITIAL = refreshPlatform({});

export default (state = INITIAL, action) => {
  switch (action.type) {

    case keys.REFRESH_PLATFORM:
      return refreshPlatform(state);

    default:
      return state
  }
}

