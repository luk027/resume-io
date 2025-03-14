import { createContext, useEffect, useState } from "react";
import data from '../data.json'

export const ResumeContext = createContext();

export const ResumeProvider = ({children}) => {
    const [resumeInfo, setResumeInfo] = useState(data);
    useEffect(() => {
        setResumeInfo(data);
    },[])
    return(
        <ResumeContext.Provider value={{resumeInfo, setResumeInfo}}>
            {children}
        </ResumeContext.Provider>
    );
}
