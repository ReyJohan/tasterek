import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen'; // Importa tus pantallas
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import Lagranja from './Lagranja';
import Marmoreo from './Marmoreo';
import Elcorral from './Elcorral';
import Restaurante from './Restaurante';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About Us" component={AboutUsScreen} />
        <Stack.Screen name="Contact Us" component={ContactUsScreen} />
        <Stack.Screen name="La Granja" component={Lagranja} />
        <Stack.Screen name="Marmoreo" component={Marmoreo} />
        <Stack.Screen name="El Corral" component={Elcorral} />
        <Stack.Screen
          name="Restaurante"
          component={Restaurante}
          options={({ route }) => ({ title: route.params.nombre })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
