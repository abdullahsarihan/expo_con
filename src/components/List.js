//zustand
import { FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Item from "./Item";
import Message from "./Message";
import Loading from "./Loading";
import useStore from "../store/useStore";
import Error from "./Error";

const List = () => {
  const users = useStore((state) => state.users);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);

  if (loading) {
    return <Loading message="Loading..." />;
  }
  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      {users.length === 0 && !loading && <Message message="No Item" />}

      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item user={item} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default List;

//Context Api
// import { FlatList, StyleSheet } from "react-native";
// import React from "react";
// import Item from "./Item";
// import { useUsers } from "../context/UsersContext";
// import Message from "./Message";
// import Loading from "./Loading";

// const List = () => {
//   const { users, loading, error } = useUsers();

//   if (loading) {
//     return <Loading message="Loading..." />;
//   }
//   if (error) {
//     return <Error message={error} />;
//   }

//   return (
//     <>
//       {users.length === 0 && !loading && <Message message="No Item" />}

//       <FlatList
//         style={styles.list}
//         data={users}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <Item user={item} />}
//       />
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   list: {
//     flex: 1,
//   },
// });

// export default List;
