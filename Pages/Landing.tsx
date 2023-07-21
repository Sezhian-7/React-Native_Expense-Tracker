import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import BackgroundLayout from '../Layout/BackgroundLayout'
import FooterBar from '../Components/FooterBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NaviTabs from '../Components/NaviTabs';
import NoDataFound from '../Components/NoDataFound';
import AdditionalInfo from '../Components/AdditionalInfo';
import DetailView from '../Components/DetailView';
import DateCalendar from '../Components/DateCalendar';
import moment from 'moment';
import TextInputField from '../Components/TextInputField';



interface LandingProps {

}

const Landing: React.FC<LandingProps> = ({ navigation }: any) => {
    const data = true;
    const [showCalendar, setShowCalendar] = useState(false);
    const maxDate = moment(new Date()).format('YYYY-MM-DD').toString();
    const [selected, setSelected] = useState('');
    const monthAndDate = `${moment(selected || new Date()).format('MMMM')} ${moment(selected || new Date()).format('YYYY')}`
    const onDayPress = (day: any) => {
        setSelected(day.dateString);
        setShowCalendar(false);
    }

    return (
        <BackgroundLayout>
            <>
                <SafeAreaView>

                    <ScrollView >
                        <View style={styles.wrapper}>
                            <View style={styles.headerBlk}>
                                <View style={styles.headerCenter}>
                                    <View>
                                        <TextInputField addStyle={styles.textSmall} content='Welcome back' />
                                        <TextInputField addStyle={styles.textBold} content='Alan Donald' />
                                    </View>
                                    <View style={styles.headerIcons}>
                                        <Icon name="notifications" size={32} color="#fff" />
                                        <Icon name="more-vert" size={32} color="#fff" />
                                    </View>
                                </View>
                            </View>
                            <TextInputField addStyle={styles.textLg} content='Manage your expenses' />
                            <DateCalendar
                                prevNext={true}
                                month={monthAndDate}
                                onDateIconClick={() => setShowCalendar(!showCalendar)}
                                show={showCalendar}
                                maxDate={maxDate}
                                selected={selected}
                                onDayPress={onDayPress}
                            />
                            <NaviTabs />
                            {data ? <>
                                <DetailView />
                            </> : <>
                                <NoDataFound />
                            </>
                            }
                            <AdditionalInfo />

                        </View>
                    </ScrollView>
                </SafeAreaView>



                {/* <FooterBar
                    onPressAdd={() => navigation.navigate('Profile')}
                /> */}
            </>

        </BackgroundLayout>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    headerBlk: {
        marginBottom: 10
    },
    headerCenter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerIcons: {
        flexDirection: 'row',
        columnGap: 10
    },
    textSmall: {
        fontSize: 14,
        fontWeight: '400',
        color: '#fff'
    },
    textBold: {
        fontSize: 18,
        fontWeight: '400',
        color: '#fff'
    },
    textLg: {
        fontSize: 32,
        marginBottom: 15,
        fontFamily: 'Varela-Regular',
        color: '#fff'
    },
})

export default Landing
