import React from 'react';
import { ViewProps, Text } from 'react-native';
import styled from 'styled-components/native';

// styled-components props
// styled component Button
const Button = styled.TouchableOpacity`
  background-color: 'grey';
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  border: 1px
`;

Button.defaultProps = {
    disabled: false,
  };

// OwnProps
interface OwnProps {
    onPress?: () => void
    text: string
}

// component
const WithoutProps = (ownProps: OwnProps) => {
    return (
        <Button onPress={ownProps.onPress}>
            <Text>{ownProps.text}</Text>
        </Button>
    )
}

export default WithoutProps;