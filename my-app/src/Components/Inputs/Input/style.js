import styled from 'styled-components';

const StyledInput = styled.input`
    display: flex;
    flex-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor};
    width: ${({ width }) => width};
    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};
    box-sizing: ${({ boxSizing }) => (boxSizing ? 'border-box' : 'normal')};
    border-radius: ${({ borderRadius }) => borderRadius};
    border: ${( {border }) => border};
    font-size: ${({ fontSize }) => fontSize};
    :hover {
        color: ${({ hover, hoverColor }) => hover && hoverColor};
    }
    :focus {
        color: ${({ focus, focusColor}) => focus && focusColor};
        width: ${({ focus, focusWidth}) => focus && focusWidth};
        background-color: ${({ focus, focusBackground }) => focus && focusBackground};
        border-radius: ${({ borderRadius }) => borderRadius};
        border-color: ${({ focus, focusBorderColor }) => focus && focusBorderColor};
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ color }) => color};
        opacity: 1; /* Firefox */
    }
`;

export default StyledInput;