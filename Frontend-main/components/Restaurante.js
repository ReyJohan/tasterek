import React from 'react';
import { View, Text, Image } from 'react-native';
import imagenRestaurante from '../assets/imgs/granja.jpg'

const Restaurante = ({ route }) => {
  const { nombre, descripcion } = route.params;

  return (
    <View>
      <Text>{nombre}</Text>
      <Text>{descripcion}</Text>
      <Image source={imagenRestaurante} style={{ width: 500, height: 500 }} />
    </View>
  );
};

export default Restaurante;
