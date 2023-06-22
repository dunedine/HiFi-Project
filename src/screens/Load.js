import { View, StyleSheet, Image } from 'react-native';
import React from 'react';

const Load = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Load.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    backgroundColor: 'red', 
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    color: 'yellow',
    fontSize: 50,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Load;
