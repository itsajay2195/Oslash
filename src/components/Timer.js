import React,{useEffect,useState} from 'react'
import {View,Text} from 'react-native'

const Timer = (props) => {
    useEffect(()=>{
        console.warn(props)
        let myInterval = setInterval(() => {
                if (props.sec > 0) {
                    console.warn('1')
                    props.setsec(props.sec - 1);
                }
                if (props.sec === 0) {
                    if (props.min === 0) {
                        props.clearSelected([])
                        props.setExp(false)
                        clearInterval(myInterval)
                    } else {
                        props.setmin(props.min - 1);
                        props.setsec(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        },);
    return ( 
        <Text>{props.min}:{props.sec < 10 ?  `0${props.sec}` : props.sec}</Text>

     );
}
 
export default Timer;