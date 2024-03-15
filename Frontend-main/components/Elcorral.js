import React from 'react';
import { View, Text, Image } from 'react-native';

const Elcorral = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: '40px'}}>El Corral</Text>
      <Image
        source={require('../assets/images/corral.jpg')}
        // style={{ width: 500, height: 500 }}
      />
    </View>
  );
};

export default Elcorral;
