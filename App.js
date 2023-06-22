import { View, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import Curation_jugazozak from './src/components/Curation_jugazozak';
import Curation_jugazisu from './src/components/Curation_jugazisu';
import Curation_budong from './src/components/Curation_budong';
import Curation_zeonse from './src/components/Curation_zeonse';
import Curation_yeah from './src/components/Curation_yeah';
import Curation_gold from './src/components/Curation_gold';
import Article from './src/components/Article';
import Load from './src/screens/Load';
import Icon from 'react-native-vector-icons/FontAwesome';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Load />;
  }
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="MainScreen" 
        component={MainScreen}
        options={{
          headerTitle: () => (
          <Image
            source={require('./assets/images/Logo.png')}
            style={{ width: '50%', height: 50, alignItems: 'center', top: 5}}
          />
          ),
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#99CC66',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
        }} 
      />
      <Stack.Screen 
        name="Curation_jugazozak" 
        component={Curation_jugazozak} 
        options={{
          title: 'Curation',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle:{
            backgroundColor: '#87d37c'
          },
          headerTintColor: '#ffffff',
          headerBackVisible: false,
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="times-circle-o" color='white' size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }} 
      />
      <Stack.Screen 
        name="Curation_jugazisu" 
        component={Curation_jugazisu} 
        options={{
          title: 'Curation',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle:{
            backgroundColor: '#87d37c'
          },
          headerTintColor: '#ffffff',
          headerBackVisible: false,
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="times-circle-o" color='white' size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }} 
      />
       <Stack.Screen 
        name="Curation_budong" 
        component={Curation_budong} 
        options={{
          title: 'Curation',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle:{
            backgroundColor: '#87d37c'
          },
          headerTintColor: '#ffffff',
          headerBackVisible: false,
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="times-circle-o" color='white' size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }} 
      />
       <Stack.Screen 
        name="Curation_zeonse" 
        component={Curation_zeonse} 
        options={{
          title: 'Curation',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle:{
            backgroundColor: '#87d37c'
          },
          headerTintColor: '#ffffff',
          headerBackVisible: false,
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="times-circle-o" color='white' size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }} 
      />
       <Stack.Screen 
        name="Curation_yeah" 
        component={Curation_yeah} 
        options={{
          title: 'Curation',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle:{
            backgroundColor: '#87d37c'
          },
          headerTintColor: '#ffffff',
          headerBackVisible: false,
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="times-circle-o" color='white' size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }} 
      />
       <Stack.Screen 
        name="Curation_gold" 
        component={Curation_gold} 
        options={{
          title: 'Curation',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle:{
            backgroundColor: '#87d37c'
          },
          headerTintColor: '#ffffff',
          headerBackVisible: false,
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="times-circle-o" color='white' size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }} 
      />
      <Stack.Screen 
        name="Article" 
        component={Article} 
        options={{
          title: 'Article',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerStyle:{
            backgroundColor: '#87d37c'
          },
          headerTintColor: '#ffffff',
          headerBackVisible: false,
          headerRight: () => {
            const navigation = useNavigation();
            return (
              <View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                >
                  <Icon name="times-circle-o" color='white' size={25} />
                </TouchableOpacity>
              </View>
            );
          },
        }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
};

export default App

