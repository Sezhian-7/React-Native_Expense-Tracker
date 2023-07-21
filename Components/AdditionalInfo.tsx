import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInputField from './TextInput';


interface AdditionalInfoProps {

}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ }) => {
    return (
        <View style={styles.additionalBlk}>
            <TextInputField addStyle={{ fontSize: 20, fontWeight: '500', color: '#000' }} content='Additional informations' />
            <View style={styles.cardBlk}>
                <View style={styles.card}>
                    <Icon style={styles.icon} name="piggy-bank" size={32} color="#08979D" />
                    <TextInputField addStyle={styles.greenText} content='Savings' />
                </View>
                <View style={styles.card}>
                    <Icon style={styles.icon} name="calendar-alt" size={32} color="#08979D" />
                    <TextInputField addStyle={styles.greenText} content='Remainder' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    additionalBlk: {
        flex: 1,
        marginBottom: 40,
        marginTop:40,
    },
    cardBlk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: 15,
        marginTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        paddingVertical: 25,
        paddingHorizontal: 50,
        alignItems: 'center',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    icon: {
        backgroundColor: 'rgba(8, 151, 157, 0.2)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,

    },
    greenText: {
        color: '#005257',
        fontWeight: '500',
    }
})

export default AdditionalInfo
