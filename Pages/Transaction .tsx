import React, { useState } from 'react'
import BackgroundLayout from '../Layout/BackgroundLayout';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ExpensesContent from '../Components/ExpensesContent';
import Input from '../Components/Input';
import MIcon from 'react-native-vector-icons/MaterialIcons';

interface TransactionProps {

}

export const Transaction: React.FC<TransactionProps> = ({ }) => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <BackgroundLayout>
            <>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.statBlk}>
                        <ExpensesContent screenTitle='Detailed report' />
                        <View style={styles.listCenter}>
                            <Input
                                id={'search'}
                                placeholderText='search'
                                value={searchValue}
                                onChange={(value: string) => {
                                    setSearchValue(value);
                                }}
                                containerStyle={{ marginBottom: 10 }}
                                icon={<MIcon name="search" size={32} color="#08979D" />}
                                
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
    listCenter: {
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 20,
    },

})

export default Transaction 