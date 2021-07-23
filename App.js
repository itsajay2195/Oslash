
import React from 'react';
import {View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { movies } from './src/utils/data'
import { seatings } from './src/utils/data'
import Routes from './src/utils/Routes'
import {createServer} from "miragejs"


if (window.server) {
    server.shutdown()
  }
  
  window.server = createServer({
    routes() {
      this.get("/api/movies", () => {
        return {
          movies: movies,
        }
      }),
      this.get("/api/seats", () => {
        return {
          seats: seatings,
        }
      })
    },
  })

export default function App() {

  return (
    <View style={{ flex: 1 }} >
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}


