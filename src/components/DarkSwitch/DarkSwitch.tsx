import * as React from 'react';
import LeftCould from './assets/left_cloud.svg';
import RightCould from './assets/right_cloud.svg';
import classes from './DarkSwitch.module.scss';

export function DarkSwitch(): React.ReactElement {
  // const [isChecked, setIsChecked] = React.useState(false);
  //
  // const handleChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <label className={classes['switch']}>
      <input
        type="checkbox"
        checked={false}
        onChange={() => {
          console.log('hello');
        }}
        className={classes['checkbox']}
      />
      <span className={classes['slider']}>
        <img className={classes['cloud-left']} src={LeftCould} alt={''} />
        <img className={classes['cloud-right']} src={RightCould} alt={''} />
      </span>
    </label>
  );
}
