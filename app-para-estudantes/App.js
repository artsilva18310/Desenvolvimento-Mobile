// App.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          {/* FOTO DO PERFIL (com URL) */}
          <Image
            source={{ uri: 'https://drive.google.com/uc?export=view&id=1fUdkUZKuVioUSZwj7Z9KSLdjIP_YqYo9' }}
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.greeting}>Olá, Estudante</Text>
          <Text style={styles.subtitle}>Bem-vindo ao seu painel</Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: '#007BFF' }]}>
          <Text style={styles.menuText}>NOTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: '#28A745' }]}>
          <Text style={styles.menuText}>AULAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuButton, { backgroundColor: '#6F42C1' }]}>
          <Text style={styles.menuText}>AVISOS</Text>
        </TouchableOpacity>
      </View>

      {/* Próximas atividades */}
      <Text style={styles.sectionTitle}>Próximas atividades</Text>
      <ScrollView style={styles.activities}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Trabalho de Matemática</Text>
          <Text style={styles.cardDesc}>Entrega: 20/08</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#E9F0FF', borderColor: '#007BFF' }]}>
          <Text style={styles.cardTitle}>Prova de Física (Importante)</Text>
          <Text style={styles.cardDesc}>Data: 22/08</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Leitura de História</Text>
          <Text style={styles.cardDesc}>Cap. 3 e 4</Text>
        </View>
      </ScrollView>

      {/* Chamada para ação */}
      <View style={styles.ctaBox}>
        <Text style={styles.ctaText}>Adquira um novo curso e continue aprendendo!</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>COMPRAR CURSO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#6F42C1', // cor da borda circular
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // deixa a imagem redonda
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activities: {
    flex: 1,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardDesc: {
    color: '#666',
    marginTop: 5,
  },
  ctaBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    marginBottom: 20,
  },
  ctaText: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#6F42C1',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  ctaButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

