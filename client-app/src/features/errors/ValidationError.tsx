import { Message } from 'semantic-ui-react';

interface Props {
  errors: string[];
}

export default function ValidationError({ errors }: Props) {
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err, idx) => (
            <Message.Item key={idx}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
}
