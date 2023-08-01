import React, { useState } from 'react'
import BackgroundLayout from '../Layout/BackgroundLayout';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ExpensesContent from '../Components/ExpensesContent';
import Input from '../Components/Input';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import TextInputField from '../Components/TextInputField';
import { transactionData } from '../JsonData/data';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
                                                <View style={styles.cardWrapper}>
                                                    <View style={styles.itemCard}>
                                                        <Icon style={[styles.iconGreen, { backgroundColor: item.iconColor }]} name={item.iconName} size={28} color="#fff" />
                                                        <TextInputField addStyle={{ fontSize: 15 }} content={item.foodTitle} />
                                                    </View>
                                                    <TextInputField addStyle={styles.itemAbsoulte} content={item.income} />
                                                </View>

                                                {
                                                    item.data.map((res: any) => {
                                                        return (
                                                            <View>


                                                                <View style={styles.cardWrapper} >
                                                                    <TextInputField addStyle={styles.card} content={res.category} />
                                                                    <TextInputField addStyle={styles.currency} content={res.amount} />
                                                                </View>
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
    currency: {
        position: 'absolute',
        right: 25,
        top: 25,
    },
    iconGreen: {
        backgroundColor: '#3AE2C4',
        padding: 10,
        borderRadius: 100,
        borderColor: '#006B6530',
        borderWidth: 5,
    },
    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20,
        borderBottomWidth: .2,
        borderBottomColor:'#708090',
        paddingRight: 20,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:10,
        position: 'relative',
        width: '100%'
    },
    itemAbsoulte: {
        position: 'absolute',
        right: 20,
        top: 40
    }
})

export default Transaction 