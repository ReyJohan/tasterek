import React from 'react';
import { View, Text, Image } from 'react-native';

const Lagranja = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: '40px'}}>La Granja Burguer</Text>
      <Image
        source={require('../assets/imgs/granja.jpg')}
        style={{ width: 500, height: 500 }}
      />
    </View>
  );
};

export default Lagranja;
