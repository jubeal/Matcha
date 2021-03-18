import React from 'react';
import PropTypes from 'prop-types';

import StyledInput from './style';

const Input = ({
    style,
    row,
    justify,
    align,
    noWrap,
    color,
    backgroundColor,
    width,
    padding,
    margin,
    boxSizing,
    hover,
    hoverColor,
    focus,
    focusColor,
    focusWidth,
    focusBackground,
    error,
    errorMsg,
    title,
    defaultValue,
    placeholder,
    onChange,
    type,
    onFocus,
    borderRadius,
    border,
    fontSize,
    focusBorderColor,
}) => {
    return (
        <StyledInput
            style={style}
            row={row}
            justify={justify}
            align={align}
            noWrap={noWrap}
            color={color}
            backgroundColor={backgroundColor}
            width={width}
            padding={padding}
            margin={margin}
            boxSizing={boxSizing}
            hover={hover}
            hoverColor={hoverColor}
            focus={focus}
            focusColor={focusColor}
            focusWidth={focusWidth}
            focusBackground={focusBackground}
            error={error}
            errorMsg={errorMsg}
            title={title}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            type={type}
            onFocus={onFocus}
            borderRadius={borderRadius}
            border={border}
            fontSize={fontSize}
            focusBorderColor={focusBorderColor}
        />
    );
};

Input.defaultProps = {
    style: {},
    row: false,
    justify: 'flex-start',
    align: 'flex-start',
    noWrap: false,
    color: '#FFFFFF',
    backgroundColor: undefined,
    width: '100%',
    padding: undefined,
    margin: undefined,
    boxSizing: 'border-box',
    hover: false,
    hoverColor: undefined,
    focus: false,
    focusColor: undefined,
    focusWidth: undefined,
    focusBackground: undefined,
    borderRadius: undefined,
    border: undefined,
    fontSize: undefined,
    focusBorderColor: undefined,
};

Input.propTypes = {
    row: PropTypes.bool,
    justify: PropTypes.string,
    align: PropTypes.string,
    noWrap: PropTypes.bool,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    boxSizing: PropTypes.string,
    hover: PropTypes.bool,
    hoverColor: PropTypes.string,
    focus: PropTypes.bool,
    focusColor: PropTypes.string,
    focusWidth: PropTypes.string,
    focusBackground: PropTypes.string,
    borderRadius: PropTypes.string,
    border: PropTypes.string,
    fonSize: PropTypes.string,
    focusBoderColor: PropTypes.string,
};

export default Input;