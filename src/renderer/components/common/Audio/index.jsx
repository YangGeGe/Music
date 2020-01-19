import React,
{
  useRef,
  useEffect,
  useCallback,
  useReducer,
  useState,
} from 'react';
import {
  useSelector,
} from 'react-redux';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './index.less';
import MusicInfo from './MusicInfo';
import ControlBtn from './ControlBtn';
import ProgressBar from './ProgressBar';
import Time from './Time';
import VoiceBar from './VoiceBar';

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
  setCurrentTime,
}) {
  const {
    currentTime,
  } = useSelector(state => state.audio);
  const audio = useRef();
  const [state, dispatch] = useReducer(reducer, initState);
  const { bufferPercent } = state;
  const [paused, setPaused] = useState(true);
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
  }, [setCurrentTime]);

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

  const ended = useCallback(() => {
    audio.current.addEventListener('ended', () => {
      // 判断当前是否为循环播放或者无下一首歌曲
      setCurrentTime(0);
      setPaused(true);
    });
  }, [setCurrentTime]);

  const changeVolume = (vol) => {
    localStorage.setItem('volume', vol);
    audio.current.volume = Math.round(vol * 10) / 10;
  };

  useEffect(() => {
    getBuffer();
    getTimeData();
    ended();
  }, [ended, getBuffer, getTimeData]);

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
          <Time time={ currentTime }/>
          <ProgressBar { ...progressBarProps }/>
          <Time time={ duration }/>
          <div styleName="musicActions">
            <span styleName="collection" className="iconfont">&#xe708;</span>
            <span className="iconfont" styleName="playControle">&#xe66c;</span>
            <VoiceBar changeVolume={ (vol) => changeVolume(vol) }/>
            <span styleName="word">词</span>
            <span className="iconfont" styleName="songList">&#xe714;</span>
          </div>
        </div>
      </div>
    </>
  );
}

Audio.propTypes = {
  src: PropTypes.string.isRequired,
  setCurrentTime: PropTypes.func.isRequired,
};

export default CSSModules(Audio, style);
