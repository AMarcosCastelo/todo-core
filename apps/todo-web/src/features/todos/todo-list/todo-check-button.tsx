import { memo } from 'react';
import { Tooltip, useTheme } from '@nextui-org/react';
import { Check } from 'lucide-react';

import { IconButton } from '../../ui';

interface TodoCheckButtonProps {
  handleClick: () => void;
}

const TodoCheckButton: React.FC<TodoCheckButtonProps> = ({ handleClick }) => {
  const { theme } = useTheme();

  return (
    <Tooltip content="Done" color="primary" onClick={handleClick}>
      <IconButton
        onClick={handleClick}
        ariaLabel="Check button"
        icon={
          <Check
            size={20}
            data-testid="check-icon"
            color={theme?.colors.primary.value}
          />
        }
      />
    </Tooltip>
  );
};

export default memo(TodoCheckButton);
