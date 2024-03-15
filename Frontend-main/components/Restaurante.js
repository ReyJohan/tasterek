import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';

const Restaurante = ({ route }) => {
  const { nombre, descripcion, imagen } = route.params;
  const windowWidth = useWindowDimensions().width;
  const maxWidth = 750; // Set your maximum width here
  const imageWidth = Math.min(windowWidth - 40, maxWidth); // Consider padding of 20 on each side

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.descripcion}>{descripcion}</Text>
          <Image source={imagen} style={{ width: imageWidth, height: imageWidth * 0.75 }} resizeMode="cover" />
          {/* Adjust height as needed based on aspect ratio */}
          {/* Add additional restaurant details here (e.g., phone number, address) */}
          <TouchableOpacity style={styles.reservarButton}>
            <Text style={styles.reservarButtonText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center', // Center the content horizontally
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descripcion: {
    color: '#808080',
    marginBottom: 20,
  },
  reservarButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  reservarButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Restaurante;
