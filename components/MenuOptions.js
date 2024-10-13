import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import styles from '../styles';
import darkStyles from '../darkStyles';

export default function MenuOptions({ isDarkMode, setIsDarkMode }) {
  return (
    <View style={styles.menuOptions}>
      <Text style={[styles.menuItem, isDarkMode && darkStyles.text]}>My Profile</Text>
      <Text style={[styles.menuItem, isDarkMode && darkStyles.text]}>Messages</Text>
      <Text style={[styles.menuItem, isDarkMode && darkStyles.text]}>Settings</Text>
      <View style={styles.darkModeOption}>
        <Text style={[styles.menuItem, isDarkMode && darkStyles.text]}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  menuOptions: {
    marginTop: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
  darkModeOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
