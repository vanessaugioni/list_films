import "react-native-gesture-handler";

import React from "react";

import {
  NavigationContainer,
  DarkTheme,
} from "@react-navigation/native";

import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";

import {
  Provider as PaperProvider
} from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

import theme from "./theme/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>

      <NavigationContainer theme={DarkTheme}>

        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#121212",
            },

            headerTintColor: "#BB86FC",

            contentStyle: {
              backgroundColor: "#0D0D0D",
            },
          }}
        >

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "🎬 Filmes",
            }}
          />

          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: "Detalhes",
            }}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </PaperProvider>
  );
}