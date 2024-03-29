import React from "react";
import Main from "./Main.js";
import { Provider } from "react-redux";
import store from "./redux/store";
import * as Updates from "expo-updates";
import { Alert } from "react-native";

export default function App() {
  // EXPO UPDATES  ==========================================================================>

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        Alert.alert("your App got an update😍","please wait while we are updating...")
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      if (
        error.message ===
        "You cannot check for updates in development mode. To test manual updates, publish your project using `expo publish` and open the published version in this development client."
      ) {
        console.log(error.message);
      } else {
        // You can also add an alert() to see the error message in case of an error when fetching updates.
        alert(`Error fetching latest update: ${error}`);
        console.log(error.message);
      }
    }
  }
  onFetchUpdateAsync();

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
