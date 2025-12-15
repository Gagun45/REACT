import {createContext} from "react";

export type ThemeType = 'dark' | 'light';

export type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const defaultValue = {
    theme: 'dark' as ThemeType,
    toggleTheme: () => {}
}


export const ThemeContext = createContext<ThemeContextType>(defaultValue);