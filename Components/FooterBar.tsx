import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';


interface FooterBarProps {
    onPressAdd?: () => any

}

const FooterBar: React.FC<FooterBarProps> = ({ onPressAdd }) => {

    return (
        <View style={styles.footerBlk}>
            <View style={{}}>
                <View style={styles.footerCenter}>
                    <TouchableOpacity>
                        <Image source={require('../Assets/png/Home.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Assets/png/Statistics.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressAdd}>
                        <View style={styles.addBlk}>
                            <Image
                                source={require('../Assets/png/Add.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Assets/png/Money.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Assets/png/Settings.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerBlk: { 
        padding: 20,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 15,
    },
    footerCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addBlk: {
        backgroundColor: '#08979D',
        padding: 20,
        borderRadius: 100,
        position: 'absolute',
        bottom: -10,
        alignSelf: 'center',
        borderColor: '#fff',
        borderWidth: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    imageback: {
        width: 88,
        height: 88,
        marginBottom: 50,
    },
});

export default FooterBar;
