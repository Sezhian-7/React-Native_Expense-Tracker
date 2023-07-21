import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import TextInputField from './TextInput';


interface InputProps {
    addStyle?: {};
    onChange?: any;
    value?: string;
    placeholderText?: string;
    label?: string;
    isMultiline?: boolean;
    noOfLines?: number;
    onFocus?: () => any;
    onBlur?: any;
    error?: any;
    errorText?: any;
    id?: any;
    touched?: any;
}

export const Input: React.FC<InputProps> = ({
    addStyle,
    onChange,
    value,
    placeholderText,
    label = '',
    isMultiline,
    noOfLines,
    onFocus,
    onBlur,
    error,
    errorText,
    id,
    touched
}) => {
    const [isFocused, setFocused] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <TextInputField addStyle={styles.label} content={label} />
            <TextInput
                id={id}
                style={[styles.input, addStyle, { borderColor: error ? '#DF3535' : isFocused ? '#08979D' : '#0000001A' }, isMultiline ? { textAlignVertical: 'top' } : null]}
                onChangeText={onChange}
                value={value}
                placeholder={placeholderText}
                onPressOut={Keyboard.dismiss}
                multiline={isMultiline}
                numberOfLines={noOfLines}
                placeholderTextColor='#0000005E'
                onFocus={() => {
                    onFocus ? onFocus() : null;
                    setFocused(true);
                }}
                onBlur={() => setFocused(false)}
            />
            {(error && touched) && <TextInputField addStyle={styles.error} content={error} />}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 30
    },
    label: {
        marginBottom: 10,
        fontSize: 18,
        fontFamily: 'Varela-Regular'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        fontSize: 18,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 10,
        shadowRadius: 2,
        elevation: 5,
        color: '#000',
        fontFamily: 'Varela-Regular',
        borderWidth: 0.5,
    },
    error: {
        color: '#DF3535',
        marginLeft: 5,
        marginTop: 7,
    }
})
export default Input