import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

import { OwnProps } from './type';


interface Style {
    buttonContainer: ViewStyle;
    
  }
const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth: 1,
        display: "flex",
        borderRadius: 10,
        padding: 12,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: 'grey',
    }
})

const ButtonWithoutStyledComponent = (ownProps: OwnProps) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text>{ownProps.text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonWithoutStyledComponent;