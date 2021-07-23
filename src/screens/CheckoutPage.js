import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import Button from '../components/Button'
import Timer from '../components/Timer'

const CheckoutPage = (props) => {

    const { selected, poster, title, genre, total, setSelected } = props.route.params
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [expired, setExpired] = useState(false)


    return (
        expired ? <View style={{ flex: 1, justifyContent: 'center'}}>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>Timeout!</Text>
            <View style={{ marginHorizontal: '30%' }} >
                <Button onPress={() => props.navigation.navigate('Movies')} textLabel='Go to Home ->'></Button>
            </View>

        </View>
            : <View style={styles.container}>
                <Timer setExp={setExpired} selected min={minutes} clearSelected={setSelected}
                    sec={seconds} setmin={setMinutes} setsec={setSeconds} >
                </Timer>
                <View style={styles.infoCard}>
                    <Image source={{ uri: poster }} style={styles.image} />
                    <Text style={{ fontFamily: "sans-serif-medium", fontSize: 16 }}>Rows Selected: </Text>
                    <Text numberOfLines={3} style={{ paddingTop: 5, fontFamily: "sans-serif-light", fontSize: 18 }}>{selected.toLocaleString()}</Text>
                   
                </View>
                <View style={styles.billCard}>
                    <View style={{paddingTop: '2%',flex:1,alignItems: 'flex-end'}}>
                        <Text numberOfLines={1} style={{ fontFamily: "sans-serif-medium", fontSize: 16 }}>Current Total:</Text>
                        <Text numberOfLines={1} style={{ fontFamily: "sans-serif-medium", fontSize: 16 }}>GST:</Text>
                        <Text numberOfLines={1} style={{ fontFamily: "sans-serif-medium", fontSize: 16 }}>Total:</Text>
                    </View>
                    <View style={{paddingTop: '2%',flex:1,alignItems: 'flex-start'}}>
                        <Text style={{ fontFamily: "sans-serif-light", fontSize: 16 }}> {total} INR</Text>
                        <Text style={{ fontFamily: "sans-serif-light", fontSize: 16 }}> 100 INR</Text>
                        <Text style={{ fontFamily: "sans-serif-light", fontSize: 16 }}> {total+100} INR</Text>
                    </View>
                   
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
    container:{
        flex: 1,backgroundColor:'#FFFAF0' 
    },
    infoCard:{ 
        flex: 1,
         alignItems: 'center' },
    billCard:{
        margin:'10%',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#D0D0D0'},
    image: {
        margin: 10,
        borderRadius: 10,                 // rounded corners
        width: '50%',
        height: '70%'
    },
    underLine: {
        width: '50%',
        alignSelf: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    }
})

