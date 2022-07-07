import React from 'react';
import {useCounter} from "./context/ counter";
import {useTheme} from "./context/theme";

const Navbar = () => {

    const { counter, handleDecrement, handleIncrement, login  } = useCounter()
    const { toggleTheme } = useTheme()
    return (
        <div>
            {counter}
            <div>
                <button onClick={() =>handleIncrement(5)}>
                    increment
                </button>
                <button onClick={handleDecrement}>
                    decrement
                </button>

                <button onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </div>
        </div>
    );
};

export default Navbar;