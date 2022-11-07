import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DAMU</Text>
      <Text style={styles.desc}>Daily muslim</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default splash;
