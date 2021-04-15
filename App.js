import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() { 
  const [A, setInputA] = useState('');
  const [H, setInputH] = useState('');
  const [K, setInputK] = useState('');
  const [B, setInputB] = useState('');
  const [result, setInputResult] = useState('');

  const pressHandler = () =>{
      let a = Number.parseInt(A);
      let h = Number.parseInt(H);
      let k = Number.parseInt(K);
      let b = Number.parseInt(B);
      if(A!='' && H!='' && K!='' && B!=''){
      let S = 1/2*a*h;
      let Sp = 1/2*k*b;
        setInputResult('Площадь треугольника равна '+ S + '\n' + '\n' + 'Площадь прямоугольного треугольника равна ' + Sp + '\n' );
    }
    else if(A!='' && H!=''){
      let S = 1/2*a*h;
      setInputResult('Площадь треугольника равна '+ S);
    }
    else if (K!='' && B!=''){
      let Sp = 1/2*k*b;
      setInputResult('Площадь прямоугольного треугольника равна ' + Sp );
    }
    else{
     Alert.alert("Поля не должны быть пустыми!");
    }
  }

  return (
    <View style = {{backgroundColor: '#202020', width: '100%', height: '100%'}}>
      <View style ={styles.header}>
        <Text style={styles.headerText}>Площадь треугольника</Text> 
      </View>

      <Text style = {{paddingTop:10,color: '#ff7f58',fontWeight: 'bold', fontSize: 17, paddingLeft:10}}
       paddingTop>Заполните необходимые поля:</Text>

      <View style = {styles.block}>
      <Text style ={styles.textInput}>Введите основание</Text>
        <TextInput style = {styles.input} keyboardType='numeric' placeholder= 'a' placeholderTextColor='#ccc'
        value = {A} onChangeText={text => setInputA(text)+setInputResult('')}/>
        <Text style ={styles.textInput}>Введите высоту</Text>
        <TextInput style = {styles.input} keyboardType='numeric' placeholder= 'h' placeholderTextColor='#ccc'
         value = {H} onChangeText={text => setInputH(text)+setInputResult('')}/>
      </View>
      <View style = {{width: '100%', height: 20, borderBottomWidth: 1, borderBottomColor: '#A9A9A9',}}></View>

      <Text style = {{paddingTop:20,color: '#ff7f58',fontWeight: 'bold', fontSize: 17, paddingLeft:10}}
       paddingTop>Заполните необходимые поля для прямоугольного треугольника:</Text>
      <View style = {styles.block}>
      <Text style ={styles.textInput}>Введите первый катет</Text>
        <TextInput style = {styles.input} keyboardType='numeric' placeholder= 'a' placeholderTextColor='#ccc'
        value = {K} onChangeText={text => setInputK(text)+setInputResult('')}/>
        <Text style ={styles.textInput}>Введите второй катет</Text>
        <TextInput style = {styles.input} keyboardType='numeric' placeholder= 'b' placeholderTextColor='#ccc'
         value = {B} onChangeText={text => setInputB(text)+setInputResult('')}/>
      </View>

      <View style = {{ paddingTop: 20,  flexDirection: 'row', justifyContent: 'center',}}>
        <Button  title = "Найти" onPress = {pressHandler} color = '#ff7f58'/>
      </View>

      <Text style = {{color:'#ff7f58', paddingTop: 10, fontSize: 25, paddingLeft: 10, fontWeight: 'bold'}}>Ответ:</Text>
      <Text style = {styles.res}>{result}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
      paddingLeft: 15,
      justifyContent: 'center',
      marginBottom: 15,
      marginTop: 10
  },
  input: {
      color: '#fff',
      width: '20%',
      textAlign: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ff7f58',
  },
  textInput: {
    paddingTop: 10,
    color: '#ff7f58',
},
  text: {
      color: '#ff7f58',
      fontWeight: 'bold'
  },
  res: {
    
      color: '#fff',
      marginTop: 5,
      marginLeft: 15,
      fontSize: 17
  },
  header: {
      height: 90,
      backgroundColor: '#ff7f58',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign:'center',
    paddingTop: 35,
    paddingBottom: 20
  }
});
