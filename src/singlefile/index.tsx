import React from 'react';
import { ViewProps, Text } from 'react-native';
import styled from 'styled-components/native';

// styled-components props
interface ButtonProps extends ViewProps {
    disabled: boolean;
    width?: number
}
// styled component Button
const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${props => props.disabled ? 'grey' : `white`};
  align-items: center;
  width: ${props => props.width};
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  border: 1px
`;

// OwnProps
interface OwnProps {
    onPress?: () => void
    text: string
    disabled: boolean
}

// component
const ButtonElement = (ownProps: OwnProps) => {
    return (
        <Button disabled={ownProps.disabled} onPress={ownProps.onPress}>
            <Text>{ownProps.text}</Text>
        </Button>
    )
}

export default ButtonElement