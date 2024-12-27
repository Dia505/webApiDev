import { createContext } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({children}) => {
    // const {name, setName} = useState("John");

    return <InfoContext.Provider>
        {children}
    </InfoContext.Provider>
}