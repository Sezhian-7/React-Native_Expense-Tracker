import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import TextInputField from './TextInputField';

interface ModifyButtonProps {
    onClick?: () => any;
    text?: string;
    addStyle?: {}
}

const ModifyButton: React.FC<ModifyButtonProps> = ({
    onClick,
    text = '',
    addStyle
}) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <View>
                <TextInputField addStyle={[styles.addBtn, addStyle]} content={text} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    addBtn: {
        backgroundColor: '#08979D',
        padding: 20,
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 18,
        color: '#fff'
    }
})

export default ModifyButton