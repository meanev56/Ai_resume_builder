import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider } from "./context/AppContext";
import RootNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <GestureHandlerRootView>
      <AppProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AppProvider>
    </GestureHandlerRootView>
  );
}
