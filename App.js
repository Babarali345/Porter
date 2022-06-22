import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import SplashScreen from "react-native-splash-screen";
// Redux Imports

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import MainNavigation from "./src/navigation/MainNavigation";
import HomeScreenReducer from "./src/Store/Reducer/HomeScreenReducer";
import InternetConnectionAlert from "react-native-internet-connection-alert";

const rootReducer = combineReducers({
  HomeScreenReducer: HomeScreenReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  const [networkState, setNetworkState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <InternetConnectionAlert
      onChange={(connectionState) => {
        console.log("Connection State: ", connectionState.isConnected);
        setNetworkState(connectionState.isConnected);
      }}
    >
      <View style={{ flex: 1 }}>
        {/* {networkState ? (
          <Provider store={store}>
            <PaperProvider>
              <MainNavigation />
            </PaperProvider>
          </Provider>
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>no internet</Text>
          </View>
        )} */}

        <Provider store={store}>
          <PaperProvider>
            <MainNavigation />
          </PaperProvider>
        </Provider>
      </View>
    </InternetConnectionAlert>
  );
};

// str = str.replace(/\d(?=\d{4})/g, "*");

export default App;
