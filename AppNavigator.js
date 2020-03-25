import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Category from './screens/Category';
import Categories from './screens/Categories';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const CategoryStack = createStackNavigator({
    Categories,
    Category
});
CategoryStack.navigationOptions = {
    tabBarLabel: 'Home'
}
const CartStack = createStackNavigator({
    Cart
});
CartStack.navigationOptions = {
    tabBarLabel: 'Cart'
}
const OrederStack = createStackNavigator({ Orders });
OrederStack.navigationOptions = {
    tabBarLabel: 'Oreders'
}
const SettingStack = createStackNavigator({ Settings })
SettingStack.navigationOptions = {
    tabBarLabel: 'Settings'
}

const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    CartStack,
    OrederStack,
    SettingStack
})
export default AppNavigator;