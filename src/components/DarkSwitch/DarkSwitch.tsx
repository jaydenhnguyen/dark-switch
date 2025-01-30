import * as React from 'react';
import LeftCloud from './assets/left_cloud.svg';
import RightCloud from './assets/right_cloud.svg';
import classes from './DarkSwitch.module.scss';

export function DarkSwitch(): React.JSX.Element {
  const [isChecked, setIsChecked] = React.useState(false);
  
  const handleChange = React.useCallback(() => {
    setIsChecked((prev) => !prev);
  }, []);

  return (
    <label className={classes['switch']}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} className={classes['checkbox']} />
      <span className={classes['slider']}>
        <img className={classes['left-cloud']} src={LeftCloud} alt={'left-cloud'} />
        <img className={classes['right-cloud']} src={RightCloud} alt={'right-cloud'} />
      </span>
    </label>
  );
}
