import React, { useState } from 'react';
import MyComponent from './TransferredComponents/MyComponent';
// import styles from './HighOrderComponent.module.scss';


function withCounter(MyComponent, initialCount = 0) {

  function WithCounterComponent(props) {
    const [count, setCount] = useState(props.initialCount || initialCount);

    const increment = () => {
      setCount(count + 1)
    }

    return <MyComponent count={count} increment={increment} {...props} />
  }

  return WithCounterComponent;
}

export const EnhancedComponent = withCounter(MyComponent, 10);