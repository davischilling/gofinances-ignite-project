import { StyleSheet } from 'react-native';
import { CardTypeProps } from './index';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/theme';

export default ({ type }: CardTypeProps) => StyleSheet.create({
    container: {
        width: RFValue(300),
        borderRadius: 5,
        paddingVertical: 19,
        paddingHorizontal: 23,
        paddingBottom: RFValue(42),
        marginRight: 16,
        backgroundColor: type === 'total' ? theme.colors.secondary : theme.colors.shape
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: theme.fonts.regular,
        fontSize: RFValue(14),
        color: type === 'total' ? theme.colors.shape : theme.colors.text_dark
    },
    icon: {
        fontSize: RFValue(40),
        color: type === 'up' ? theme.colors.success
                : type === 'down' ? theme.colors.attention
                : theme.colors.shape,
    },
    amount: {
        fontFamily: theme.fonts.medium,
        fontSize: RFValue(32),
        marginTop: 38,
        color: type === 'total' ? theme.colors.shape : theme.colors.text_dark
    },
    lastTransaction: {
        fontFamily: theme.fonts.regular,
        fontSize: RFValue(12),
        color: type === 'total' ? theme.colors.shape : theme.colors.text
    }
})
