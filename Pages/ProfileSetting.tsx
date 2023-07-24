import React, { useState } from 'react'
import BackgroundLayout from '../Layout/BackgroundLayout';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ExpensesContent from '../Components/ExpensesContent';
import SectionCard from '../Components/SectionCard';
import { accountSettingList, supportList, DeleteList } from '../JsonData/ProfileSectionData';

interface ProfileSettingProps {

}

export const ProfileSetting: React.FC<ProfileSettingProps> = ({ navigation }: any) => {
    const [formType, setFormType] = useState("Profile");
    const onBackArrowPress = () => {
        navigation.goBack()
    }
    return (
        <BackgroundLayout>
            <>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.statBlk}>
                        <ExpensesContent
                            screenTitle={`${formType}`}
                            onBackArrowPress={onBackArrowPress}
                        />
                        <View style={styles.formBlk}>
                            <SectionCard
                                sectionTitle='Account settings'
                                data={accountSettingList}
                                icon={true}
                            />
                            <View style={{height:20}} />
                             <SectionCard
                                sectionTitle='Support'
                                data={supportList}
                                icon={true}
                            />
                            <View style={{height:20}} />
                             <SectionCard
                                sectionTitle=''
                                data={DeleteList}
                            />
                        </View>
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
    formBlk: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },

})


export default ProfileSetting