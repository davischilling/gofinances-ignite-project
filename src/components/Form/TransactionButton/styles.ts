import { RectButton, GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from "styled-components/native";

export type BtnType = {
  isActive: boolean
  type: 'up' | 'down'
}

export const Containeer = styled.Text`
  font-size: 12px;
`;

export default {

Main: styled.View<BtnType>`
  width: 48%;

  /* is the same as:
  border: 1.5px solid ${({ theme }) => theme.colors.text}; */

  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};

  border-radius: 5px;

  background-color: ${({ isActive, type, theme }) =>
    isActive && type === 'up' ? theme.colors.success_light : 
    isActive && type === 'down' ? theme.colors.attention_light : theme.colors.shape
  };
`,

Container: styled(GestureHandlerRootView)`
  width: 100%;
`,

Button: styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
`,

Icon: styled(Feather)<BtnType>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) => type === 'up' ? theme.colors.success : theme.colors.attention}
`,

Title: styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`,

}