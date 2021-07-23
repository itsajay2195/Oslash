import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { movies } from '../services/AllServices'
import Poster from '../components/Poster'




const Movies = (props) => {


    return (
        <View style={{backgroundColor:'#FFFAF0'}}>
            {/* <TouchableOpacity onPress={() => props.navigation.navigate('Seats')}>
                <Text>Hi</Text>
            </TouchableOpacity> */}
            <ScrollView contentContainerStyle={styles.scrollContainer}       // allow multiple rows
                // Hide all scroll indicators
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {movies.map((movie, index) => <Poster movie={movie}
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

