import React from 'react';

import { useSpring, animated } from 'react-spring';

function Component4() {
  const props = useSpring({ number: 1, from: {number: 0} })

  return (
    <animated.div>
      {props.number}
    </animated.div>
  )
}

export default Component4;