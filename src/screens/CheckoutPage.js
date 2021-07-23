import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import Button from '../components/Button'
import Timer from '../components/Timer'

const CheckoutPage = (props) => {

    const { selected, poster, title, genre, setSelected } = props.route.params
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [expired, setExpired] = useState(false)


    return (
        expired ? <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>Timeout!</Text>
            <View style={{marginHorizontal:'30%'}} >
            <Button onPress={() => props.navigation.navigate('Movies')} textLabel='Go to Home ->'></Button>
            </View>
            
        </View>
            : <View style={{ flex: 1 }}>
                <Timer setExp={setExpired} selected min={minutes} clearSelected={setSelected}
                    sec={seconds} setmin={setMinutes} setsec={setSeconds} >
                </Timer>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image source={{ uri: poster }} style={styles.image} />
                    <Text style={{ fontFamily: "sans-serif-medium", fontSize: 16 }}>Rows Selected: </Text>
                    <Text numberOfLines={3} style={{ paddingTop: 5, fontFamily: "sans-serif-light", fontSize: 18 }}>{selected.toLocaleString()}</Text>
                </View>
                <View style={{ flex: 1, marginHorizontal: '30%', alignItems: 'center' }}>
                    <Button textLabel='Checkout ->'></Button>
                    
                    <Button onPress={() => props.navigation.navigate('Movies', { selected, poster, title, genre })} textLabel='<-Go to Home'></Button>
                </View>


            </View>
    );
}

export default CheckoutPage;

const styles = StyleSheet.create({
    image: {
        margin: 10,
        borderRadius: 10,                 // rounded corners
        width: '50%',
        height: '70%'
    },
})