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
import MusicInfo from './MusicInfo';
import ControlBtn from './ControlBtn';
import ProgressBar from './ProgressBar';

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
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(null);

  // 缓冲进度
  const getBuffer = useCallback(() => {
    audio.current.addEventListener('progress', () => {
      const timeRanges = audio.current.buffered;
      const timeBuffered = timeRanges.end(timeRanges.length - 1);
      const bufferPercents = timeBuffered / audio.current.duration;
      dispatch({ type: 'setBufferPercent', payload: bufferPercents });
    }, false);
  }, []);

  // 获取歌曲时间信息
  const getTimeData = useCallback(() => {
    audio.current.addEventListener('canplay', () => {
      setDuration(audio.current.duration);
    });
    audio.current.addEventListener('timeupdate', () => {
      setCurrentTime(audio.current.currentTime);
    }, false);
  }, []);

  const controlPaused = () => {
    const { current } = audio;
    setPaused(!paused);
    if (paused) {
      current.play();
    } else {
      current.pause();
    }
  };

  const changeCurrentTime = (percent) => {
    const newCurTime = percent * audio.current.duration;
    audio.current.currentTime = newCurTime;
  };

  useEffect(() => {
    getBuffer();
    getTimeData();
  }, [getBuffer, getTimeData]);

  const controlBtnProps = {
    paused,
    onControl: () => controlPaused(),
  };

  const progressBarProps = {
    bufferPercent,
    currentTime,
    duration,
    changeCurrentTime: (percent) => changeCurrentTime(percent),
  };
  return (
    <>
      <audio
        src={ src }
        ref={ audio }
      />
      <div styleName="control">
        <MusicInfo/>
        <div styleName="playInfo">
          <ControlBtn { ...controlBtnProps }/>
          <ProgressBar { ...progressBarProps }/>
          <div styleName="musicActions">
            <span styleName="collection commonStyle" className="iconfont">&#xe708;</span>
            <span className="iconfont" styleName="commonStyle">&#xe66c;</span>
            <span className="iconfont" styleName="commonStyle">&#xe732;</span>
            <span styleName="voicebar commonStyle"/>
            <span styleName="commonStyle">词</span>
            <span className="iconfont" styleName="commonStyle">&#xe714;</span>
          </div>
        </div>
      </div>
    </>
  );
}

Audio.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CSSModules(Audio, style, { allowMultiple: true });
