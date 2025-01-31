import * as React from 'react';
import LeftCloud from './assets/left_cloud.svg';
import RightCloud from './assets/right_cloud.svg';
import classes from './DarkSwitch.module.scss';

type DarkSwitchProps = {
  /**
   * The size of the switch.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Whether the switch is in "dark mode" or not.
   * @default false
   */
  isInDark?: boolean;

  /**
   * Callback function triggered when the switch is toggled.
   */
  onClick: () => void;
};

/**
 * The bring-me-the-designer switch that for toggling the light and dark mode.
 *
 * @example
 * ```tsx
 * <DarkSwitch size="large" isDark={true} onClick={() => setToggleDarkMode(!isDark)} />
 * ```
 * @version: 1.0.6
 * @see: https://github.com/Jayjaynoplays/dark-switch
 *
 * @param onClick - Callback function triggered when the switch is toggled.
 * @param size - The size of the switch. Default: `medium`
 * @param isInDark - Whether the switch is in "dark mode" or not. Default: `false`
 * */
export function DarkSwitch({ onClick, size = 'medium', isInDark = false }: DarkSwitchProps): React.JSX.Element {
  return (
    <label className={classes[`switch-${size}`]}>
      <input type="checkbox" checked={isInDark} onChange={onClick} />
      <span className={classes['slider']}>
        <img className={classes['left-cloud']} src={LeftCloud} alt={'left-cloud'} />
        <img className={classes['right-cloud']} src={RightCloud} alt={'right-cloud'} />
      </span>
    </label>
  );
}
