import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import Onboarding3 from '../screens/Onboarding3';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Register from '../screens/Register';
import ScanHistory from '../screens/ScanHistory';
import ScanOptions from '../screens/ScanOptions';
import PrintPreview from '../screens/PrintPreview';
import Tracking from '../screens/Tracking';
import Scanner from '../screens/Scanner';
import RegisterChoice from '../screens/RegisterChoice';
import FreightForwarder from '../screens/FreightForwarder';
import LiveStream from '../screens/LiveStream';
import ScanDetails from '../screens/ScanDetails';
import ShipmentPreview from '../screens/ShipmentPreview';
import Status from '../screens/Status';

const Stack = createStackNavigator();

function AppNav() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='LiveStream'>
        <Stack.Screen name='Onboarding1' component={Onboarding1} />
        <Stack.Screen name='Onboarding2' component={Onboarding2} />
        <Stack.Screen name='Onboarding3' component={Onboarding3} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='FreightForwarder' component={FreightForwarder} />
        <Stack.Screen name='RegisterChoice' component={RegisterChoice} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='ScanHistory' component={ScanHistory} />
        <Stack.Screen name='ScanOptions' component={ScanOptions} />
        <Stack.Screen name='PrintPreview' component={PrintPreview} />
        <Stack.Screen name='Tracking' component={Tracking} />
        <Stack.Screen name='Scanner' component={Scanner} />
        <Stack.Screen name='LiveStream' component={LiveStream} />
        <Stack.Screen name='ScanDetails' component={ScanDetails} />
        <Stack.Screen name='ShipmentPreview' component={ShipmentPreview} />
        <Stack.Screen name='Status' component={Status} />
        </Stack.Navigator>
    );
}

export default AppNav;