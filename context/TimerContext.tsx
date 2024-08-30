import { 
         useState,
         ReactNode, 
         SetStateAction, 
         createContext, 
         Dispatch 
        } from "react";

interface TimerContextProps{
    duration:number;
    setDuration: Dispatch<SetStateAction<number>>;
}

interface TimerProviderProps{
    children:ReactNode;
}

export const TimerContext = createContext<TimerContextProps>({
    duration:10,
    setDuration:()=>{}
});

const TimerProvider = ({children}:TimerProviderProps) => {
    const [duration, setDuration] = useState(10);

    const contextValues = {duration,setDuration};
    return (
        <TimerContext.Provider value={contextValues}>
            {children}
        </TimerContext.Provider>
    )

};

export default TimerProvider;


