import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const Restaurante = ({ route }) => {
  const { nombre, descripcion, imagen } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>{nombre}</Text>
          <Text style={{ color: '#808080', marginBottom: 20 }}>{descripcion}</Text>
          <Image source={imagen} style={{ width: '100%', aspectRatio: 16 / 10, resizeMode: 'contain', marginBottom: 20 }} />
          {/* Add additional restaurant details here (e.g., phone number, address) */}
          <TouchableOpacity style={{ backgroundColor: '#2196F3', padding: 15, borderRadius: 10 }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Reservar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurante;
