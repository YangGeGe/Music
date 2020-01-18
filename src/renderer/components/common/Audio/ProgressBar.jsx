import React,
{
  useRef,
  useState,
} from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import style from './ProgressBar.less';

function Audio({
  bufferPercent,
  currentTime,
  duration,
  changeCurrentTime,
}) {
  const progressBar = useRef();// 总进度
  const progress = useRef();// 播放进度
  const dot = useRef();
  const disX = useRef(0);

  const [drag, setDrag] = useState(false);

  const calcDistance = () => {
    const widthPercent = Math.floor((currentTime / duration) * 100);
    if (!drag) {
      return widthPercent;
    }
  };

  const dotMouseMove = (e) => {
    const bar = progressBar.current;
    let width = e.clientX - disX.current;
    if (width < 0) {
      width = 0;
    }
    if (width > bar.clientWidth) {
      width = bar.clientWidth;
    }
    progress.current.style.width = `${(width / bar.clientWidth) * 100}%`;
    changeCurrentTime(width / bar.clientWidth);
  };

  const dotMouseUp = () => {
    setDrag(false);
    document.removeEventListener('mousemove', dotMouseMove, false);
    document.removeEventListener('mouseup', dotMouseUp, false);
  };

  const dotMouseDown = (e) => {
    setDrag(true);
    disX.current = e.clientX - dot.current.offsetLeft;
    document.addEventListener('mousemove', dotMouseMove, false);
    document.addEventListener('mouseup', dotMouseUp, false);
  };

  return (
    <span
      styleName="progressbar commonStyle"
      ref={ progressBar }
    >
      <span
        styleName="bufferRange commonStyle"
        style={ {
          width: `${bufferPercent}%`,
        } }
      />
      <span
        styleName="progress"
        ref={ progress }
        style={ { width: `${calcDistance()}%` } }
      >
        <span
          styleName="dot"
          ref={ dot }
          onMouseDown={ (e) => dotMouseDown(e) }
        >
          <span/>
        </span>
      </span>
    </span>
  );
}

Audio.propTypes = {
  bufferPercent: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number,
  changeCurrentTime: PropTypes.func.isRequired,
};

Audio.defaultProps = {
  duration: 0,
};

export default CSSModules(Audio, style, { allowMultiple: true });
