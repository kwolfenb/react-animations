import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Component1 = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: 0 }}
      to={{ opacity: 1, marginTop: 0 }}>
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est</p>
            <Spring
              from = {{ number: 0}}
              to = {{ number: 1}}
            config = {{ duration: 5000}}

            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>
                    {props.number}
                  </h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>

  );
}

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
}

const counter = {
  background: 'black',
  width: '10%',
  color: 'white',
  padding: '1.5rem',
  textAlign: 'center',
  borderRadius: '5px'
}

export default Component1;