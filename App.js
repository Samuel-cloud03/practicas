// import HomeScreen from './frontend/src/screens/homeScreen';
import LoginScreen from './frontend/src/screens/loginScreen';
// import ProfileScreen from './frontend/src/screens/profileScreen';
// import UserInterfaceScreen from './frontend/src/screens/userInterfaceScreen';
// import AppointmentScreen from './frontend/src/screens/AppointmentScreen';
// import MedicalHistoryScreen from './frontend/src/screens/MedicalHistoryScreen';
// import SettingScreen from "./frontend/src/screens/settingScreen";
// import IntroScreen from './frontend/src/screens/introScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider } from './frontend/src/context/userContext';
import { NavigationContainer } from '@react-navigation/native';
// import AppDrawer from './AppNavigation';
import AppTabs from './AppNavigation';
import { ThemeProvider } from './frontend/src/context/themeContext';

//SQLiteProvider
import {SQLiteProvider} from 'expo-sqlite';
//initializeDatabase
import {initializeDatabase} from './frontend/src/db/database';

const Stack  = createNativeStackNavigator();
const App = () => {
  // return <UserInterfaceScreen/>
  return(
    <ThemeProvider>
      <SQLiteProvider databaseName='clinicaPediatrica.db' onInit={initializeDatabase}>
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
              <Stack.Screen name='Login' component={LoginScreen} />
              {/* <Stack.Screen name='Intro' component={IntroScreen} /> */}
              <Stack.Screen name='Main' component={AppTabs} />
              {/* <Stack.Screen name='User' component={UserInterfaceScreen} />
              <Stack.Screen name='Perfil' component={ProfileScreen} />
              <Stack.Screen name='Setting' component={SettingsScreen} />
              <Stack.Screen name='Citas' component={AppointmentScreen} />
              <Stack.Screen name='Historial' component={MedicalHistoryScreen} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </SQLiteProvider>
    </ThemeProvider>
  );
};

export default App;