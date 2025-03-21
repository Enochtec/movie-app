import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const MovieDetails= () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie Details: {id} </Text>
    </View>
  )
}

export default MovieDetails;

const styles = StyleSheet.create({})