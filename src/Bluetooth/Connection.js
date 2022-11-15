import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


const Connection = ({ connectedDevice, disconnectFromDevice }) => {

    return (
        <View style={localStyles.container}>
            <View style={{ marginTop: 100 }} />

            <Text>Connected To {connectedDevice.name}</Text>

            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 50 }} >
                <TouchableOpacity onPress={() => disconnectFromDevice(connectedDevice)}
                    style={localStyles.bottomButton} >

                    <Text style={{ color: 'white' }}>Disconnect</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, bottomButton: {
        width: '85%',
        borderRadius: 35,
        padding: 20,
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Connection