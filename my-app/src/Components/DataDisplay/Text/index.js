import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from './../../../Context/ThemeContext';
import StyledText from './style';

const Text = ({
    children,
    variant,
    color,
    weight,
    bold,
    align,
    style,
    hover,
    hoverColor,
    onClick,
}) => {
    const theme = useTheme();
    const currentColor = color || theme.defaultText;

    return (
        <div onCick={onClick}>
            <StyledText
                as={variant}
                color={currentColor}
                weight={weight}
                bold={bold}
                align={align}
                style={style}
                hover={hover}
                hoverColor={hoverColor}
            >
                {children}
            </StyledText>
        </div>
    );
};

Text.defaultProps = {
    variant: 'p',
    color: null,
    weight: null,
    bold: false,
    align: false,
    style: {},
    hover: false,
    hoverColor: undefined,
    onClick: () => {},
};

Text.propTypes = {
    variant: PropTypes.oneOf('p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'small'),
    color: PropTypes.string,
    weight: PropTypes.string,
    bold: PropTypes.bool,
    align: PropTypes.bool,
    style: PropTypes.objectOf(PropTypes.any),
    hover: PropTypes.bool,
    hoverColor: PropTypes.string,
    onClick: PropTypes.func,
};

export default Text;