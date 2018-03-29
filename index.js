import React from 'react';
import PropTypes from 'prop-types';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import TypeScript from './TypeScript.tsx';

class TypeScriptRouting extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.connectedApp = props.stripes.connect(TypeScript);
  }

  render() {
    const { match: { path } } = this.props;
    return (
      <Switch>
        <Route
          path={`${path}`}
          render={() => <this.connectedApp {...this.props} />}
        />
        <Route component={() => <div>Oops! How did you get here!?</div>} />
      </Switch>
    );
  }
}

export default TypeScriptRouting;
