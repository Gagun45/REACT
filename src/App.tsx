import {LeftParent} from "./components/LeftParent.tsx";
import {RightParent} from "./components/RightParent.tsx";
import {defaultValue, ThemeContext, type ThemeContextType, type ThemeType} from "./context/ThemeContext.tsx";
import {useState} from "react";

const App = () => {

        const [theme, setTheme] = useState<ThemeType>(defaultValue.theme);

        const value: ThemeContextType = {
            theme,
            toggleTheme: () => setTheme(theme => theme === 'dark' ? 'light' : 'dark'),
        }

        return (
            <div className={theme}>

                <ThemeContext.Provider value={value}>
                    <LeftParent/>
                    <RightParent/>
                </ThemeContext.Provider>
            </div>
        )
    }
;

export default App;
