import { TransactionType } from './index';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native"
import { Feather } from '@expo/vector-icons'

export default {

Container: styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;

    padding: 17px 24px;
    margin-bottom: 16px;
`,

Title: styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`,

Amount: styled.Text<TransactionType>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color: ${({ theme, type }) => type === 'positive' ?
        theme.colors.success : theme.colors.attention};

    margin-top: 2px;
`,

Footer: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
`,

Category: styled.View`
    flex-direction: row;
    align-items: center;
`,

Icon: styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`,

CategoryName: styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};

    margin-left: 17px;
`,

Date: styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
`
}