import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';  // 네비게이션 훅 임포트

export default function LoadingScreen() {
  const navigation = useNavigation();  // 네비게이션 훅 사용

  const [fontsLoaded] = useFonts({
    GowunBatangBold: require('./assets/fonts/GowunBatangBold.ttf'),
    GowunBatang: require('./assets/fonts/GowunBatang.ttf'),
  });

  const [isLoading, setIsLoading] = useState(true);  // 로딩 상태 설정

  useEffect(() => {
    // 로딩 프로세스를 시뮬레이션 (예: 데이터 또는 자산을 가져오기)
    const loadApp = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Main');  // 3초 후 로딩 상태를 false로 설정
    }, 3000);  // 3초 동안 로딩

    return () => clearTimeout(loadApp);  // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  if (!fontsLoaded) {
    return null; // 폰트가 로드될 때까지 화면을 렌더링하지 않음
  }

  if (isLoading) {
    // 로딩 중일 때 로딩 화면을 렌더링
    
  return (
    <ImageBackground
      source={require('./assets/background.png')}  // 배경 이미지 경로
      style={styles.background}
    >

      <View style={styles.container}>
        <Text style={styles.titleText}>내 생에 가장 소중한 기록,</Text>
        <Text style={styles.mainText}>인생일기.</Text>
        <Image
          source={require('./assets/silver.png')}  // 하단의 그림 이미지 경로
          style={styles.image}
        />
      </View>
    </ImageBackground>
  );
}
return null;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'GowunBatang',
    fontSize: 30,
    textAlign: 'center',
    color: '#000',
    marginBottom: 0,
  },
  mainText: {
    fontFamily: 'GowunBatangBold',
    fontSize: 40,
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  image: {
    marginTop: 150,
    marginBottom: -250,
    width: 500,  // 필요에 따라 크기 조정
    height: 200,
    resizeMode: 'contain',
  },
});