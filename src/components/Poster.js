import React, { Component, PropTypes } from 'react';
import { View, Dimensions, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const cols = 3, rows = 3;

const Poster = (props) => {


    const { Nav, movie: { title, genre, poster } } = props;


    return (

        <TouchableOpacity style={styles.componentContainer} onPress={() => Nav.navigate('Choose Seats', { title, genre, poster })} >
            <View style={{ flex: 1 }}>
                
                <Image source={{ uri: poster }} style={styles.image} />
            </View>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <Text style={styles.genre} numberOfLines={1}>{genre}</Text>

        </TouchableOpacity>

    );
}


export default Poster;

const styles = StyleSheet.create({
    componentContainer: {
        marginLeft: 10,
        marginBottom: 10,
        height: (height - 20 - 20) / rows - 10,
        width: (width - 10) / cols - 10,
    },
    cardContainer: {
        padding: 2,
        borderRadius: 10,
    },
    image: {
        borderRadius: 10,                 // rounded corners
        width: '100%',
        height: '100%'
    },

})
