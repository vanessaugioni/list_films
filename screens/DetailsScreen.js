import React from "react";

import {
  ScrollView,
  StyleSheet,
} from "react-native";

import {
  Card,
  Text,
} from "react-native-paper";

export default function DetailsScreen({
  route,
}) {

  const { movie } = route.params;

  return (

    <ScrollView style={styles.container}>

      <Card style={styles.card}>

        <Card.Content>

          <Text
            variant="headlineMedium"
            style={styles.title}
          >
            {movie.title}
          </Text>

          <Text style={styles.info}>
            🎬 Diretor: {movie.director}
          </Text>

          <Text style={styles.info}>
            📅 Ano: {movie.release_date}
          </Text>

          <Text style={styles.info}>
            🏢 Produtor: {movie.producer}
          </Text>

          <Text style={styles.description}>
            {movie.description}
          </Text>

        </Card.Content>

      </Card>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 15,
  },

  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 25,
    padding: 10,
  },

  title: {
    color: "#BB86FC",
    marginBottom: 20,
    fontWeight: "bold",
  },

  info: {
    color: "#FFFFFF",
    marginBottom: 10,
    fontSize: 16,
  },

  description: {
    color: "#CCCCCC",
    marginTop: 20,
    lineHeight: 24,
    fontSize: 16,
  },
});