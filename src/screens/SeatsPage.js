import { View, Animated, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState,useRef,useEffect } from 'react';
import Seats from '../components/Seats'
import Button from '../components/Button'
import {seatArrange} from '../utils/data'


const SeatsPage = (props) => {
    const [selected, setSelected] = useState([])
    const [total, totalCounter] = useState(0)
    const [seatList,setseatsList] = useState(function(){
        let data =seatArrange
        let seatings=[]
        for(let i=0; i< data.numberOfRows; i++) {
        let rowArray = [];
        for(let j=0; j<data.numberOfColumns; j++) {
          let rowName = String.fromCharCode(i+65)
          let seatNumber = `${rowName}-${j}`
          rowArray.push({ 
            'seatNumber': seatNumber,
            'unavailableSeat': data.unavailableSeats.includes(seatNumber),
            'disabledSeat': data.bookedSeats.includes(seatNumber),
            'price': data.pricesList[rowName] ? data.pricesList[rowName] : data.defaultPrice
           })
        }
        seatings.push(rowArray)
       }
      
        return seatings 
    })
    

    //  }, [])
    const{poster,title,genre,} = props.route.params

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true
        }).start();
      };

      useEffect(() => {
          fadeIn()
      }, [])



     
     
    
   


    return (
        <View style={{ flex: 1, backgroundColor: '#4169E1' }}>
            <View style={styles.rectangle}>
                <Text style={{textAlign:"center",paddingTop:10,color:"#FFFAF0"}}>All Eyes here!</Text>
            </View>

            <Animated.View style={[styles.seatsWrapper,{
            // Bind opacity to animated value
            opacity: fadeAnim
          }]}>
                {seatList.map((seat, index) => <Seats seats={seat}
                    key={index}
                    selected={selected}
                    selectedChange={setSelected}
                    total={total}
                    addTotal={totalCounter}
                />

                )}
                
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                    <Text><Text style={{fontSize:18,color:'green'}}>{'\u2B24'} </Text>Selected</Text>
                    <Text><Text style={{fontSize:18,color:'gray'}}>{'\u2B24'} </Text>Booked</Text>
                    <Text><Text style={{fontSize:18,color:'white'}}>{'\u2B24'} </Text>Available</Text>
                </View>
            </Animated.View>

            <Animated.View style={[styles.infoCardContainer,{
            // Bind opacity to animated value
            opacity: fadeAnim
          }]}>
                <View style={styles.TitleWrapper}>
                    <Text style={{ fontFamily: "sans-serif-light", fontWeight: 'normal', fontSize: 18 }}>Booking Details</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.movieTitleWrapper}>
                        <Image source={{ uri: poster }} style={styles.image} />
                        <Text numberOfLines={1} style={styles.title}> Movie: <Text  style={{ fontFamily: "sans-serif-light", }}>{title}</Text></Text>
                        <Text numberOfLines={1} style={styles.title}> Movie: <Text  style={{ fontFamily: "sans-serif-light", }}>{genre}</Text></Text>
                    </View>
                    <View style={{ flex:1,margin: 20,alignItems: 'flex-start'}}>
                        {selected.length>0 
                        ? 
                        <View style={{alignItems: 'center',flex: 1,justifyContent: 'center'}}>
                            <Text style={{fontFamily: "sans-serif-medium",fontSize:16}}>Rows Selected: </Text>
                            <Text numberOfLines={3} style={{paddingTop:5,fontFamily: "sans-serif-light",fontSize:18 }}>{selected.toLocaleString()}</Text>
                            <View style={[styles.underLine,{width:'100%'}]} />
                            {/* <TouchableOpacity onPress={()=>props.navigation.navigate('Checkout', { selected,info})}><Text>Hi</Text></TouchableOpacity> */}
                            <Button onPress ={()=>{
                                props.navigation.navigate('Checkout', { selected,poster,title,genre,total,setSelected})}} textLabel='Proceed ->'></Button>
                        </View> 
                        : 
                        <View style={{ alignItems: 'center',flex: 1,justifyContent: 'center'}}>
                            <Text style={{ fontFamily: "sans-serif-medium", }}>Please pick your seats</Text>
                        </View>
                        }
                       

                    </View>
                </View>

            </Animated.View>
        </View>
    )
}

export default SeatsPage;


const styles = StyleSheet.create({
    underLine: {
        marginTop: '10%',
        width: '80%',
        alignSelf: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    rectangle: {
        alignSelf: 'center',
        width: '90%',
        marginTop:10,
        borderTopWidth:6,
        borderRadius:80,
        borderTopColor:'#FFFAF0'
      },
    seatsWrapper: {
        flex: 1,
        width: '95%',
        marginLeft:10,
        marginRight:10,
        backgroundColor: '#4169E1',
        paddingTop: '10%',

    },

    infoCardContainer: {
        flex: 1,
        backgroundColor: '#FFFAF0',
        borderTopEndRadius:20,
        borderTopStartRadius:20
    },
    TitleWrapper: {
        alignItems: 'center',
        borderBottomWidth: 1
    },
    title: {
        fontFamily: "sans-serif-medium",
        fontWeight: 'normal',
        fontSize: 18
    },
    movieTitleWrapper: {
        flex:1,
        alignItems: 'flex-start',
        width:'50%'
    },
    image: {
        margin: 10,
        borderRadius: 10,                 // rounded corners
        width: '90%',
        height: '70%'
    },
})

// flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-evenly',