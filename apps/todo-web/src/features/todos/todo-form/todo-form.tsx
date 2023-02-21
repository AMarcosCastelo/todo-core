import { Button, Input, Row } from '@nextui-org/react';
import { Plus } from 'lucide-react';

export const TodoForm = () => {
  return (
    <Row justify="center" align="center">
      <Input
        placeholder="Create a new Todo"
        size="xl"
        clearable
        bordered
        animated={false}
        width="500px"
        css={{ mr: 10 }}
      />

      <Button auto size="lg" icon={<Plus />} bordered>
        ADD
      </Button>
    </Row>
  );
};
