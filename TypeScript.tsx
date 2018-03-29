import * as React from 'react';
import * as PropTypes from 'prop-types';

import Greeting from './Greeting';

class TypeScript extends React.Component {
  static manifest = Object.freeze({
    values: {
      type: 'okapi',
      path: 'users',
      records: 'users',
    },
  });

  render() {
    return (
      <div>
        <h1>Welcome to TypeScript Land!</h1>
        <Greeting count={3} />
        { /* <Greeting count='foobar' /> Uncomment me to blow up your builds! */}
      </div>
    );
  }
}

export default TypeScript;
