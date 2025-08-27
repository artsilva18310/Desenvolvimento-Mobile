// App.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>

        </View>
        <View>
          <Text style={styles.greeting}>React Native</Text>
          <Text style={styles.subtitle}>Avaliação dia 27/08</Text>
        </View>
      </View>
 
      {/* Chamada para ação */}
      <View style={styles.ctaBox}>
<Text style={styles.ctaText}>Batatas são macias.</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfdff',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 250,
  },

  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  ctaBox: {
    backgroundColor: '#ffffffff',
    borderColor: '#ddd',
    alignItems: 'center',
   
  },
  ctaText: {// letras a cima do botão
    textAlign: 'center',
    backgroundColor: '#f5e9e9ff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c2b5b5ff',
    alignItems: 'center',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  ctaButton: {//cor do botão
    backgroundColor: '#01b6fdff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 1,
  },
  ctaButtonText: {//cor da letras
    color: '#fff',
    fontWeight: 'bold',
  },
});


