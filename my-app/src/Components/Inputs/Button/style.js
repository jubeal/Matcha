import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor || 'unset'};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  :hover {
    background-color: ${({ hover, hoverColor }) => hover && hoverColor};
    cursor: ${({ hover }) => hover && 'pointer'};
  }
  :focus {
    outline: none;
  }
`;

export default StyledButton;
