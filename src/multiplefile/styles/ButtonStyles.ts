
import ButtonProps from './ButtonStyleTypes';
import styled from 'styled-components/native';

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

export default Button;

Button.defaultProps = {
    disabled: false,
  };