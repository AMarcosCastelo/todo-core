import { Tooltip, useTheme } from '@nextui-org/react';
import { Trash2 } from 'lucide-react';

import { IconButton } from '../../ui';

interface TodoTrashButtonProps {
  handleClick: () => void;
}

const TodoTrashButton: React.FC<TodoTrashButtonProps> = ({ handleClick }) => {
  const { theme } = useTheme();

  return (
    <Tooltip content="Delete todo" color="error">
      <IconButton
        ariaLabel="Delete button"
        onClick={handleClick}
        icon={
          <Trash2
            size={20}
            data-testid="trash-icon"
            color={theme?.colors.error.value}
          />
        }
      />
    </Tooltip>
  );
};

export default TodoTrashButton;
