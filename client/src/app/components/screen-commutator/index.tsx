import * as React from 'react';
import { animated, useTransition } from 'react-spring';

interface IScreenCommutator {
  screens: ((props: any) => JSX.Element)[];
  activeIndex: number;
}

export function ScreenCommutator(props: IScreenCommutator) {
  const { activeIndex, screens } = props;
  const pages = screens.map((Screen: any) => (p: any) => (
    <animated.div style={{ ...p.style }}>
      <Screen />
    </animated.div>
  ));

  const transitions = useTransition(activeIndex, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });

  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
}
