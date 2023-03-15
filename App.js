import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./app/navigator/RootNavigation";
import AppNavigator from "./app/navigator/AppNavigator";

import UserContext from "./app/auth/UserContext";

import useApi from "./app/hooks/useApi";
import { useFonts } from "expo-font";

import postsApi from "./app/api/posts";
import usersApi from "./app/api/users";

export default function App() {
  const {
    data: users,
    error: errorUsers,
    loading: loadingUsers,
    request: loadUsers,
  } = useApi(usersApi.getUsers);

  const {
    data,
    error: errorPosts,
    loading: loadingPosts,
    request: loadPosts,
  } = useApi(postsApi.getPosts);

  React.useEffect(() => {
    loadUsers();
    loadPosts();
  }, []);

  const [fontsLoaded] = useFonts({
    FuturaStdBold: require("./assets/fonts/open-sans/OpenSans-Bold.ttf"),
    FuturaStdMedium: require("./assets/fonts/open-sans/OpenSans-Medium.ttf"),
    FuturaStdRegular: require("./assets/fonts/open-sans/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded || loadingUsers) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <UserContext.Provider
        value={{
          user: users && users[0],
          data: data,
          load: loadPosts,
          loading: loadingPosts,
        }}
      >
        <AppNavigator />
        {/* <CommentsScreen route={{ params: posts[0] }} /> */}
      </UserContext.Provider>
    </NavigationContainer>
  );
}
