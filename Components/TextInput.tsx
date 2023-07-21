import React from 'react'
import { StyleSheet, Text } from 'react-native'


interface TextInputTextInputFieldProps {
    content: string;
    addStyle?: {};
}

const TextInputField: React.FC<TextInputTextInputFieldProps> = ({ content, addStyle  }) => {
    return (
        <Text style={addStyle}>
            {content}
        </Text>
    );
}

export default TextInputField