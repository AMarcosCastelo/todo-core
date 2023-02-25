import React, { memo } from 'react';

import { NextButton } from './styles';

interface IconButtonProps {
  icon: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  ariaLabel,
}) => {
  return (
    <NextButton aria-label={ariaLabel} onClick={onClick}>
      {icon}
    </NextButton>
  );
};

export default memo(IconButton);
