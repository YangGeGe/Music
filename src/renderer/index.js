import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';


const fundebug = require('fundebug-javascript');

fundebug.apikey = '1bf90de2ebc99b28aee7bb07638061a22c31a6868b2650eff9e5ebce5bf6f65d';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // 将component中的报错发送到Fundebug
    fundebug.notifyError(error, {
      metaData: {
        info,
      },
    });
  }

  render() {
    const {
      hasError,
    } = this.state;
    const {
      children,
    } = this.props;
    if (hasError) {
      return null;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired,
};

ReactDom.render(< ErrorBoundary><App/></ ErrorBoundary>, document.getElementById('app'));
