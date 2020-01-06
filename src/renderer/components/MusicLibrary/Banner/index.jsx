import React,
{
  useEffect,
  useRef,
  useCallback,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from './index.less';

const initState = {
  currentIndex: 0,
};

function reducer(state, action) {
  const { currentIndex } = state;
  let imgIndex = currentIndex;
  if (action.type === 'toRight') {
    imgIndex += 1;
    if (imgIndex > action.payload.length - 1) {
      imgIndex = 0;
    }
    return { currentIndex: imgIndex };
  } if (action.type === 'toLeft') {
    imgIndex -= 1;
    if (imgIndex < 0) {
      imgIndex = action.payload.length - 1;
    }
    return { currentIndex: imgIndex };
  }
  throw new Error();
}

function Banner({
  imgList,
}) {
  const timeInterval = useRef(null);

  const [state, dispatch] = useReducer(reducer, initState);
  const { currentIndex } = state;

  const getStyleName = (itemIndex) => {
    switch (currentIndex) {
      case itemIndex:
        return 'current';
      case itemIndex - 1:
        return 'next';
      case itemIndex + (imgList.length - 1):
        return 'next';
      case itemIndex - (imgList.length - 1):
        return 'previous';
      case itemIndex + 1:
        return 'previous';
      default:
        return '';
    }
  };

  const interval = useCallback(() => {
    timeInterval.current = setInterval(() => {
      dispatch({ type: 'toRight', payload: imgList });
    }, 5000);
  }, [imgList]);

  const clickEle = (index) => {
    switch (getStyleName(index)) {
      case 'previous':
        dispatch({ type: 'toLeft', payload: imgList });
        break;
      case 'next':
        dispatch({ type: 'toRight', payload: imgList });
        break;
      default:
            // 对当前banner数据处理
    }
  };

  const stopInterval = () => {
    clearInterval(timeInterval.current);
  };

  const continueInterval = () => {
    setTimeout(() => {
      interval();
    }, 1000);
  };

  useEffect(() => {
    interval();
    return () => {
      clearInterval(timeInterval.current);
    };
  }, [interval]);

  return (
    <div styleName="banner">
      <div
        styleName="imgList"
        onMouseEnter={ () => stopInterval() }
        onMouseLeave={ () => continueInterval() }
      >
        {
          imgList.map((item, index) => (
            <div
              key={ item.src }
              styleName={ `normal ${getStyleName(index)}` }
              onClick={ () => clickEle(index) }
            >
              <img
                src={ item.src }
                alt="banner.png"
              />
              <div styleName="mask"/>
            </div>
          ))
        }
      </div>
      {/* <div styleName="imgBtnList">
        {
          imgList.map((_, index) => (
            <div
              key={ index }
              // onClick={ () => { btnClick(index + 1); } }
              onMouseOver={ () => { btnClick(index + 1); } }
              onFocus={ () => { btnClick(index + 1); } }
              styleName="imgBtn"
              style={ { background: index + 1 === btnIndex ? 'white' : 'none' } }
            />
          ))
        }
      </div> */}
    </div>
  );
}

Banner.propTypes = {
  imgList: PropTypes.array.isRequired,
};

export default CSSModules(Banner, style, { allowMultiple: true });
