import React from 'react';
import PropTypes from 'prop-types';

import StyledContainer from './style';

const Container = ({
    children,
    style,
    row,
    justify,
    align,
    noWrap,
    backgroundColor,
    hover,
    hoverColor,
}) => {
    return (
        <StyledContainer
            style={style}
            row={row}
            justify={justify}
            align={align}
            noWrap={noWrap}
            backgroundColor={backgroundColor}
            hover={hover}
            hoverColor={hoverColor}
        >
            {children}
        </StyledContainer>
    );
};

Container.defaultProps = {
    style: {},
    row: false,
    justify: 'flex-start',
    align: 'flex-start',
    noWrap: false,
    backgroundColor: undefined,
    hover: false,
    hoverColor: undefined,
}

Container.propTypes = {
    row: PropTypes.bool,
    justify: PropTypes.string,
    align: PropTypes.string,
    noWrap: PropTypes.bool,
    backgroundColor: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.any),
    hover: PropTypes.bool,
    hoverColor: PropTypes.string,
};

export default Container;
