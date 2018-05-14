import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface P {
  name?: string,
  count?: number,
}

class Greeting extends React.Component<P> {
  static defaultProps = {
    name: 'World',
    count: 1,
  };

  render() {
    const { name, count } = this.props;
    const greetings = [];

    for (let i = 0; i < count; i++) {
      greetings.push(<div key={i}>Hello {name}!</div>);
    }

    return greetings;
  }
}

export default Greeting;
