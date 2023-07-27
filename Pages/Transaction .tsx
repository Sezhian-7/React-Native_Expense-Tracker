import React, { useState } from 'react'
import BackgroundLayout from '../Layout/BackgroundLayout';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ExpensesContent from '../Components/ExpensesContent';
import Input from '../Components/Input';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import TextInputField from '../Components/TextInputField';
import { transactionData } from '../JsonData/data';

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
                                id={'earch'}
                                placeholderText='Search'
                                value={searchValue}
                                onChange={(value: string) => {
                                    setSearchValue(value);
                                }}
                                containerStyle={{ marginBottom: 10 }}
                                icon={<MIcon name="search" size={32} color="#08979D" />}

                            />
                            <View style={{ height: 20 }} />
                            <View >
                                {transactionData.map((item: any) => {
                                    return (
                                        <View>
                                            <TextInputField addStyle={styles.title} content={item.date} />
                                            <View style={styles.sectionCardBlk}>
                                                {
                                                    item.data.map((res: any) => {
                                                        return (
                                                            <View style={styles.cardWrapper} >
                                                                <TextInputField addStyle={styles.card} content={res.category} />
                                                                <TextInputField addStyle={styles.currency} content={res.amount} />                                                            
                                                            </View>
                                                        )
                                                    })
                                                }
                                            </View>
                                            <View style={{ height: 20 }} />
                                        </View>
                                    )
                                })}
                            </View>

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
    sectionCardBlk: {
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 3,
    },
    cardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    card: {
        color: '#272727',
        fontSize: 18,
        padding: 20,
        borderBottomWidth: .5,
        borderBottomColor: '#00000030',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        width: '100%'

    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Varela-Regular',
        fontWeight: '600',
        letterSpacing: 1,
        color: "#4D4D4D"
    },  
    currency:{
        position:'absolute',
        right:25,
        top:25,
    }
})

export default Transaction 