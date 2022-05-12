/* eslint-disable prettier/prettier */
import React, {useCallback} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '../screens';
import BottomTabBar from './BottomTabBar';


const {HomeScreen, SearchScreen, MyLikeScreen, MyPageScreen, CategoryDetailScreen} = screens;

const Tab = createBottomTabNavigator();

function MainTab({setAppToken}) {
  const MyPageComp = useCallback((props) => { return (<MyPageScreen {...props} setAppToken={setAppToken} />) },[setAppToken]);
  return (
    <Tab.Navigator initialRouteName="Home" 
    tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="MyLike" component={MyLikeScreen} />
      <Tab.Screen name="MyPage" component={MyPageComp} />
      <Tab.Screen name="CategoryDetailScreen" component={CategoryDetailScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;