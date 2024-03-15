import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const AboutUsScreen = () => {
  const teamMembers = [
    { id: 1, name: 'Juan Manuel Segura Arias' },
    { id: 2, name: 'Paula Andrea Ramos Peña' },
    { id: 3, name: 'Jhon Sebastian Ramirez Silva' },
    { id: 4, name: 'Jannier Johan Otavo Artunduaga' }
  ];

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.member}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de nosotros</Text>
      <FlatList
        data={teamMembers}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50 // Espaciado adicional en la parte inferior
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  member: {
    fontSize: 18
  }
});

export default AboutUsScreen;
