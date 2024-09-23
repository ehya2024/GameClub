import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export function useTheme() {

    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('context undefined')
    }

    return context

}