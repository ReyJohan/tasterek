import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

const Inicio = ({ navigation }) => {
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    opacity.value = withSpring(1, { damping: 20, stiffness: 90 });
  }, []);

  const handleViewRestaurantsPress = () => {
    navigation.navigate('Restaurantes');
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/tastetrek.jpeg')} style={styles.backgroundImage} resizeMode="cover">
        <Animated.View style={[styles.overlay, animatedStyle]}>
          <Text style={styles.headerText}>Bienvenido a TASTETREK</Text>
          <Pressable style={styles.viewRestaurantsButton} onPress={handleViewRestaurantsPress}>
            <Text style={styles.viewRestaurantsButtonText}>Ver restaurantes</Text>
          </Pressable>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  viewRestaurantsButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  viewRestaurantsButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Inicio;
