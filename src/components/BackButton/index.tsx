import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { Container } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

type Props = TouchableOpacityProps & {
  color?: string;
}

export function BackButton({ color, ...rest }: Props) {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={RFValue(24)}
        color={color ? color : colors.text}
      />
    </Container>
  );
}