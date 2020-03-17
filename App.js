import 'react-native-gesture-handler';
// In App.js in a new project

import * as React from "react";
import { Button, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import logo from './assets/logo.jpg';
import DetailsScreen from './Reproductor'



function HomeScreen({navigation}) {
  return (

    <View style={styles.container}>
    <Text style={styles.instructions}></Text>
    <Image source={require('./assets/loco.png')} style={styles.logo}/>
    <TouchableOpacity style={styles.button}>
      <Button 
      title= "Reproductor músical" 
      onPress={() => navigation.navigate('Details')}
      />
    </TouchableOpacity>

    {/* <TouchableOpacity style={styles.button}>
      <Button 
      title= "App Run" 
      onPress={() => navigation.navigate('AppRun')}
      />
    </TouchableOpacity> */}


    <Text style={styles.footer}>Kinacu©</Text>
  </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'RunSik' }} />

        <Stack.Screen name="Details" component= {DetailsScreen} options={{ title: 'Reproductor' }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo:{
    borderRadius: 20,
    backgroundColor: 'red',
    width: 400,
    height: 450,
    marginBottom:10,
  },
  instructions:{
    color: '#888',
    fontSize: 30,
    marginHorizontal:15,
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 5,
    
  },
  buttonText: {
    borderRadius: 20,
    fontSize: 20,
    color :'#000'
  },
  footer:{
    color: '#000',
    fontSize: 20,
    marginHorizontal:15,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});


export default App;

