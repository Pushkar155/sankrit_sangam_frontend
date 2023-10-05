import React, { createContext, useContext, useState } from 'react';

// Create a new context
const AuthContext = createContext();

// Create a custom hook to access the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create a provider component to wrap your app
export const AuthProvider = ({ children }) => {
    const [isRunning, setIsRunning] = useState(true);
    const [page,setPage]=useState('');
    const [unit,setUnit]=useState('');
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [correct,setCorrect]=useState(0);

    const handleButtonClick = () => {
        console.log(minutes,seconds,correct)
        setIsRunning(false);
      };

    const refresh =()=>{
        setCorrect(0);
        setSeconds(0);
        setMinutes(0);
        setIsRunning(true);
    }
    const handelcorrect =()=>{
        setCorrect(pre=>pre+1);
    }
  

  return (
    <AuthContext.Provider value={{page,isRunning,unit,minutes,seconds,correct, setSeconds, setMinutes,setPage,setIsRunning,refresh,handelcorrect,handleButtonClick,setUnit }}>
      {children}
    </AuthContext.Provider>
  );
};
