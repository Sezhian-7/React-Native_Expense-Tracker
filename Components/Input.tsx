import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Keyboard } from 'react-native';
import TextInputField from './TextInputField';


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
    containerStyle?: {}
    icon?: any;

}

export const Input: React.FC<InputProps> = ({
    addStyle,
    onChange,
    value,
    placeholderText,
    containerStyle,
    label = '',
    isMultiline,
    noOfLines,
    onFocus,
    onBlur,
    error,
    errorText,
    id,
    touched,
    icon
}) => {
    const [isFocused, setFocused] = useState(false);

    return (
        <View style={[styles.inputContainer, containerStyle]}>
            {label ? <TextInputField addStyle={styles.label} content={label} /> : null}
            <TextInput
                id={id}
                style={[
                    styles.input,
                    addStyle,
                    { borderColor: error ? '#DF3535' : isFocused ? '#08979D' : '#0000001A' },
                    isMultiline ? { textAlignVertical: 'top' } : null,
                    icon ? { paddingRight: 45 } : null,
                ]}
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
            {icon ? <View style={styles.icon}>{icon}</View> : null}

            {(error && touched) && <TextInputField addStyle={styles.error} content={error} />}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 30
    },
    icon: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    label: {
        marginBottom: 10,
        fontSize: 18,
        fontFamily: 'Varela-Regular',
        color: '#000'
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