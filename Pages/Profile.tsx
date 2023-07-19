import React from 'react'
import { Text, View } from 'react-native';
import BackgroundLayout from '../Layout/BackgroundLayout';

interface ProfileProps {

}

export const Profile: React.FC<ProfileProps> = ({ }) => {
    return (
        <BackgroundLayout>
            <View>
                <Text>
                    Profile page
                </Text>
            </View>
        </BackgroundLayout>


    );
}