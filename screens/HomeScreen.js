import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";

import {
  Card,
  Text,
  ActivityIndicator,
} from "react-native-paper";

import { getMovies } from "../services/api";

export default function HomeScreen({
  navigation,
}) {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    const data = await getMovies();

    setMovies(data);
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color="#BB86FC"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <Card
            style={styles.card}

            onPress={() =>
              navigation.navigate(
                "Details",
                { movie: item }
              )
            }
          >

            <Card.Content>

              <Text
                variant="titleLarge"
                style={styles.title}
              >
                {item.title}
              </Text>

              <Text style={styles.text}>
                Diretor: {item.director}
              </Text>

              <Text style={styles.text}>
                Ano: {item.release_date}
              </Text>

            </Card.Content>

          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 10,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },

  card: {
    marginBottom: 15,
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    elevation: 5,
  },

  title: {
    color: "#BB86FC",
    marginBottom: 10,
    fontWeight: "bold",
  },

  text: {
    color: "#FFFFFF",
  },
});