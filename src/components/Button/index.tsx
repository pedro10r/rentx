import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: Props) {
  return (
    <Container color={color} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}