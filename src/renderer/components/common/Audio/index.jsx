import React,
{
  useRef,
  useEffect,
  useCallback,
  useReducer,
  useState,
} from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';
import ControlBtn from './ControlBtn';

const initState = {
  bufferPercent: 0,
};

function reducer(_, action) {
  if (action.type === 'setBufferPercent') {
    let range = action.payload;
    range *= 100;
    return { bufferPercent: range };
  }
  throw new Error();
}

function Audio({
  src,
}) {
  const audio = useRef();
  const [state, dispatch] = useReducer(reducer, initState);
  const { bufferPercent } = state;
  const [paused, setPaused] = useState(true);

  const getBuffer = useCallback(() => {
    audio.current.addEventListener('progress', () => {
      const timeRanges = audio.current.buffered;
      const timeBuffered = timeRanges.end(timeRanges.length - 1);
      const bufferPercents = timeBuffered / audio.current.duration;
      dispatch({ type: 'setBufferPercent', payload: bufferPercents });
    }, false);
  }, []);

  const controlPaused = () => {
    setPaused(!paused);
  };

  useEffect(() => {
    getBuffer();
  }, [getBuffer]);

  const controlBtnProps = {
    paused,
    onControl: () => controlPaused(),
  };

  return (
    <>
      <audio
        src={ src }
        ref={ audio }
        // autoPlay
      />
      <div styleName="control">
        <div styleName="musicInfo">
          <img src="http://p2.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?param=34y34" alt=""/>
          <div styleName="musicName">
            <p>世间美好与你环环相扣</p>
            <p>柏松</p>
          </div>
        </div>
        <div styleName="playInfo">
          <ControlBtn { ...controlBtnProps }/>
          <span styleName="progressbar commonStyle">
            <span
              styleName="bufferRange commonStyle"
              style={ {
                width: `${bufferPercent}%`,
              } }
            />
          </span>
          <span styleName="collection commonStyle" className="iconfont">&#xe708;</span>
          <span className="iconfont" styleName="commonStyle">&#xe66c;</span>
          <span className="iconfont" styleName="commonStyle">&#xe732;</span>
          <span styleName="voicebar commonStyle"/>
          <span styleName="commonStyle">词</span>
          <span className="iconfont" styleName="commonStyle">&#xe714;</span>
        </div>
      </div>
    </>
  );
}

Audio.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CSSModules(Audio, style, { allowMultiple: true });
