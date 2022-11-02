import { TouchableOpacityProps } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  color,
  disabled = false,
  loading = false,
  ...rest
}: Props) {
  const { colors } = useTheme();

  return (
    <Container
      disabled={disabled}
      color={color}
      style={{ opacity: (disabled === true || loading === true) ? .5 : 1 }}
      {...rest}
    >
      {loading ? <ActivityIndicator color={colors.shape} /> : <Title>{title}</Title>}
      
    </Container>
  );
}