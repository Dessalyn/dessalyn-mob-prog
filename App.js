import React from 'react';
import { View, TouchableOpacity, Text, Switch } from 'react-native';
import ProfileSection from './components/ProfileSection';
import MenuOptions from './components/MenuOptions';
import styles from './styles';
import darkStyles from './darkStyles';

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <View style={[styles.container, isDarkMode && darkStyles.container]}>
      <TouchableOpacity style={styles.menuIcon}>
        <Text style={[styles.menuText, isDarkMode && darkStyles.text]}>☰</Text>
      </TouchableOpacity>
      <ProfileSection isDarkMode={isDarkMode} />
      <MenuOptions isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </View>
  );
}
