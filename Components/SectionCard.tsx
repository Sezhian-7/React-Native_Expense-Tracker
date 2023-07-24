import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TextInputField from './TextInputField';
import MIcon from 'react-native-vector-icons/MaterialIcons';


interface SectionCardProps {
    sectionTitle?: string;
    data?: any;
    icon?: any;
}

const SectionCard: React.FC<SectionCardProps> = ({
    sectionTitle = '',
    data,
    icon
}) => {
    return (
        <View >
            {sectionTitle ? <TextInputField addStyle={styles.sectionTitle} content={sectionTitle} /> : null}
            <View style={styles.sectionCardBlk}>
                {data.map((item: any) => {
                    return (
                        <View style={styles.cardWrapper}>
                            <TextInputField addStyle={styles.card} content={item.text} />
                            {icon ? <MIcon name="arrow-forward-ios" size={20} style={styles.arrowIcon} /> : null}
                        </View>
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    sectionBlk: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#4D4D4D',
        marginBottom: 20,
        fontFamily: 'Varela-Regular',
    },
    sectionCardBlk: {
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 3,
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
    cardWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    arrowIcon: {
        position: 'absolute',
        top: 20,
        right: 10,
    }
})

export default SectionCard
