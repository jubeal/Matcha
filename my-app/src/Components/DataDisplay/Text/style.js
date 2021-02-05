import styled from 'styled-components';

const StyledText = styled.text`
    color: ${({ color }) => color};
    font-weight: ${({ bold, weight }) =>
        weight ? weight : bold ? 'bold' : 'normal'};
    text-align: ${({ align }) => (align ? 'center' : 'left')};
    :hover {
        color: ${({ hover, hoverColor }) => hover && hoverColor};
        cursor: ${({ hover }) => hover && 'pointer'};
        animation: ease 500ms;
    }
`;

export default StyledText;