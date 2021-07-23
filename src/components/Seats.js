import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { seatings, } from '../services/AllServices'

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
            console.warn('selected is', selected)
        }
    }


    const Box = () => {
        return (
            <View>

            </View>
        )
    }

    return (

        <View style={{ alignItems: 'center' }} >

            <FlatList
                data={seats}
                extraData={selected}
                numColumns={seats.length}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => (
                    item.enabled ? <TouchableOpacity style={[styles.seatContainer, { backgroundColor: handleCheck(item.id) ? 'green' : '#FFFAF0' }]} onPress={() => handleClick(item.id, 10)}></TouchableOpacity>
                        : <TouchableOpacity style={[styles.seatContainer, { borderColor: 'transparent' }]} />
                )}

            />


        </View>
    );
}

export default Seats;

const styles = StyleSheet.create({
    seatContainer: {
        margin: 5,
        height: 20,
        width: 20,
        borderWidth: 2,
    },
    seatSelected: {
        margin: 5,
        height: 20,
        width: 20,
        borderWidth: 2,
    }


})