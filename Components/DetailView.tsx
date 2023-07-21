import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import TextInputField from './TextInput';
import { detailValues } from '../JsonData/data';
import Card from './Card';

interface DetailViewProps {
    data?: any

}

const DetailView: React.FC<DetailViewProps> = ({ data = detailValues }) => {
    return (

        <View style={styles.detailedView}>
            {detailValues.map((item, index) => {
                return <View key={index} style={[styles.detailCenter, (index === data.length - 1 ? { marginBottom: 0 } : null)]}>
                    <TextInputField addStyle={styles.title} content={item.date} />
                    <View style={styles.header}>
                        <View style={styles.headerTitle}>
                            <TextInputField addStyle={{ fontSize: 16, marginRight: 5 }} content="Income" />
                            <TextInputField addStyle={{ color: '#005257' }} content={item.income} />
                        </View>
                        <View style={styles.headerTitle}>
                            <TextInputField addStyle={{ fontSize: 16, marginRight: 5 }} content='Expences' />
                            <TextInputField addStyle={{ color: '#B91D1D' }} content={item.expense} />
                        </View>
                    </View>
                    {item.data.map((card, index) => {
                        return <Card
                            key={index}
                            category={card.category}
                            amount={card.amount}
                            iconName={card.iconName}
                            type={card.type}
                            iconColor={card.iconColor}
                        />
                    })}
                </View>
            })}
        </View>

    );
}

const styles = StyleSheet.create({
    detailedView: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    detailCenter: {
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'Varela-Regular',
        fontWeight: '600',
        letterSpacing:1,
        color:"#4D4D4D"
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerTitle: {
        flexDirection: 'row',
        columnGap: 5,
    }
})

export default DetailView
