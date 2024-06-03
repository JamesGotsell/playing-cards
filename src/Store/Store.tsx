import React, { createContext } from "react";
import { StoreType } from "../types";

export const StoreContext = createContext({})

const StoreProvider: React.FC<StoreType> = ({children}) => {

    return (
        <StoreContext.Provider value={{}}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;
