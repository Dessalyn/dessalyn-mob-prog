import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import styles from '../styles';

const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={require('./Image/avatar.jpg')} 
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
  },
});

