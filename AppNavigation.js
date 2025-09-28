// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HelpScreen from "./frontend/src/screens/helpScreens";
// import HomeScreen from "./frontend/src/screens/homeScreen";
// import UserInterfaceScreen from "./frontend/src/screens/userInterfaceScreen";
// import SettingScreen from "./frontend/src/screens/settingScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// const AppDrawer = () => (
//     <Drawer.Navigator>
//         <Drawer.Screen name="Principal" component={HomeScreen}/>
//         <Drawer.Screen name="Pacientes" component={UserInterfaceScreen}/>
//         <Drawer.Screen name="Configuracion" component={SettingScreen}/>
//         <Drawer.Screen name="Ayuda" component={HelpScreen}/>
//     </Drawer.Navigator>
// );

// const AppTabs = () => (
//     <Tab.Navigator>
//         <Tab.Screen name='Inicio' component={HomeScreen}
//             options={{
//                 tabBarIcon: ({color, size}) =>(
//                     <MaterialCommunityIcons name="home" size={size} color={color}/>
//                 )
//             }}
//         />
//         <Tab.Screen name='Pacientes' component={UserInterfaceScreen}
//             options={{
//                 tabBarIcon: ({color, size}) =>(
//                     <MaterialCommunityIcons name="baby-carriage" size={size} color={color}/>
//                 )
//             }}
//         />
//         <Tab.Screen name='Configuracion' component={SettingScreen}
//             options={{
//                 tabBarIcon: ({color, size}) =>(
//                     <MaterialCommunityIcons name="cog" size={size} color={color}/>
//                 )
//             }}
//         />
//         <Tab.Screen name='Ayuda' component={HelpScreen}
//             options={{
//                 tabBarIcon: ({color, size}) =>(
//                     <MaterialCommunityIcons name="help" size={size} color={color}/>
//                 )
//             }}
//         />
//     </Tab.Navigator>
// );
// // export default AppDrawer;
// export default AppTabs;

// AppNavigation.js
import { useContext } from "react";
import { ThemeContext } from "./frontend/src/context/themeContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Screens
import HomeScreen from "./frontend/src/screens/homeScreen";
import PatientProfileScreen from "./frontend/src/screens/profileScreen";
import UserInterfaceScreen from "./frontend/src/screens/userInterfaceScreen";
import AppointmentScreen from "./frontend/src/screens/AppointmentScreen";
import IntroScreen from "./frontend/src/screens/introScreen";
import SettingScreen from "./frontend/src/screens/settingScreen";
import HelpScreen from "./frontend/src/screens/helpScreens";
import PatientsListScreen from './frontend/src/screens/PatientsListScreen';
import LoginScreen from "./frontend/src/screens/loginScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// --- Tabs principales ---
const darkMode= true;
const AppTabs = () => {
  const { darkMode } = useContext(ThemeContext); // 👈 Aquí usamos el contexto

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: darkMode ? '#222' : '#eaeeffff' },
        headerTintColor: darkMode ? '#eaeeffff' : '#222',
        tabBarStyle: { backgroundColor: darkMode ? '#222' : '#eaeeffff' },
        tabBarActiveTintColor: darkMode ? '#eaeeffff' : '#005187',
        tabBarInactiveTintColor: darkMode ? '#888' : '#999',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pacientes"
        component={UserInterfaceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="baby-carriage" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Citas"
        component={AppointmentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Introducción"
        component={IntroScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// --- Drawer principal ---
const AppDrawer = () => {
  const { darkMode } = useContext(ThemeContext); // 👈 Aquí también usamos el contexto

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: darkMode ? "#111" : "#fff",
        },
        drawerActiveTintColor: darkMode ? "#fff" : "#005187",
        drawerInactiveTintColor: darkMode ? "#ccc" : "#333",
        headerStyle: {
          backgroundColor: darkMode ? "#111" : "#f5f5f5",
        },
        headerTintColor: darkMode ? "#fff" : "#000",
      }}
    >
      <Drawer.Screen
        name="Principal"
        component={AppTabs}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configuración"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lista"
        component={PatientsListScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="document" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={PatientProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ayuda"
        component={HelpScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default AppDrawer;
