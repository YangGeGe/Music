import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InfitityScroll(props) {
  const {
    itemHeight,
    itemMarginTop,
    viewHeight, // 视口高度
    viewWidth, // 视口宽度
    sourceList,
    rightOffBottom,
  } = props;
  const viewItemCount = parseInt(viewHeight / (itemHeight + itemMarginTop), 0) + 1; // 视口内盛放的item个数
  const [currentList, setCurrentList] = useState(sourceList.slice(0, viewItemCount));
  const [scrollTop, setScrollTop] = useState(0); // 长列表的scrollTop
  const [listHeight, setListHeight] = useState(
    sourceList.length * itemHeight + (sourceList.length + 1) * itemMarginTop
  );
  const container = React.createRef();
  return (
    <div
      style={ {
        height: `${viewHeight}px`,
        width: `${viewWidth}px`,
        border: '1px solid',
        position: 'relative',
        overflow: 'auto',
      } }
      ref={ container }
      onScroll={ () => {
        const nowTop = container.current.scrollTop;
        setScrollTop(nowTop - (nowTop % (itemHeight + itemMarginTop)));
        const start = parseInt(nowTop / (itemHeight + itemMarginTop), 0);
        if (start + viewItemCount > sourceList.length - viewItemCount) {
          rightOffBottom();
        }
        setListHeight(sourceList.length * itemHeight + (sourceList.length + 1) * itemMarginTop);
        setCurrentList(sourceList.slice(start, start + viewItemCount));
      } }
    >
      <div style={ { margin: 0, padding: 0, height: `${listHeight}px` } }/>
      <ul
        style={ {
          margin: 0,
          position: 'absolute',
          listStyleType: 'none',
          top: `${scrollTop}px`,
          width: '100%',
          boxSizing: 'border-box',
          padding: 0,
        } }
      >
        {currentList.map((item, index) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={ index }
            style={ {
              backgroundColor: 'yellow',
              marginLeft: 10,
              marginRight: 10,
              height: `${itemHeight}px`,
              marginTop: `${itemMarginTop}px`,
            } }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

InfitityScroll.propTypes = {
  itemHeight: PropTypes.number.isRequired,
  itemMarginTop: PropTypes.number.isRequired,
  viewHeight: PropTypes.number.isRequired,
  viewWidth: PropTypes.number.isRequired,
  sourceList: PropTypes.array.isRequired,
  rightOffBottom: PropTypes.func,
};

InfitityScroll.defaultProps = {
  rightOffBottom: () => {},
};

export default InfitityScroll;
