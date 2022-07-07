import React, {useState} from 'react';
import {useTheme} from "./theme";

export const CounterContext = React.createContext()

const CounterProvider = ({children}) => {
    const [counter,setCounter] = useState(0)
    const { theme, isDark } = useTheme()
    const handleIncrement = (amount=1) => {
        setCounter(isDark? counter+amount : counter-amount)
    }

    const handleDecrement = () => {
        setCounter(isDark? counter-1 : counter+1)
    }

    return (
        <CounterContext.Provider
            value={{
                counter,handleDecrement,handleIncrement
            }}
        >
            {children}
        </CounterContext.Provider>
    )
};

export default CounterProvider;

export const useCounter = () => {
    const {counter, handleDecrement, handleIncrement} = React.useContext(CounterContext)

    return {
        counter,handleDecrement,handleIncrement
    }
}