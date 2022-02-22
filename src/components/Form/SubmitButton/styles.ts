import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styled from "styled-components/native";

export default {

Container: styled(RectButton)<RectButtonProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  
  padding: 18px;
  border-radius: 5px;
  align-items: center;
`,

Title: styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shape};
`,

}