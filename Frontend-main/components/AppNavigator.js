import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AboutUsScreen from './AboutUsScreen';
import ContactUsScreen from './ContactUsScreen';
import Lagranja from './Lagranja';
import Marmoreo from './Marmoreo';
import Elcorral from './Elcorral';
import Restaurante from './Restaurante';
import Inicio from './Inicio';
import RestaurantList from './HomeScreen';
import Header from '../components/Header'; // Corregido el nombre de la importación

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }} // Oculta el encabezado en esta pantalla
        />
        <Stack.Screen
          name="Restaurantes"
          component={RestaurantList}
          options={{ header: props => <Header {...props} /> }} // Muestra el encabezado en esta pantalla
        />
        <Stack.Screen
          name="About Us"
          component={AboutUsScreen}
          options={{ header: props => <Header {...props} /> }} // Muestra el encabezado en esta pantalla
        />
        <Stack.Screen
          name="Contact Us"
          component={ContactUsScreen}
          options={{ header: props => <Header {...props} /> }} // Muestra el encabezado en esta pantalla
        />
        <Stack.Screen
          name="La Granja"
          component={Lagranja}
          options={{ header: props => <Header {...props} /> }} // Muestra el encabezado en esta pantalla
        />
        <Stack.Screen
          name="Marmoreo"
          component={Marmoreo}
          options={{ header: props => <Header {...props} /> }} // Muestra el encabezado en esta pantalla
        />
        <Stack.Screen
          name="El Corral"
          component={Elcorral}
          options={{ header: props => <Header {...props} /> }} // Muestra el encabezado en esta pantalla
        />
        <Stack.Screen
          name="Restaurante"
          component={Restaurante}
          // options={({ route }) => ({ title: route.params.nombre })}
          options={{ header: props => <Header {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
