import * as React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

import { GLOBAL } from '../../styles/global';

export interface Props {
  title: string;
  onClick: () => void;
  style?: ViewStyle;
}

const Button: React.FC<Props> = ({ title, onClick, style }: Props) => (
  <TouchableOpacity
    activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
    style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, style]}
    onPress={() => onClick()}
  >
    <Text style={GLOBAL.CTA.Style.primaryText}>{title}</Text>
  </TouchableOpacity>
);

export default Button;