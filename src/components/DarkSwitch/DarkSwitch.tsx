import * as React from 'react';
import LeftCloud from './assets/left_cloud.svg';
import RightCloud from './assets/right_cloud.svg';
import classes from './DarkSwitch.module.scss';

type DarkSwitchProps = {
  size?: 'small' | 'medium' | 'large';
  isDark?: boolean;
  onClick: () => void;
};

export function DarkSwitch({ onClick, size = 'medium', isDark = false }: DarkSwitchProps): React.JSX.Element {
  return (
    <label className={classes[`switch-${size}`]}>
      <input type="checkbox" checked={isDark} onChange={onClick} className={classes['checkbox']} />
      <span className={classes['slider']}>
        <img className={classes['left-cloud']} src={LeftCloud} alt={'left-cloud'} />
        <img className={classes['right-cloud']} src={RightCloud} alt={'right-cloud'} />
      </span>
    </label>
  );
}
