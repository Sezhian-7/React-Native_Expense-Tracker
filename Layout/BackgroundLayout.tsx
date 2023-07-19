import React, { ReactElement } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

interface BackgroundLayoutProps {
    children: ReactElement;
}

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bgImg} source={require('../Assets/png/background.png')} >
                {children}
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImg: {
        flex: 1,        
        resizeMode: 'cover'
    }
})

export default BackgroundLayout
