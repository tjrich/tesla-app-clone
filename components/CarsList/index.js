import React from 'react'
import { View, Text, FlatList } from 'react-native'

import styles from './styles'

import cars from './cars'
import CarItem from '../CarItem'

const CarsList = (props) => {
    return (
    <View style={styles.container}>
        <FlatList
            data={cars}
            renderItems={
                ({item}) => 
                <CarItem
                    car={item}
                // name={item.name}
                // tagline={item.tagline}
                // taglineCTA={item.taglineCT}
                // image={item.image}
                />
            }
            keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>
    </View>
    )
}

export default CarsList