import React from 'react'
import BackgroundLayout from '../Layout/BackgroundLayout';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

interface ProfileSettingProps {

}

export const ProfileSetting: React.FC<ProfileSettingProps> = ({ }) => {
    return (
        <BackgroundLayout>
            <>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.statBlk}>
                        <Text>Profile Setting</Text>
                    </View>
                </ScrollView>
            </>
        </BackgroundLayout>
    );
}

const styles = StyleSheet.create({
    statBlk: {
        padding: 16,
        flex: 1,
    },
    statCenter: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 20,
    },
    dateBlk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

})

export default ProfileSetting