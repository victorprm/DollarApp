import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';




export default function App() {
  
  var [totalReal, setTotalReal] = useState('');
  var [totalDollar, setTotalDollar] = useState('');
  var [cotacao, setcotacao] = useState('');

  function CalcularTotal(){

    //TOTAL DOLLAR = QTDREAL / COTAÇÃO DO DIA DO DOLLAR
    totalDollar = parseFloat(totalReal) / parseFloat(cotacao);

    alert("Victor dev: " + totalDollar.toFixed(2));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicativo Dolar</Text>

      <TextInput style={styles.campo} placeholder="Total em reais..." keyboardType="numeric" onChangeText={(totalReal) => setTotalReal(totalReal)} />
      <TextInput style={styles.campo} placeholder="Cotação do dia" onChangeText={(cotacao) => setcotacao(cotacao)} keyboardType="numeric"/>

      <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
        <Text style={styles.textoBotao}>CALCULAR</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3CB371"

  },

  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: "#FFF"
  },

  campo: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
    color: "#008000"
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#008000',
    paddin: 10,
    
  },

  textoBotao: {
    fontSize: 20,
    color: "#FFFFFF"
  }	

  

});