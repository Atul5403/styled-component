import React from 'react';
import { Text } from 'react-native';
import { OwnProps } from './type';
import Button from './styles/Buttonstyles';

const ButtonElement = (ownProps: OwnProps) => {
    return (
        <Button disabled={false} onPress={ownProps.onPress}>
            <Text>{ownProps.text}</Text>
        </Button>
    )
}

export default ButtonElement;