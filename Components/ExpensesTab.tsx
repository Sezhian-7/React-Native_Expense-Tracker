import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextInputField from './TextInputField';

interface ExpensesTabProps {
    isIncome?: boolean;
    onPressExpense?: () => any
    onPressIncome?: () => any
}

const ExpensesTab: React.FC<ExpensesTabProps> = ({
    isIncome,
    onPressExpense,
    onPressIncome
}) => {
    return (
        <View style={styles.toggleBlk}>
            <TouchableOpacity style={{ width: '50%' }} onPress={onPressExpense}>
                <TextInputField addStyle={[styles.toggle, isIncome ? null : styles.active]} content='Expenses' />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '50%' }} onPress={onPressIncome}>
                <TextInputField addStyle={[styles.toggle, isIncome ? styles.active : null]} content='Income' />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    toggleBlk: {
        backgroundColor: '#7AD6DA',
        borderRadius: 25,
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    toggle: {
        fontSize: 16,
        textAlign: 'center',
        // width: '40%',
        padding: 10,
    },
    active: {
        backgroundColor: '#fff',
        color: '#08979D',
        borderRadius: 25,
    },
});

export default ExpensesTab