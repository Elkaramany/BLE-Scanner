import React from 'react';

import useBLE from './useBLE';

import List from './List'
import Connection from './Connection';
import { Alert } from 'react-native';


const Index = ({ }) => {
    const {
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        disconnectFromDevice,
        scanning,
        connecting
    } = useBLE();

    React.useEffect(() => {
        scanForPeripherals();
    }, [])

    return connectedDevice ?
        <Connection connectedDevice={connectedDevice} disconnectFromDevice={disconnectFromDevice} />
        :
        <List
            connectToDevice={connectToDevice}
            allDevices={allDevices}
            connecting={connecting}
            scanning={scanning}
        />

}

export default Index