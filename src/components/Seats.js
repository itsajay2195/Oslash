import React from 'react'
import { View, StyleSheet, FlatList,Text, TouchableOpacity,Dimensions } from "react-native";
import {seatArrange} from '../utils/data'

const { width } = Dimensions.get('window');
//selected,selectedChange,
const Seats = ({ seats, total, selected, selectedChange, addTotal }) => {


    const handleCheck = (val) => {

        return selected.includes(val);
    }

    const handleClick = (id, price) => {
        if (selected.includes(id)) {
            let filteredArray = selected.filter(item => item !== id)
            selectedChange(filteredArray)
            addTotal(total - price)
        } else {
            selectedChange([...selected, id])
            addTotal(total + price)
            // console.warn('selected is', selected)
        }
    }


    
    

    return (

        <View style={{ alignItems: 'center' }} >
            {/* {console.warn(seats)} */}
            <FlatList
                data={seats}
                extraData={selected}
                numColumns={seats.length}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => (
                    item.unavailableSeat ?  <TouchableOpacity style={[styles.seatContainer, { borderColor: 'transparent' }]} />
                    :item.bookedSeat?<TouchableOpacity disabled={true} style={[styles.seatContainer, { backgroundColor:  'red' }]} onPress={() => handleClick(item.seatNumber, item.price)}></TouchableOpacity>
                    :<TouchableOpacity style={[styles.seatContainer, { backgroundColor: handleCheck(item.seatNumber) ? 'green' : '#FFFAF0' }]} onPress={() => handleClick(item.seatNumber, item.price)}></TouchableOpacity>
                )}

            />


        </View>
    );
}

export default Seats;

const styles = StyleSheet.create({
    seatContainer: {
     
        height: 20,
        width: (width*0.9)/ seatArrange.numberOfColumns ,
        borderWidth: 2,
        borderColor:'transparent',
        borderRadius:5
    },
    seatSelected: {
        margin: 5,
        height: 20,
        width: 20,
        borderWidth: 2,
    }


})