import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper"
import { FlatList, FlatListProps } from "react-native";
import { BorderlessButton } from 'react-native-gesture-handler';

import { DataProps } from './index';

export default {

Container: styled.View`
    flex: 1; /* Occupies all the available space */
    background-color: ${({ theme }) => theme.colors.background};
`,

Header: styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center; /* centralize vertically */
  align-items: flex-start;
  flex-direction: row;
`,

UserWrapper: styled.View`
  width: 100%;
  /* 0 -> Top and bottom / 24px -> left and right */
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  justify-content: space-between; /* put space between elements */
  align-items: center;
`,

UserInfo: styled.View`
  align-items: center;
  flex-direction: row;
`,

Photo: styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`,

UserGreetings: styled.View`
  margin-left: 17px;
`,

Greeting: styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`,

Name: styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`,

LogoutButton: styled(BorderlessButton)``,

LogoutIcon: styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`,

HightlightCardList: styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`,

TransactionsWrapper: styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`,

SessionTitle: styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`,

TransactionList: styled(
  FlatList as new (props: FlatListProps<DataProps>) => FlatList<DataProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace()
  }
})`

`
}