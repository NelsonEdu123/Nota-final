import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./telas/Home";
import Todo from "./telas/Todo";
import Creditos from "./telas/Creditos";

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer> 
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title:"Home"}} />
      <Stack.Screen name="Todo" component={Todo} options={{title:"To do List"}} />
      <Stack.Screen name="Creditos" component={Creditos} options={{title:"creditos"}} />
    </Stack.Navigator>
  </NavigationContainer> 
  );
}

