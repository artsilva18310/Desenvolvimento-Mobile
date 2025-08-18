import React from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.title}</Text>}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            {/* Texto */}
            <Text style={styles.title}> Vou amar essa matéria ou odia-lá!</Text>

            <Image
              source={{ uri: 'https://drive.google.com/uc?export=view&id=1fUdkUZKuVioUSZwj7Z9KSLdjIP_YqYo9' }}
              style={styles.image}
            />


            {/* Botão */}
            <View style={styles.buttonContainer}>
              <Button
                title="Clique aqui"
                onPress={() => alert('Botão pressionado!')}
                color="#ff381eff"
              />
            </View>

            {/* Título da lista */}
            <Text style={styles.listTitle}>Minha Lista:</Text>
          </View>
        }
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  headerContainer: { alignItems: 'center', paddingVertical: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 16, textAlign: 'center' },
  image: { width: 150, height: 150, marginBottom: 16 },
  buttonContainer: { marginBottom: 16, width: '60%' },
  listTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  listItem: { padding: 10, fontSize: 16, borderBottomWidth: 1, borderColor: '#ccc', width: 300, textAlign: 'center' },
});
