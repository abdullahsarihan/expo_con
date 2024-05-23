//zustand
import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import Form from "../components/Form";
import List from "../components/List";
import useStore from "../store/useStore";

const Home = () => {
  const fetchUsers = useStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = (text) => {
    console.log("Submitted text:", text);
  };

  const handleDelete = (id) => {
    console.log("Deleted item id:", id);
  };

  return (
    <View style={styles.container}>
      <Form onSubmit={handleSubmit} />
      <List onDelete={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    padding: 10,
    flex: 1,
  },
});

export default Home;

//Context Api
// import { View, Text, Button, StyleSheet } from "react-native";
// import React, { useContext, useEffect } from "react";
// import Form from "../components/Form";
// import List from "../components/List";
// import { useUsers } from "../context/UsersContext";

// const Home = () => {
//   const { loadData } = useUsers();

//   useEffect(() => {
//     loadData();
//   }, []);

//   const handleSubmit = (text) => {
//     console.log("Submitted text:", text);
//   };

//   const handleDelete = (id) => {
//     console.log("Deleted item id:", id);
//   };

//   return (
//     <View style={styles.container}>
//       <Form onSubmit={handleSubmit} />
//       <List onDelete={handleDelete} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//   },
//   container: {
//     padding: 10,
//     flex: 1,
//   },
// });

// export default Home;
