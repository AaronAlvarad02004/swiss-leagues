import { createContext, useContext, useState } from "react";

// Kontext erstellen
const DateContext = createContext();

// Custom Hook zum einfachen Zugriff auf den Kontext
export function useDate() {
    return useContext(DateContext);
}

// Kontext-Provider, der die Daten speichert
export function DateProvider({ children }) {
    const [selectedDate, setSelectedDate] = useState("Heute");

    return (
        <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
            {children}
        </DateContext.Provider>
    );
}
