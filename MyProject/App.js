import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';  // expo-font 패키지 사용
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  // Sinminsang 폰트를 로드합니다.
  const [fontsLoaded] = useFonts({
    Sinminsang: require('./assets/fonts/Sinminsang.ttf'),  // 폰트 경로 지정
  });

  if (!fontsLoaded) {
    return null; // 폰트가 로드되지 않았다면 UI를 렌더링하지 않습니다.
  }

  return (
    <ImageBackground
        source={require('./assets/background.png')}
        style = {styles.background}
        >
      <StatusBar style="auto" />
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>도움이 필요하신가요 ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.helpIcon}>
          <Text style={styles.helpIconText}>?</Text>
        </TouchableOpacity>
      </View >
      <View style={styles.body}>
        <Text style={styles.dateText}>2024 - 08 - 19 (월)</Text>
        <Text style={styles.questionText}>오늘 당신의 하루는 어떠셨나요?</Text>
        <TouchableOpacity style={styles.camerButton}>
          <Image source={require('./assets/camera.png')} style={styles.cameraImage} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.writeDiaryButton}>
          <Text style={styles.writeDiaryText}>오늘의 일기 쓰기 </Text>
          <Icon name="chevron-right" size={24} color= "#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/calendar.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>일기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/home.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>처음으로</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('./assets/profile.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>내 정보</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  header: {
    position:'absolute',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
    top: 60,
    right: 5,
  },
  helpButton: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent:'flex-start',
    backgroundColor: '#C3E5D0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    right: 40,
    shadowColor: '#000',    // 그림자의 색상
    shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
    shadowOpacity: 0.25,    // 그림자의 불투명도 (0부터 1까지)
    shadowRadius: 3.84,     // 그림자의 반경
  },
  helpText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'serif',
  },
  helpIcon: {
    position: 'absolute',
    right: -15,
    backgroundColor: '#000000',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',    // 그림자의 색상
    shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
    shadowOpacity: 0.5,    // 그림자의 불투명도 (0부터 1까지)
    shadowRadius: 3.84,     // 그림자의 반경
  },
  helpIconText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily: 'serif',
    marginTop: -5
  },
  body: {
    width:'100%',
    alignItems:'center'
  },
  dateText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop:-50,
    marginBottom: 50,
    fontFamily: 'serif',  
  },
  questionText: {
    fontSize: 30,
    marginVertical: 10,
    fontFamily: 'Sinminsang',  // 여기서 Sinminsang 폰트를 적용합니다.
    marginBottom: 20,
  },
  cameraImage: {
    width: 200,
    height: 150,
    marginTop:30,
    marginBottom: 30,
    shadowColor: '#000',    // 그림자의 색상
    shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
    shadowOpacity: 0.5,    // 그림자의 불투명도 (0부터 1까지)
    shadowRadius: 3.84,     // 그림자의 반경
  },
  writeDiaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#407e67',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 30,
    marginBottom: 50,
    shadowColor: '#000',    // 그림자의 색상
    shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
    shadowOpacity: 0.5,    // 그림자의 불투명도 (0부터 1까지)
    shadowRadius: 3.84,     // 그림자의 반경
  },
  writeDiaryText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Sinminsang',  // 여기서 Sinminsang 폰트를 적용합니다.
  },
  footer: {
    position: 'absolute',
    bottom: 23,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
    paddingHorizontal: 0,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,

    // iOS에서 그림자
    shadowColor: '#000',    // 그림자의 색상
    shadowOffset: { width: 0, height: 2 }, // 그림자의 오프셋 (x, y)
    shadowOpacity: 0.5,    // 그림자의 불투명도 (0부터 1까지)
    shadowRadius: 3.84,     // 그림자의 반경
  },
  footerButton: {
    alignItems: 'center',
    
  },
  cameraButton:{
    alignItems: 'center',
  },
  footerIcon: {
    width: 60,
    height: 60,
  },
  footerText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Sinminsang',  // 여기서 Sinminsang 폰트를 적용합니다.
  },
});