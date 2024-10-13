import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center', // Center items horizontally
  },
  menuIcon: {
    alignSelf: 'flex-start',
    marginVertical: 10, // Add space above and below
  },
  menuText: {
    fontSize: 30,
  },
  photoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50, // Make it round
    backgroundColor: '#d3d3d3', // Placeholder color for PHOTO
    justifyContent: 'center', // Center PHOTO text vertically
    alignItems: 'center', // Center PHOTO text horizontally
    marginVertical: 10, // Add space above and below
  },
  photoText: {
    color: '#000', // Text color for PHOTO
    fontSize: 16, // Size of PHOTO text
  },
  userName: {
    fontSize: 24, // Size of user name text
    fontWeight: 'bold', // Make user name bold
    marginVertical: 5, // Add space above and below
  },
  joinDate: {
    fontSize: 16, // Size of joined date text
    color: '#696969', // Color for joined date text
    marginBottom: 20, // Space below joined date before menu items start
  },
  menuOptions: {
    width: '100%', // Make menu options take full width
  },
  menuItem: {
    flexDirection: 'row', // Align icon and text in a row
    alignItems: 'center', // Center items vertically
    paddingVertical: 10, // Add padding above and below
  },
  menuItemIcon: {
    marginRight: 10, // Space between icon and text
    width: 30, // Icon width
    height: 30, // Icon height
    tintColor: '#000', // Icon color
  },
  menuItemText: {
    fontSize: 18, // Size of menu item text
  },
  darkModeOption: {
    flexDirection: 'row', // Align switch and text in a row
    justifyContent: 'space-between', // Space between switch and text
    alignItems: 'center', // Center items vertically
  },
});
