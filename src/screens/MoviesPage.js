import React, { useState, useEffect }  from 'react'
import { View, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import Poster from '../components/Poster'




const Movies = (props) => {
    let [moviesList, setMovies] = useState([])
    const[loader,setLoader] = useState(true)
    
    useEffect(() => {
         fetch("/api/movies")
          .then((res) => res.json())
          .then((json) => {
            setTimeout(() => {setMovies(json.movies)
                setLoader(false)}, 1000)
            }
          )
      }, [])

    return ( loader ? <View style={{flex:1, justifyContent:'center'}}><ActivityIndicator size="large" color="#4169E1"/></View>:
        <View style={{backgroundColor:'#FFFAF0'}}>
            {/* <TouchableOpacity onPress={() => props.navigation.navigate('Seats')}>
                <Text>Hi</Text>
            </TouchableOpacity> */}
            <ScrollView contentContainerStyle={styles.scrollContainer}       // allow multiple rows
                // Hide all scroll indicators
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {moviesList.map((movie, index) => <Poster movie={movie}
                    key={index}
                    Nav={props.navigation} />
                )}
            </ScrollView>
        </View>
    )
}

export default Movies;

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',   // arrange posters in rows
        flexWrap: 'wrap',

    }

})

