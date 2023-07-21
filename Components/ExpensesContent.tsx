import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextInputField from './TextInputField';
import Icon from 'react-native-vector-icons/MaterialIcons'


interface ExpensesContentProps {
    screenTitle?: string;
    onBackArrowPress?: () => any;
}

const ExpensesContent: React.FC<ExpensesContentProps> = ({
    screenTitle = '',
    onBackArrowPress,
}) => {
    return (
        <View style={styles.headerBlk}>
            <TouchableOpacity style={styles.backIcon} onPress={onBackArrowPress}>
                <Icon name='keyboard-backspace' size={28} color="#fff" />
            </TouchableOpacity>
            <TextInputField addStyle={styles.headerTitle} content={screenTitle} />
        </View>
    );
}
const styles = StyleSheet.create({
    headerBlk: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    backIcon: {
        position: 'absolute',
        left: 0
    },
    headerTitle: {
        fontSize: 20,
        color:'#fff'
    },
});

export default ExpensesContent