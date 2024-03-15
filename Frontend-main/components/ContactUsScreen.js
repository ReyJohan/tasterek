import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; // Importa los iconos que desees usar

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contáctenos</Text>
      <View style={styles.iconContainer}>
        <FontAwesome name="facebook" size={30} color="#3b5998" style={styles.icon} />
        <FontAwesome name="twitter" size={30} color="#1da1f2" style={styles.icon} />
        <FontAwesome name="linkedin" size={30} color="#0077b5" style={styles.icon} />
        <FontAwesome name="github" size={30} color="#000000" style={styles.icon} />
        <Ionicons name="logo-instagram" size={30} color="#e1306c" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%', // Ajusta según el ancho deseado
  },
  icon: {
    marginRight: 10,
  },
});

export default ContactUsScreen;
