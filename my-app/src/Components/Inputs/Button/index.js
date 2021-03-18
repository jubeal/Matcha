import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './style';

const Button = ({
    children,
    style,
    width,
    backgroundColor,
    color,
    border,
    borderRadius,
    hover,
    hoverColor,
    onClick
}) => {
    return (
        <StyledButton
            style={style}
            width={width}
            backgroundColor={backgroundColor}
            color={color}
            border={border}
            borderRadius={borderRadius}
            hover={hover}
            hoverColor={hoverColor}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

Button.defaultProps = {
    style: {},
    width: undefined,
    backgroundColor: undefined,
    color: undefined,
    border: undefined,
    borderRadius: undefined,
    hover: false,
    hoverColor: undefined,
    onclick: undefined
};

Button.propTypes = {
    width: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    hover: PropTypes.bool,
    hoverColor: PropTypes.string,
    onclick: PropTypes.string
};

export default Button;