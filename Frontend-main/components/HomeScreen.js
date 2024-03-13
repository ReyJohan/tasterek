import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const restauranteSeleccionado = { nombre: 'La Granja', descripcion: 'Descripción de La Granja...', imagenNombre: 'granja.jpg'};
  //HACER SOLICITUD PARA LLAMAR LA INFO DE LA BD

  const verDetallesRestaurante = () => {
    navigation.navigate('Restaurante', restauranteSeleccionado);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido a TASTETREK</Text>
      <Button title="Ir a Acerca" onPress={() => navigation.navigate('About Us')} />
      <Button title="Ir a Contacto" onPress={() => navigation.navigate('Contact Us')} />
      <Button title="La Granja Burguer" onPress={() => navigation.navigate('La Granja')} />
      <Button title="Marmoreo" onPress={() => navigation.navigate('Marmoreo')} />
      <Button title="El Corral" onPress={() => navigation.navigate('El Corral')} />
      <Button title="Ver detalles de La Granja" onPress={verDetallesRestaurante} />
      <Button title="Consultar disponibilidad"/>
    </View>
  );
};

export default HomeScreen;
