import React from 'react'
import { StyleSheet, Text } from 'react-native'


interface TextInputProps {
    content: string;
    addStyle?: {};
}

const TextInput: React.FC<TextInputProps> = ({ content, addStyle  }) => {
    return (
        <Text style={addStyle}>
            {content}
        </Text>
    );
}

export default TextInput