import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './VoiceBar.less';
// TODO: 静音的图标切换
function VoiceBar({
  changeVolume,
}) {
  const voiceBar = useRef();
  const vocieProgress = useRef();
  const dot = useRef();
  const disX = useRef(0);
  const volume = useRef(0);
  const [muteStat, setMuteStat] = useState(false);

  const changeBarWidth = (width) => {
    vocieProgress.current.style.width = width;
  };

  const dotMouseMove = (e) => {
    const bar = voiceBar.current;
    let width = e.clientX - disX.current;
    if (width < 0) {
      width = 0;
    }
    if (width > bar.clientWidth) {
      width = bar.clientWidth;
    }
    if (width === 0) {
      setMuteStat(true);
    }
    volume.current = width / bar.clientWidth;
    changeBarWidth(`${(width / bar.clientWidth) * 100}%`);
    changeVolume(width / bar.clientWidth);
  };

  const dotMouseUp = () => {
    document.removeEventListener('mousemove', dotMouseMove, false);
    document.removeEventListener('mouseup', dotMouseUp, false);
  };

  const dotMouseDown = (e) => {
    disX.current = e.clientX - dot.current.offsetLeft;
    document.addEventListener('mousemove', dotMouseMove, false);
    document.addEventListener('mouseup', dotMouseUp, false);
  };

  const clickProgress = (e) => {
    const bar = voiceBar.current;
    const width = e.clientX - bar.offsetLeft;
    if (width === 0) {
      setMuteStat(true);
    }
    volume.current = width / bar.clientWidth;
    changeBarWidth(`${(width / bar.clientWidth) * 100}%`);
    changeVolume(width / bar.clientWidth);
  };

  const mute = () => {
    if (!muteStat) {
      changeVolume(0);
      changeBarWidth('0%');
    } else {
      const percentWidth = `${Number(volume.current * 100).toFixed(1)}%`;
      changeVolume(volume.current);
      changeBarWidth(percentWidth);
    }
    setMuteStat(!muteStat);
  };

  useEffect(() => {
    const vol = localStorage.getItem('volume');
    if (!vol) {
      changeVolume(0.5);
      changeBarWidth('50%');
    } else {
      const percentWidth = `${Number(vol * 100).toFixed(1)}%`;
      if (vol === 0) {
        setMuteStat(true);
      }
      changeVolume(vol);
      changeBarWidth(percentWidth);
    }
  }, [changeVolume]);

  return (
    <span>
      <span className="iconfont" onClick={ () => mute() } >&#xe732;</span>
      <span
        styleName="voiceBar"
        ref={ voiceBar }
        onClick={ (e) => clickProgress(e) }
      >
        <span
          styleName="vocieProgress"
          ref={ vocieProgress }
        >
          <span
            styleName="dot"
            ref={ dot }
            onMouseDown={ (e) => dotMouseDown(e) }
          />
        </span>
      </span>
    </span>
  );
}

VoiceBar.propTypes = {
  changeVolume: PropTypes.func.isRequired,
};

export default CSSModules(VoiceBar, style);
