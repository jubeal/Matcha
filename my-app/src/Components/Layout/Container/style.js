import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    felx-direction: ${({ row }) => (row ? 'row' : 'column')};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
    background-color: ${({ backgroundColor }) => backgroundColor || 'unset'};
    :hover {
        background-color: ${({ hover, hoverColor}) => hover && hoverColor};
        cursor: ${({ hover }) => hover && 'pointer'};
        animation: ease 500ms;
    }
`;

export default StyledContainer;