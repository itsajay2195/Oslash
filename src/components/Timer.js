import React, { useEffect, useState } from 'react'
import { View, Text,Image } from 'react-native'


const Timer = (props) => {
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (props.sec > 0) {

                props.setsec(props.sec - 1);
            }
            if (props.sec === 0) {
                if (props.min === 0) {
                    props.clearSelected([])
                    props.setExp(true)
                    clearInterval(myInterval)
                } else {
                    props.setmin(props.min - 1);
                    props.setsec(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });
    return (
        <Text style={{ textAlign: 'center' }}><Image style={{height:15,width:15}} source={require('../utils/warning.jpeg') }></Image><Text>Your booking will expire in: </Text>{props.min} minutes :{props.sec < 10 ? `0${props.sec}seconds` : props.sec + ' seconds'}</Text>

    );
}

export default Timer;