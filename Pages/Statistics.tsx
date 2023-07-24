import React, { useState } from 'react'
import BackgroundLayout from '../Layout/BackgroundLayout';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from "victory-native";
import { Dimensions } from "react-native";
import ExpensesContent from '../Components/ExpensesContent';
import ExpensesTab from '../Components/ExpensesTab';
import TextInputField from '../Components/TextInputField';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import Card from '../Components/Card';
import { statisticList, incomeStatisticList } from '../JsonData/statisticsData';


const { width, height } = Dimensions.get("window");

interface StatisticsProps {

}

export const Statistics: React.FC<StatisticsProps> = ({ navigation }: any) => {
    const [selected, setSelected] = useState('');
    const monthAndDate = `${moment(selected || new Date()).format('MMMM')} ${moment(selected || new Date()).format('YYYY')}`
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ];
    const [formType, setFormType] = useState("Statistics");
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
    const handlePrev = () => {
        let month = moment(selected || new Date()).subtract(1, 'months').format('YYYY-MM-DD');
        setSelected(month);
    }

    const handleNext = () => {
        let month = moment(selected || new Date()).add(1, 'months').format('YYYY-MM-DD');
        setSelected(month);
    }

    const expenseColors = ["#31A0D7", "#845FD1", "#EF731B", "#F4CB21"]

    const incomeColors = ["#34BF03", "#9948A6", "#2A96A2", "#16BAC5"]

    return (
        <BackgroundLayout>
            <>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.statBlk}>
                        <ExpensesContent
                            screenTitle={`${formType}`}
                            onBackArrowPress={onBackArrowPress}
                        />
                        <ExpensesTab
                            onPressExpense={onPressExpense}
                            onPressIncome={onPressIncome}
                            isIncome={isIncome}
                        />
                        <View style={styles.formBlk}>
                            <View style={styles.dateBlk}>
                                <Pressable onPress={handlePrev}>
                                    <MIcon name="chevron-left" size={32} color="#000" />
                                </Pressable>
                                <TextInputField addStyle={{ fontSize: 18 }} content={monthAndDate} />
                                <Pressable onPress={handleNext}>
                                    <MIcon name="chevron-right" size={32} color="#000" />
                                </Pressable>
                            </View>
                            <VictoryPie
                                width={350}
                                height={350}
                                colorScale={isIncome ? incomeColors : expenseColors}
                                innerRadius={70}
                                labelRadius={({ innerRadius }: any) => (width * 0.39 + innerRadius) / 2.5}
                                padAngle={2}
                                style={{
                                    labels: {
                                        fontSize: 16,
                                        fill: '#fff',
                                    }
                                }}
                                data={[
                                    { x: "Cats", y: 40, label: '40%' },
                                    { x: "Dogs", y: 20, label: '20%' },
                                    { x: "Birds", y: 24, label: '24%' },
                                    { x: "Ducks", y: 16, label: '16%' },
                                ]}
                            />

                            {!isIncome ? <>
                                {statisticList.map((card, index) => {
                                    return <Card
                                        key={index}
                                        category={card.category}
                                        amount={card.amount}
                                        iconName={card.iconName}
                                        type={card.type}
                                        iconColor={card.iconColor}
                                    />
                                })}
                            </> : <>
                                {incomeStatisticList.map((card, index) => {
                                    return <Card
                                        key={index}
                                        category={card.category}
                                        amount={card.amount}
                                        iconName={card.iconName}
                                        type={card.type}
                                        iconColor={card.iconColor}
                                    />
                                })}
                            </>}

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

export default Statistics