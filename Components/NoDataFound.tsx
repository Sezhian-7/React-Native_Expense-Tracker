import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import TextInputField from './TextInput';


interface NoDataFoundProps {

}

const NoDataFound: React.FC<NoDataFoundProps> = ({ }) => {
    return (
        <View style={styles.noDataBlk}>
            <Image style={styles.img} source={require('../Assets/png/Dog.png')} />
            <TextInputField addStyle={{ fontSize: 20, fontWeight: '500', color: '#000' }} content='No data available' />
        </View>
    );
}

const styles = StyleSheet.create({
    noDataBlk: {
        paddingVertical: 80,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
    },
    img: {
        marginBottom: 15,
    }
})

export default NoDataFound
