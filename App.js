import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Warning: ...']);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>스파르타 코딩클럽
      </View>
    </View>
  );
 }

 const styles = StyleSheet.create({
  container: {
    //영역을 잡는 속성
    //flex: 1은 전체 화면을 가져간다는 뜻
    flex: 1,
    //영역의 배경 색
    backgroundColor: '#fff',
    //아래 두 속성은 영역 안의 컨텐츠들의 배치
    justifyContent:"center",
    alignContent:"center"
  },
  textContainer: {
    //영역의 바깥 공간 이격
    margin:10,
    //영역 안의 컨텐츠 이격 공간
    padding: 10,
    //테두리의 구부러짐을 결정
    borderRadius:10,
    //테두리의 두께를 결정
    borderWidth:2,
    //테두리 색을 결정
    borderColor:"#000",
    //테구리 스타일. 실선은 solid
    borderStyle:"dotted",
  },
  textStyle: {
    //글자 색을 결정. rgb, 값 이름, 색상코드 모두 가능
    color:"red",
    //글자의 크기를 결정
    fontSize:20,
    //글자의 두께를 결정
    fontWeight:"700",
    //가로기준으로 글자의 위치를 결정
    textAlign:"center"
  }
   });
 