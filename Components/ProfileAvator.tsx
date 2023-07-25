import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native';
import TextInputField from './TextInputField';
import MIcon from 'react-native-vector-icons/MaterialIcons';

interface ProfileAvatorProps {
    name?: string;
    email?: string;
    onPress?: any;
}

const ProfileAvator: React.FC<ProfileAvatorProps> = ({
    name = '',
    email = '',
    onPress,
}) => {
    return (
        <Pressable onPress={onPress} style={styles.usersBlk}>
            <View style={styles.usersCenter}>
                <View style={styles.detailsBlk}>
                    <View style={styles.avatar}>
                        <TextInputField addStyle={styles.avatarTitle} content='A' />
                    </View>
                    <View >
                        <TextInputField addStyle={styles.name} content={name} />
                        <TextInputField addStyle={styles.mail} content={email} />

                    </View>
                </View>
                <View style={styles.arrow}>
                    <MIcon name="chevron-right" size={32} color="#000" />
                </View>
            </View>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    usersBlk: {
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
        marginBottom: 20,
    },
    usersCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsBlk: {
        flexDirection: 'row',
        columnGap: 10,
        alignItems: 'center'
    },
    arrow: {

    },
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: "#006B65",
        borderRadius: 50,
        borderColor: '#006B6530',
        borderWidth: 5,
    },
    name: {
        fontSize: 18,
        color:'#000',
        fontWeight:'400'
    },
    mail: {
        fontSize: 16,
        color: '#7D7D7D'
    },
    collpase: {
        borderTopWidth: 2,
        borderColor: '#000'
    },
    content: {
        backgroundColor: '#fff',
    },
    avatarTitle:{
        fontSize: 26,
        color:'#fff'
    }
})

export default ProfileAvator
