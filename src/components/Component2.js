import React from 'react';
import Component4 from './Component4';
import { Spring } from 'react-spring/renderprops'

class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>

        <Spring
          from={{ opacity: 1 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <div style={props}>
              <div style={c2Style}>
                <h1>Component 2</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
                <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
              </div>
            </div>
          )}
        </Spring>
        <Component4 />
      </div>
    );
  }
}

const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem'
}

const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '15px 0'
}
export default Component2;