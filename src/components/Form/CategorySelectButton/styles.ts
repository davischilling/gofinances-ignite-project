import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from "styled-components/native"

export default {

Container: styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape };

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  padding: 18px 16px;
`,

Category: styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(14)}px;
`,

Icon: styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text };
`,

}