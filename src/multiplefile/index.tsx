import React from 'react';
import { Text } from 'react-native';
import { OwnProps } from './type';
import Button from './styles/Buttonstyles';

const ButtonElementMultipleFile = (ownProps: OwnProps) => {
    return (
        <Button disabled={ownProps.disabled} onPress={ownProps.onPress}>
            <Text>{ownProps.text}</Text>
        </Button>
    )
}

export default ButtonElementMultipleFile;