import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <Text style={styles.title}>Quadro de Tarefas</Text>
      </View>
      <Text style={styles.subtitle}>Kanban Estático</Text>

      {/* Título "Quadro" */}
      <Text style={styles.subtitle1}>Quadro</Text>

      {/* Quadro com scroll horizontal */}
      <ScrollView horizontal style={styles.board} contentContainerStyle={{ paddingHorizontal: 10 }}>
        {/* Coluna A Fazer */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>A Fazer</Text>
          <View style={styles.card}><Text>Configurar ambiente</Text></View>
          <View style={styles.card}><Text>Entregar layout(Importante)</Text></View>
          <View style={styles.card}><Text>Revisar textos</Text></View>
        </View>

        {/* Coluna Em Progresso */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Em Progresso</Text>
          <View style={styles.card}><Text>Tela inicial </Text></View>
          <View style={styles.card}><Text>Api de login</Text></View>
          <View style={styles.card}><Text>Documento</Text></View>
        </View>

        {/* Coluna Concluído */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Concluído</Text>
          <View style={styles.card}><Text>Setup do projeto </Text></View>
          <View style={styles.card}><Text>Componentes bases</Text></View>
          <View style={styles.card}><Text>README</Text></View>
        </View>
      </ScrollView>

      {/* Rodapé com botões */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFilter}>
          <Text style={styles.buttonText}>Filtrar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fdfdfeff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#030000ff',
    fontWeight: 'bold',

  },
  subtitle: {
    fontSize: 16,
    color: '#716464ff',
    backgroundColor: '#ffffffff',

  },
  subtitle1: {
    fontSize: 16,
    color: '#080000ff',
    backgroundColor: '#ffffffff',

  },
  board: {
    flex: 1,
    marginVertical: 20,
     backgroundColor: '#ffffffff',  

  },
  column: {
    backgroundColor: '#dde8e6ff',
    width: 200,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    shadowColor: '#ffffffff',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,

  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,


  },

  card: {
    backgroundColor: '#fdfdfdff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 7,
   
  },


  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#ffffffff',
    borderTopWidth: 1,
    borderTopColor: '#f6f1f1ff',
  },
  buttonAdd: {
    backgroundColor: '#1470faff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 0,
    
  },
  buttonFilter: {
    backgroundColor: '#6c6060ff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
