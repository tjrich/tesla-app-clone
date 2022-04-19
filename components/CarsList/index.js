import React from 'react'
import { View, FlatList } from 'react-native'

import styles from './styles'

import cars from './cars'
import CarItem from '../CarItem'

const CarsList = (props) => {
    return (
    <View style={styles.container}>
        <FlatList
            data={cars}
            renderItem={
                ({item}) => 
                <CarItem
                    car={item}
                />
            }
            keyExtractor={(item, index) => index+""}
        />
    </View>
    )
}

export default CarsList