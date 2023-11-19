import React  from "react";
import { useThemeContext } from "./ThemeContext";

function ThemedComponent(){
    
    const{theme,toggleTheme}=useThemeContext();

    return(
        <div style={{background:theme==='light'?'green':'yellow',
        color:theme==='light'?'#333':'gray'}}>
            <p>This  is a Themed Component</p>

            <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    )
}

export default ThemedComponent;