import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ConfirmButton({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}