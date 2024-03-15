import React, { useState } from 'react';
import { Appbar, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Header = ({ navigation }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Tastetrek" />
        <Appbar.Action icon="menu" onPress={handlePress} />
        {expanded && (
          <>
            <Appbar.Action icon="home" onPress={() => navigation.navigate('Inicio')} />
            <Appbar.Action icon="information" onPress={() => navigation.navigate('About Us')} />
            <Appbar.Action icon="email" onPress={() => navigation.navigate('Contact Us')} />
            <Button mode="contained" onPress={() => {/* handle booking action */}} style={styles.bookButton}>
              Agenda ahora
            </Button>
          </>
        )}
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#32cb94', // Ajusta este valor al color de tu marca
  },
  bookButton: {
    margin: 5,
    backgroundColor: '#34A853', // Un verde llamativo para el botón, ajusta según tu diseño
  },
});

export default Header;
