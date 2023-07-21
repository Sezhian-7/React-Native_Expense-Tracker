import React from 'react'
import BackgroundLayout from '../Layout/BackgroundLayout';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from "victory-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

interface StatisticsProps {

}

export const Statistics: React.FC<StatisticsProps> = ({ }) => {
    const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ];
    return (
        <BackgroundLayout>
            <>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.statBlk}>
                        <Text>Statistics Page</Text>
                        <VictoryPie
                            width={350}
                            height={400}                           
                            colorScale={["#31A0D7", "#845FD1", "#EF731B", "#2A96A2", "F4CB21"]}
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

export default Statistics