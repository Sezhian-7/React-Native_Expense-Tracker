import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BackgroundLayout from '../Layout/BackgroundLayout';
import ExpensesContent from '../Components/ExpensesContent';
import ExpensesTab from '../Components/ExpensesTab';

interface ProfileProps {

}

const Profile: React.FC<ProfileProps> = ({ navigation }: any) => {
    const [formType, setFormType] = useState("expenses");
    const onBackArrowPress = () => {
        navigation.goBack()
    }
    const [isIncome, setIncome] = useState(false);
    const onPressExpense = () => {
        setIncome(false)
    }
    const onPressIncome = () => {
        setIncome(true)
    }
    
    return (
        <BackgroundLayout>
            <>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.addBlk}>
                        <View style={styles.addCenter}>
                            <ExpensesContent
                                screenTitle={`Add ${formType}`}
                                onBackArrowPress={onBackArrowPress}
                            />
                            <ExpensesTab
                                onPressExpense={onPressExpense}
                                onPressIncome={onPressIncome}
                                isIncome={isIncome}
                            />

                        </View>

                    </View>

                </ScrollView>
            </>
        </BackgroundLayout>


    );
}

const styles = StyleSheet.create({
    addBlk: {
        padding: 16,
        flex: 1,
        marginBottom: 40
    },
    addCenter: {
        flex: 1
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
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 30,
    },
    dropdown3BtnStyle: {
        // width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#444',
    },
    selectInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    selectColorInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    selectedIcon: { width: 30, height: 30, resizeMode: 'cover' },
    selectText: {
        textAlign: 'center',
        fontSize: 18,
    },

    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    dropdownRowImage: { width: 30, height: 30, resizeMode: 'cover' },
    dropdown3RowTxt: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 18,
        marginHorizontal: 12,
    },
    colorRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    color: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 50,
        marginRight: 10,
    },
    colorText: {
        color: '#000',
        fontSize: 18
    },
});

export default Profile