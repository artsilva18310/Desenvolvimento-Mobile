import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <Text style={styles.title}>Quadro de Tarefas</Text>
        <Text style={styles.subtitle}>Kanban Estático</Text>
      </View>

      {/* Quadro com scroll horizontal */}
      <ScrollView horizontal style={styles.board} contentContainerStyle={{ paddingHorizontal: 10 }}>
        {/* Coluna A Fazer */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>A Fazer</Text>
          <View style={styles.card}><Text>Tarefa 1</Text></View>
          <View style={styles.card}><Text>Tarefa 2</Text></View>
        </View>

        {/* Coluna Em Progresso */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Em Progresso</Text>
          <View style={styles.card}><Text>Tarefa 3</Text></View>
        </View>

        {/* Coluna Concluído */}
        <View style={styles.column}>
          <Text style={styles.columnTitle}>Concluído</Text>
          <View style={styles.card}><Text>Tarefa 4</Text></View>
        </View>
      </ScrollView>

      {/* Rodapé com botões */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    backgroundColor: '#4A90E2',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  board: {
    flex: 1,
    marginVertical: 20,
  },
  column: {
    backgroundColor: '#fff',
    width: 200,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    shadowColor: '#000',
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
    backgroundColor: '#e2e2e2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
