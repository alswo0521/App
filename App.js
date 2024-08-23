import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';  // 메인 화면 컴포넌트
import LoadingScreen from './LoadingScreen';  // 로딩 화면 컴포넌트
import SignupScreen from './SignupScreen';
import RecordingScreen from './RecordingScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen 
          name="Main" 
          component={MainScreen}
          options={{ title: '메인 화면', headerShown: false }}  // 헤더를 숨기고 제목 설정
        />
        <Stack.Screen 
          name="Loading" 
          component={LoadingScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="Recording" 
          component={RecordingScreen}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
