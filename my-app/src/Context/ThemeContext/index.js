import React from 'react';
import { colors } from '../../Constant';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [isLight, setIsLight] = React.useState(true);

    const toggleTheme = () => {
        setIsLight(!isLight);
    };

    const value = {
        isLight,
        toggleTheme,
        ...colors[isLight ? 'light' : 'dark'],
    };

    return <ThemeContext.Provider {...props} value={value} />;
}

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) throw new Error('ThemeContext must be called in ThemeProvider');
    return context;
}

export default ThemeProvider;