import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles';
import darkStyles from '../darkStyles';

export default function ProfileSection({ isDarkMode }) {
  return (
    <View style={styles.profileSection}>
      <View style={styles.photoPlaceholder}>
        <Text style={styles.photoText}>.PHOTO</Text>
      </View>
      <Text style={[styles.name, isDarkMode && darkStyles.text]}>Dessalyn Cabiladas</Text>
      <Text style={[styles.joinDate, isDarkMode && darkStyles.text]}>Joined 1 year ago</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  photoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    color: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  joinDate: {
    color: '#888',
  },
});
