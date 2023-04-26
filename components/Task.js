import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        marginTop: 20,
        padding: 20,
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        backgroundColor: 'red',
        height: 20,
        width: 20,
        opacity: 0.4,
    },
    itemText: {
        paddingLeft:10,
        maxWidth:'80%'
    },
    circular: {
        backgroundColor: 'black',
        height: 10,
        width: 10,
        borderRadius: 20
    }
})

export default Task