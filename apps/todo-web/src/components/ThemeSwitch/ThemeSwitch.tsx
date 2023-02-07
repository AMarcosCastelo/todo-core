import { Switch, type SwitchProps } from '@nextui-org/react';

import MoonIcon from '../MoonIcon/MoonIcon';
import SunIcon from '../SunIcon/SunIcon';

interface Props extends Omit<Partial<SwitchProps>, 'iconOn' | 'iconOff'> {}

const ThemeSwitch: React.FC<Props> = (props) => {
  return (
    <Switch
      {...props}
      iconOn={<MoonIcon filled />}
      iconOff={<SunIcon filled />}
    />
  );
};

export default ThemeSwitch;
