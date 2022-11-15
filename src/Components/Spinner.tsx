import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner: React.FC<{ size?: boolean, spinnerColor?: string }> = ({ size, spinnerColor }) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ActivityIndicator
                size={size == true ? 'large' : 'small'}
                color={spinnerColor || 'blue'}
            />
        </View>
    );
}

export default Spinner;