import React from 'react';
import { View, Text, Image } from 'react-native';

const Marmoreo = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: '40px'}}>Marmoreo</Text>
      <Image
        source={require('../assets/imgs/marmoreo.jpg')}
        style={{ width: 500, height: 500 }}
      />
    </View>
  );
};

export default Marmoreo;
