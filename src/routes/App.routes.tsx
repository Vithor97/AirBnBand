import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import AppTabs from './AppTabs.routes'

const { Navigator, Screen } = createStackNavigator();

function AppRoute(){
    return (
        <Navigator screenOptions={{headerShown: false}}>
            {/* <Screen name="Landing" component={Landing}/> */}
            <Screen name="Tabs" component={AppTabs}/>
        </Navigator>

    )
}

export default AppRoute;