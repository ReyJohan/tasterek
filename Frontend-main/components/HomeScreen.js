import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const restaurantes = [
  { nombre: 'La Granja', descripcion: 'Descripción de La Granja...', imagen: require('../assets/images/granja.jpg') },
  { nombre: 'Marmoreo', descripcion: 'Descripción de Marmoreo...', imagen: require('../assets/images/marmoreo.jpg') },
  { nombre: 'El Corral', descripcion: 'Descripción de El Corral...', imagen: require('../assets/images/corral.jpg') },
];


const HomeScreen = ({ navigation }) => {
  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('Restaurante', restaurant);
  };

  const handleAvailabilityPress = () => {
    // Implement navigation to Availability screen (or logic to check availability)
    navigation.navigate('Availability'); // Replace with your implementation
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Bienvenido a TASTETREK</Text>

        {restaurantes.map((restaurant) => (
          <TouchableOpacity key={restaurant.nombre} style={{ marginBottom: 20 }} onPress={() => handleRestaurantPress(restaurant)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={restaurant.imagen}
                style={{ width: 80, height: 80, borderRadius: 10, marginRight: 15 }}
              />
              <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{restaurant.nombre}</Text>
                <Text style={{ color: '#808080' }}>{restaurant.descripcion.slice(0, 50) + (restaurant.descripcion.length > 50 ? '...' : '')}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={{ backgroundColor: '#2196F3', padding: 15, borderRadius: 10 }} onPress={handleAvailabilityPress}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Consultar Disponibilidad</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
