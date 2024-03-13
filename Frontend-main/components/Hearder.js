import React from 'react';
import { Appbar, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = ({ navigation }) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Nombre de la App" />
      <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
      <Appbar.Action icon="information" onPress={() => navigation.navigate('AboutUs')} />
      <Appbar.Action icon="email" onPress={() => navigation.navigate('ContactUs')} />
      <Appbar.Action icon="email" onPress={() => navigation.navigate('Reserva')} />
      <Button mode="contained" onPress={() => {/* handle booking action */}} style={styles.bookButton}>
        Agenda ahora
      </Button>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee', // Ajusta este valor al color de tu marca
  },
  bookButton: {
    margin: 5,
    backgroundColor: '#34A853', // Un verde llamativo para el botón, ajusta según tu diseño
  },
});

export default Header