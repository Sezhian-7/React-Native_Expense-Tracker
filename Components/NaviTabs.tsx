import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextInput from './TextInput';


interface NaviTabsProps {

}

const NaviTabs: React.FC<NaviTabsProps> = ({ }) => {
    return (
        <View style={styles.headerTabsBlk}>
            <View>
                <TextInput addStyle={styles.title} content='Income' />
                <TextInput addStyle={[styles.counts, { color: '#005257' }]} content={`₹ ${'1,50,000'}`} />
            </View>
            <View style={styles.vr} />
            <View>
                <TextInput addStyle={styles.title} content='Expense' />
                <TextInput addStyle={[styles.counts, { color: '#B91D1D' }]} content={`₹ ${'20,000'}`} />
            </View>
            <View style={styles.vr} />

            <View>
                <TextInput addStyle={styles.title} content='Total' />
                <TextInput addStyle={[styles.counts, { color: '#4D4D4D' }]} content={`₹ ${'1,30,000'}`} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerTabsBlk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 20,
        marginBottom: 20,
    },
    vr: {
        height: 52,
        width: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 5,
    },
    counts: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    }
})

export default NaviTabs
