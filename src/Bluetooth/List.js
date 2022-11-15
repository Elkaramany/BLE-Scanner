import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'

import { Spinner } from '../Components'

const List = ({ connectToDevice, allDevices, connecting, scanning }) => {


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onLongPress={async () => {
                    connectToDevice(item)
                }}
                style={styles.itemContainer}>
                <Text>ID: {item.id}</Text>
                <Text>Name: {item?.name || 'No Name available'}</Text>
                <Text>Manufaturer: {item.manufacturerData}</Text>
                <Text>MTU: {item.mtu}</Text>
                <Text>RSSI: {item.rssi}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {scanning && <Text>Scanning for devices...</Text>}
            <Text>Long press on a device to be able to connect</Text>
            <View style={{ marginVertical: 5 }} />
            {connecting && <Spinner />}

            <FlatList
                data={allDevices}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }, itemContainer: {
        marginVertical: 5,
        padding: 10,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1
    }
})

export default List;