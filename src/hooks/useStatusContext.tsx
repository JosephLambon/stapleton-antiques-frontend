import { useContext } from "react";
import { StatusContext, type StatusContextType } from "../routes/home";

const useStatusContext = () : StatusContextType => {
    const context  = useContext(StatusContext);
    if(!context) {
        throw new Error("useStatusContext must be used within StatusProvider");
    }
    
    return context;
};

export default useStatusContext;